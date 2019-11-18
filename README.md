# studata-api

# Requirements

- NodeJS 12.10 or higher

# Configuration

The application can be configured via environment variables. The start script will set these for you to make development easier. Set all environment variables if you want to run the application standalone.

Name             | Start script value      | Description
---------------- | ----------------------- | -------------------------------------
`NODE_ENV`       | `development`           | Defines in which mode the application is running
`PORT`           | `4000`                  | Port that the applications listens to
`CORS_WHITELIST` | `http://localhost:3000` | The origins that are allowed to send cross origin requests to this application. Multiple origins can be added by seperating them with a `,`. eg. `http://localhost:3000,http://localhost:3001`
`MONGO_DB_CONNECTION_STRING` | `undefined` | MongoDb connection string

GraphiQL is enabled when the application is running in development mode. GraphiQL is a web interface that you can use to debug the application. You can find it on the [graphql endpoint](http://localhost:4000/graphql).

# Build steps

The build tools in the repository are used to transpile the Typescript source code to Javascript. The transpiled Javascript can run using NodeJS 12.10 and higher.

Follow these steps to start a development build for the application:

- Compile the build scripts to Javascript with `npm run init`
- Compile and run the api with `npm run start`. The `start` script will build the application, watch for source changes, and start the application. The application will restart on incremental builds.

Follow these steps to start a production build for the application:

- Compile the build scripts to Javascript with `npm run init`
- Compile and run the api with `npm run build`.