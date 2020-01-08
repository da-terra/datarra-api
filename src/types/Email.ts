declare global {
  type EmailTemplateData = {
    to: string;
    name: string;
    subject: string;
    utmCampaign: string;
  };

  type QuickscanResultEmailTemplateData = EmailTemplateData & {
    quickscanProfileUrl: string;
  };

  type NewsletterSignupTemplateData = EmailTemplateData & {};

  type EmailTemplate =
    | QuickscanResultEmailTemplateData
    | NewsletterSignupTemplateData;

  /**
   *
   */
  type SendGridConfig = {
    from: {
      email: string;
      name: string;
    };
    trackingSettings: {
      clickTracking: {
        enable: boolean;
        enableText: boolean;
      };
      openTracking: {
        enable: boolean;
      };
      ganalytics: {
        enable: boolean;
        utmSource: string;
        utmMedium: string;
      };
    };
  };

  interface EmailProvider {
    send(template: string, emailBodys: EmailTemplate[]): Promise<void>;
  }
}

export {};
