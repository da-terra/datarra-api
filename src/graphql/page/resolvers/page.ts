const navigation = {
  type: "c0-navigation",
  data: {
    button: {
      children: "Inloggen"
    }
  }
};

const header = {
  type: "c2-hero",
  data: {
    slogan: "Zet data in werking",
    buttons: [
      {
        uuid: "1",
        children: "Ik ben hier namens een bedrijf"
      },
      {
        uuid: "2",
        children: "Ik ben een student"
      },
      {
        uuid: "3",
        children: "Ik ben een expert "
      }
    ]
  }
};

const footer = {
  type: "c1-footer",
  data: {
    socialNetworks: [
      {
        uuid: "1",
        image: {
          src: "/socialNetworks/twitter.svg",
          alt: "LinkedIn logo",
          fallbackColor: "transparent"
        },
        link: {
          href: "https://linkedin.com/",
          title: "LinkedIn",
          target: "_blank"
        }
      },
      {
        uuid: "2",
        image: {
          src: "/socialNetworks/twitter.svg",
          alt: "Twitter logo",
          fallbackColor: "transparent"
        },
        link: {
          href: "https://twitter.com/",
          title: "Twitter",
          target: "_self"
        }
      }
    ],
    sitemap: [
      {
        uuid: "1",
        tag: "Blog",
        links: [
          {
            uuid: "1",
            href: "/blog/?tag=case-studies",
            title: "Case studies",
            target: "_self"
          },
          {
            uuid: "2",
            href: "/blog/?tag=innovatie",
            title: "Innovatie",
            target: "_self"
          },
          {
            uuid: "3",
            href: "/blog/?tag=procesoptimalisatie ",
            title: "Procesoptimalisatie",
            target: "_self"
          }
        ]
      },
      {
        uuid: "2",
        tag: "Data Science",
        links: [
          {
            uuid: "1",
            href: "/quickscan",
            title: "Quickscan",
            target: "_self"
          },
          {
            uuid: "2",
            href: "/events",
            title: "Bijeenkomsten",
            target: "_self"
          }
        ]
      },
      {
        uuid: "3",
        tag: "Algemeen",
        links: [
          {
            uuid: "1",
            href: "/algemene-voorwaarden",
            title: "Algemene voorwaarden",
            target: "_self"
          },
          {
            uuid: "2",
            href: "/privacy-policy",
            title: "Privacy policy",
            target: "_self"
          }
        ]
      }
    ],
    disclaimer: "Studata - Copyright 2019 - KvK 12345678"
  }
};

const featuredArticles = {
  type: "c3-featured-articles",
  data: {
    tag: "Blog",
    title: "Wat kan data science\n voor jou betekenen?",
    articles: [
      {
        uuid: "1",
        color: "FD4444",
        publishedDate: "2019-10-01T09:21:10.586Z",
        tag: "Innovatie",
        title: "The Method of Full Featured Innovation",
        image: {
          src: "https://source.unsplash.com/1600x900/?city",
          alt: "Random image",
          fallbackColor: "EEEEEE"
        },
        author: {
          name: "Marien Zwarts"
        }
      },
      {
        uuid: "2",
        color: "8540CD",
        publishedDate: "2019-11-03T09:21:10.586Z",
        tag: "Innovatie",
        title: "The Method of Full Featured Innovation",
        image: {
          src: "https://source.unsplash.com/1600x900/?urban",
          alt: "Random image",
          fallbackColor: "EEEEEE"
        },
        author: {
          name: "Marien Zwarts"
        }
      },
      {
        uuid: "3",
        color: "4282EA",
        publishedDate: "2019-11-06T09:21:10.586Z",
        tag: "Innovatie",
        title: "The Method of Full Featured Innovation",
        image: {
          src: "https://source.unsplash.com/1600x900/?nature",
          alt: "Random image",
          fallbackColor: "EEEEEE"
        },
        author: {
          name: "Marien Zwarts"
        }
      }
    ],
    link: {
      href: "/",
      title: "Bekijk alle artikelen",
      target: "_self"
    }
  }
};

const cta = {
  type: "c4-call-to-action",
  data: {
    title: "Is mijn organisatie\n er klaar voor?",
    link: {
      href: "/quickscan",
      target: "_self",
      title: "Doe de quickscan in 5 minuten"
    },
    shape: {
      src: "/cta-shape.png",
      alt: "Background shape",
      fallbackColor: "transparent"
    }
  }
};

const featuredEvents = {
  type: "c5-featured-events",
  data: {
    tag: "Events",
    title: "Kom naar onze bijeenkomsten",
    events: [
      {
        uuid: "1",
        color: "FD4444",
        startDate: "2019-10-01T09:21:10.586Z",
        title: "Data Science at Wehkamp",
        description:
          "Let's not forget that impact of the comprehensive methods underlines the limitations of The Interference of Consecutive Control."
      },
      {
        uuid: "2",
        color: "4282EA",
        startDate: "2019-11-06T09:21:10.586Z",
        title: "The Method of Full Featured Innovation",
        description:
          "Let's not forget that impact of the comprehensive methods underlines the limitations of The Interference of Consecutive Control."
      }
    ],
    link: {
      href: "/",
      title: "Bekijk alle bijeenkomsten",
      target: "_self"
    }
  }
};

const partners = {
  type: "c6-partners",
  data: {
    title: "Samens staan we sterk",
    tag: "Partners",
    content:
      "Up to a certain time, a number of the deep analysis fairly the ultimate advantage of statistical product over alternate practices the share of corporate responsibilities and The Organization of Conservative Application.\n\n(Jerrell Griggs in The Book of the Interactive Services Detection)\nAt any rate, study of enduring practices effectively illustrates the utter importance of the participant evaluation sample.",
    partners: [
      {
        uuid: "1",
        title: "IJsselvliet",
        image: {
          src: "/partners/ijsselvliet.png",
          alt: "IJsselvliet logo",
          fallbackColor: "transparent"
        },
        link: {
          href: "https://ijsselvliet.nl",
          title: "Website van IJsselvliet",
          target: "_blank"
        }
      },
      {
        uuid: "2",
        title: "Wehkamp",
        image: {
          src: "/partners/wehkamp.svg",
          alt: "Wehkamp logo",
          fallbackColor: "transparent"
        },
        link: {
          href: "https://wehkamp.nl",
          title: "Website van Wehkamp",
          target: "_blank"
        }
      }
    ]
  }
};

const pages: any = {
  homepage: [
    JSON.stringify(navigation),
    JSON.stringify(header),
    JSON.stringify(featuredArticles),
    JSON.stringify(cta),
    JSON.stringify(featuredEvents),
    JSON.stringify(partners),
    JSON.stringify(footer)
  ]
};

type PageArguments = {
  name: string;
};

export default (pageArguments: PageArguments) => {
  const { name } = pageArguments;

  return {
    name,
    blocks: pages[name]
  };
};
