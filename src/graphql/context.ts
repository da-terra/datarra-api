import SendGrid from "../lib/SendGridProvider";
import config from "../config";

export default {
  providers: {
    email: new SendGrid(config.sendGrid.apiKey, config.sendGrid.config)
  }
};
