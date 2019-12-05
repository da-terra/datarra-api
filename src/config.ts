type AppSettings = {
  server: {
    port: number;
    corsWhitelist: string[];
  };
  database: {
    mongoDbConnectionString: string;
    mongoDbName: string;
  };
};

const config: AppSettings = {
  server: {
    port: parseInt(process.env.PORT!, 10),
    corsWhitelist: process.env.CORS_WHITELIST!.split(",")
  },
  database: {
    mongoDbConnectionString: process.env.CUSTOMCONNSTR_MONGO_DB!,
    mongoDbName: process.env.MONGO_DB_NAME!
  }
};

/** Validate config on startup */
if (config.database.mongoDbName == null) {
  throw new Error("PORT environment variable is required");
}

if (config.database.mongoDbName == null) {
  throw new Error("MONGO_DB_NAME environment variable is required");
}

if (config.database.mongoDbName == null) {
  throw new Error("CUSTOMCONNSTR_MONGO_DB environment variable is required");
}

export default config;
