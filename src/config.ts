type AppSettings = {
  server: {
    port: number;
    corsWhitelist: string[];
  };
  database: {
    mongoDbConnectionString: string;
  };
};

const config: AppSettings = {
  server: {
    port: parseInt(process.env.PORT!, 10),
    corsWhitelist: process.env.CORS_WHITELIST!.split(",")
  },
  database: {
    mongoDbConnectionString: process.env.CUSTOMCONNSTR_MONGO_DB!
  }
};

if (config.database.mongoDbConnectionString == null) {
  throw new Error("CUSTOMCONNSTR_MONGO_DB environment variable is required");
}

export default config;
