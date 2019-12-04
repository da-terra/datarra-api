type AppSettings = {
  server: {
    port: number;
    corsWhitelist: string[];
  };
  port: number;
  database: {
    mongoDbConnectionString: string;
  };
};

export default {
  server: {
    port: parseInt(process.env.PORT!, 10),
    corsWhitelist: process.env.CORS_WHITELIST!.split(",")
  },
  database: {
    mongoDbConnectionString: process.env.CUSTOMCONNSTR_MONGO_DB!
  }
} as AppSettings;
