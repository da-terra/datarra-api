import sendgrid from "@sendgrid/mail";

class SendGridProvider implements IEmailProvider {
  config: ISendGridConfig;

  constructor(apiKey: string, config: ISendGridConfig) {
    sendgrid.setApiKey(apiKey);

    this.config = config;
  }

  async send(template: string, emails: IEmailTemplate[]) {
    const messages = emails.map(email => ({
      ...email,
      ...this.config,
      templateId: template,
      dynamic_template_data: email
    }));

    return sendgrid.send(messages);
  }
}

export default SendGridProvider;
