import { spawn, ChildProcess } from "child_process";
import chalk from "chalk";
import watchMain from "./util/watchMain";

// Keep track of time so we know how long traspiling takes
let timestamp: number = Date.now();

// Default child process state
let killed = true;

// Child process instance
let app: ChildProcess | undefined;

/**
 *  Keep track of child process state to make sure we don't start a new one before the running process is killed
 */
const waitForKill = () =>
  new Promise<void>((resolve, reject) => {
    let timeout = setTimeout(reject, 5000);

    let interval = setInterval(() => {
      if (killed) {
        clearTimeout(timeout);
        clearInterval(interval);

        resolve();
      }
    }, 50);
  });

/**
 * Update time right before compiling starts
 */
const beforeCompile = () => (timestamp = Date.now());

/**
 * (Re)start application process after compiling
 */
const afterCompile = async () => {
  // Kill running process if it exists
  if (app) {
    // @ts-ignore
    app.kill("SIGINT");
    await waitForKill();
  }

  console.clear();
  console.info(
    chalk.green(`(Re)starting application (${Date.now() - timestamp}ms)\n`)
  );

  // Start application
  app = spawn("node", ["./build/app/index.js"], {
    env: {
      ...process.env,
      NODE_ENV: "development",
      PORT: "4000",
      CORS_WHITELIST: "http://localhost:3000"
    },
    stdio: "inherit"
  });

  // Update process state
  killed = false;

  // Log when application closes
  app.on("close", async code => {
    console.log(chalk.yellow(`Child process exited with code ${code}`));

    killed = true;
  });
};

// Run typescript with project typescript configuration in watch mode
watchMain({ beforeCompile, afterCompile });
