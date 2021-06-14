import { config as loadEnvVars } from "dotenv";
import type { NodeMode } from "./typings/node/mode";
import { createLoggerInstance } from "./helpers/util";
import { initServer } from "./server/setup-server";
import { writeLog } from "fast-node-logger";
import { serverRoutes } from "./server/routes/router";

/** load process.env variables from .env file */
loadEnvVars();

/** server mode base on process.env.NODE_ENV */
let nodeMode: NodeMode = process.env.NODE_ENV || "production";

if (process.env.NODE_ENV) {
  nodeMode = process.env.NODE_ENV;
}

/**@step create a logger instance */
/**@description logger instance to store logs in files located in ./logs directory */
const logger = await createLoggerInstance(nodeMode);

const server = initServer({ logger });
serverRoutes(server);

const port = 4003;
server.listen(port, (err, address) => {
  if (err) {
    writeLog(err, { level: "fatal", stdout: true });
    process.exit(1);
  }
  writeLog(`server listening on ${address}`, { level: "info", stdout: true });
});
