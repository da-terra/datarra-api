const navigation = {
  type: "c0-navigation",
  data: {
    button: {
      children: "Inloggen"
    }
  }
};

const header = {
  type: "c1-hero",
  data: {
    slogan: "Data in actie",
    buttons: [
      {
        children: "Ik ben hier namens een bedrijf"
      },
      {
        children: "Ik ben een student"
      },
      {
        children: "Ik ben een expert "
      }
    ]
  }
};

const featuredArticles = {
  type: "c2-featured-articles",
  data: {
    tag: "Blog",
    title: "Wat kan data science voor jou betekenen?",
    articles: [
      {
        color: "FD4444",
        publishedDate: new Date().toISOString(),
        tag: "Innovatie",
        title: "The Method of Full Featured Innovation",
        author: {
          name: "Marien Zwarts"
        }
      },
      {
        color: "8540CD",
        publishedDate: new Date().toISOString(),
        tag: "Innovatie",
        title: "The Method of Full Featured Innovation",
        author: {
          name: "Marien Zwarts"
        }
      },
      {
        color: "4282EA",
        publishedDate: new Date().toISOString(),
        tag: "Innovatie",
        title: "The Method of Full Featured Innovation",
        author: {
          name: "Marien Zwarts"
        }
      }
    ]
  }
};

const pages: any = {
  homepage: [
    JSON.stringify(navigation),
    JSON.stringify(header),
    JSON.stringify(featuredArticles)
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
