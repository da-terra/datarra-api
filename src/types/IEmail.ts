declare global {
  type IEmailTemplateData = {
    to: string;
    name: string;
    subject: string;
    utmCampaign: string;
  };

  type IQuickscanResultEmailTemplateData = IEmailTemplateData & {
    quickscanProfileUrl: string;
  };

  type INewsletterSignupTemplateData = IEmailTemplateData & {};

  type IEmailTemplate =
    | IQuickscanResultEmailTemplateData
    | INewsletterSignupTemplateData;

  /**
   *
   */
  type ISendGridConfig = {
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

  type IEmailProvider = {
    send(template: string, emailBodys: IEmailTemplate[]): Promise<any>;
  };
}

export {};
