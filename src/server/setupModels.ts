import article from "../database/model/Article";
import event from "../database/model/Event";
import page from "../database/model/Page";
import project from "../database/model/Project";
import quickscanQuestion from "../database/model/QuickscanQuestion";
import quickscanResult from "../database/model/QuickscanResult";
import user from "../database/model/User";
import organization from "../database/model/Organization";

const setupModels = (): IModels => {
  return {
    article: article(),
    event: event(),
    organization: organization(),
    page: page(),
    project: project(),
    quickscanQuestion: quickscanQuestion(),
    quickscanResult: quickscanResult(),
    user: user()
  };
};

export default setupModels;
