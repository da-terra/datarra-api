type AppSettings = {
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
};

const config: AppSettings = {
  server: {
    origin: "https://www.datascienceplatform.nl",
    port: parseInt(process.env.PORT!, 10),
    corsWhitelist: process.env.CORS_WHITELIST!.split(",")
  },
  database: {
    mongoDbConnectionString: process.env.CUSTOMCONNSTR_MONGO_DB!
  },
  sendGrid: {
    apiKey: process.env.SENDGRID_API_KEY!,
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
  }
};

if (config.database.mongoDbConnectionString == null) {
  throw new Error("CUSTOMCONNSTR_MONGO_DB environment variable is required");
}

if (config.sendGrid.apiKey == null) {
  throw new Error("SENDGRID_API_KEY environment variable is required");
}

export default config;
