type QuickScanArguments = undefined;

export default (pageArguments: QuickScanArguments) => {
  return {
    averageDuration: "P1Y",
    questions: [
      {
        question: "Hoe gaan we op dit moment om met data in onze organisatie?",
        options: [
          {
            label: "Het wordt opgeslagen zodat we het later terug kunnen zien",
            value: 0
          },

          {
            label: "Het wordt opgeslagen en verwerkt met kleine berekeningen",
            value: 1
          },

          {
            label: "We slaan helemaal geen data op",
            value: 2
          },

          {
            label:
              "We gebruiken de data om te kijken wat er mogelijk in de toekomst gebeurt",
            value: 3
          }
        ]
      }
    ]
  };
};
