import { Express } from "express";
import passport from "passport";
import { Document, Model } from "mongoose";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { IUser, Role } from "@data-science-platform/shared";
import config from "../../../config";

const createGoogleStrategy = (app: Express, userModel: Model<Document, {}>) => {
  const googleStrategy = new GoogleStrategy(
    {
      clientID: config.passport.google.clientId,
      clientSecret: config.passport.google.clientSecret,
      callbackURL: config.passport.google.callbackURL
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await userModel.findOne({
        provider: "google",
        id: profile.id
      });

      if (user == null) {
        const emails =
          profile.emails &&
          profile.emails.map(email => ({
            value: email.value,
            type: email.type
          }));

        user = await userModel.create({
          provider: "google",
          emails,
          id: profile.id,
          displayName: profile.displayName,
          name: profile.name,
          photos: profile.photos
        } as IUser);
      }

      done(undefined, user);
    }
  );

  passport.use(googleStrategy);

  // GET /auth/google
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  The first step in Google authentication will involve
  //   redirecting the user to google.com.  After authorization, Google
  //   will redirect the user back to this application at /auth/google/callback
  app.get(
    "/auth/google",
    passport.authenticate(
      "google",
      {
        scope: ["profile", "email"]
      },
      (req, res) => {
        res.end();
      }
    )
  );

  // GET /auth/google/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to their dashboard.
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/signin" }),
    (req, res) => {
      res.redirect("/dashboard");
      res.end();
    }
  );
};

export default createGoogleStrategy;
