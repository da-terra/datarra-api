type AppSettings = {
  environment: {
    isProduction: boolean;
  };
  server: {
    origin: string;
    port: number;
    corsWhitelist: string[];
  };
  database: {
    mongoDbConnectionString: string;
  };
  sendGrid: {
    apiKey: string;
    config: ISendGridConfig;
  };
  passport: {
    sessionSecret: string;
    google: {
      clientId: string;
      clientSecret: string;
      callbackURL: string;
    };
  };
};

enum EnvironmentVariable {
  NodeEnv = "NODE_ENV",
  Origin = "ORIGIN",
  Port = "PORT",
  CorsWhitelist = "CORS_WHITELIST",
  MongoDbConnectString = "CUSTOMCONNSTR_MONGO_DB",
  SendGridApiKey = "SENDGRID_API_KEY",
  SessionSecret = "SESSION_SECRET",
  GoogleClientId = "GOOGLE_CLIENT_ID",
  GoogleClientSecret = "GOOGLE_CLIENT_SECRET",
  GoogleClientCallbackUrl = "GOOGLE_CLIENT_CALLBACK_URL"
}

const getFromEnvironment = (key: EnvironmentVariable): string =>
  process.env[key]!;

const config: AppSettings = {
  environment: {
    isProduction:
      getFromEnvironment(EnvironmentVariable.NodeEnv) === "production"
  },
  server: {
    origin: getFromEnvironment(EnvironmentVariable.Origin),
    port: parseInt(getFromEnvironment(EnvironmentVariable.Port), 10),
    corsWhitelist: getFromEnvironment(EnvironmentVariable.CorsWhitelist).split(
      ","
    )
  },
  database: {
    mongoDbConnectionString: getFromEnvironment(
      EnvironmentVariable.MongoDbConnectString
    )!
  },
  sendGrid: {
    apiKey: getFromEnvironment(EnvironmentVariable.SendGridApiKey),
    config: {
      from: {
        name: "Data Science Platform",
        email: "no-reply@datascienceplatform.nl"
      },
      trackingSettings: {
        clickTracking: {
          enable: true,
          enableText: true
        },
        openTracking: {
          enable: true
        },
        ganalytics: {
          enable: true,
          utmMedium: "email",
          utmSource: "https://www.datascienceplatform.nl"
        }
      }
    }
  },
  passport: {
    sessionSecret: getFromEnvironment(EnvironmentVariable.SessionSecret),
    google: {
      clientId: getFromEnvironment(EnvironmentVariable.GoogleClientId),
      clientSecret: getFromEnvironment(EnvironmentVariable.GoogleClientSecret),
      callbackURL: getFromEnvironment(
        EnvironmentVariable.GoogleClientCallbackUrl
      )
    }
  }
};

/**
 * Validate all environment variables
 */
Object.values(EnvironmentVariable).forEach(key => {
  if (getFromEnvironment(key) != null) {
    return;
  }

  throw new Error(`${key} environment variable is required`);
});

export default config;
