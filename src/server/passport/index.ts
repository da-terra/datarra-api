import { Express } from "express";
import { IUser } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "passport";
import MongoStore from "connect-mongo";
import config from "../../config";
import createGoogleStrategy from "./strategy/createGoogleStrategy";
import cookieParser from "cookie-parser";

const MongoStoreDriver = MongoStore(session);

const setupPassport = (
  app: Express,
  model: {
    user: Model<Document, {}>;
  }
) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(
    session({
      secret: config.passport.sessionSecret,
      resave: false,
      saveUninitialized: false,
      store: new MongoStoreDriver({
        mongooseConnection: mongoose.connection,

        // Azure Cosmos DB doesn't allow TTL on properties other then _ts, we must use the interval autoRemove method.
        autoRemove: "interval"
      })
    })
  );

  //
  app.use(passport.initialize());
  app.use(passport.session());

  //
  passport.serializeUser((user: IUser, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) =>
    done(null, await model.user.findOne({ id }))
  );

  app.get("/signout", (req, res) => {
    req.logout();
    res.redirect("/");
    res.end();
  });

  // Use the GoogleStrategy within Passport.
  //   Strategies in passport require a `verify` function, which accept
  //   credentials (in this case, a token, tokenSecret, and Google profile), and
  //   invoke a callback with a user object.
  createGoogleStrategy(app, model.user);
};

export default setupPassport;
