# studata-api

# Requirements

- NodeJS 12.10 or higher

# Build steps

The build tools in the repository are used to transpile the Typescript source code to Javascript. The transpiled Javascript can run using NodeJS 12.10 and higher.

Follow these steps to start a development build for the application:

- Compile the build scripts to Javascript with `npm run init`
- Compile and run the api with `npm run start`. The `start` script will build the application, watch for source changes, and start the application. The application will restart on incremental builds.

Follow these steps to start a production build for the application:

- Compile the build scripts to Javascript with `npm run init`
- Compile and run the api with `npm run build`.
