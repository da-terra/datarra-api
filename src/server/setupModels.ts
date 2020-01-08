import createActivityModel from "../database/model/Activity";
import createArticleModel from "../database/model/Article";
import createEventModel from "../database/model/Event";
import createFileModel from "../database/model/File";
import createOrganizationModel from "../database/model/Organization";
import createPageModel from "../database/model/Page";
import createProjectModel from "../database/model/Project";
import createProjectState from "../database/model/ProjectState";
import createQuickscanQuestion from "../database/model/QuickscanQuestion";
import createQuickscanResult from "../database/model/QuickscanResult";
import createUserModel from "../database/model/User";

const setupModels = (): Models => ({
  Activity: createActivityModel(),
  Article: createArticleModel(),
  Event: createEventModel(),
  File: createFileModel(),
  Organization: createOrganizationModel(),
  Page: createPageModel(),
  Project: createProjectModel(),
  ProjectState: createProjectState(),
  QuickscanQuestion: createQuickscanQuestion(),
  QuickscanResult: createQuickscanResult(),
  User: createUserModel()
});

export default setupModels;
