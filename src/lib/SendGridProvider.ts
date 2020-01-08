import sendgrid from "@sendgrid/mail";
import config from "../config";

class SendGridProvider implements EmailProvider {
  constructor() {
    sendgrid.setApiKey(config.sendGrid.apiKey);
  }

  async send(template: string, emails: EmailTemplate[]): Promise<void> {
    const messages = emails.map(email => ({
      ...config.sendGrid.config,
      ...email,
      templateId: template,

      // eslint-disable-next-line
      dynamic_template_data: email
    }));

    await sendgrid.send(messages);
  }
}

export default SendGridProvider;
