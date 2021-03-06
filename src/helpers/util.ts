import { createLogger } from "fast-node-logger";
import path from "path";
import { NodeMode } from "../typings/node/mode";
import keytar from "keytar";

export async function getCredential(targetName: string) {
  const [myCred] = await keytar.findCredentials(targetName);
  return {
    ...myCred,
    // eslint-disable-next-line no-control-regex
    password: myCred.password.replace(/[\x00-\x08\x0E-\x1F\x7F-\uFFFF]/g, ""),
  };
}

export async function createLoggerInstance(nodeMode: NodeMode) {
  /** ready to use instance of logger */
  const logger = await createLogger({
    level: nodeMode === "development" ? "trace" : "info",
    prettyPrint: { colorize: true, translateTime: " yyyy-mm-dd HH:MM:ss" },
    logDir: path.join(process.cwd(), "logs"),
    retentionTime: nodeMode === "development" ? 360000 : undefined,
  });
  logger.info(`script started in ${nodeMode} mode!`);
  return logger;
}
