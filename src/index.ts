import { config as loadEnvVars } from "dotenv";
import { writeLog } from "fast-node-logger";
import type { NodeMode } from "./typings/node/mode";
import { createLoggerInstance } from "./helpers/util";
import { initialBoard } from "./helpers/board";
import { Checker, HomeBoardLocation, Player } from "./typings/basic-types";
import { initialPlayer } from "./helpers/player";
import { initialCheckers } from "./helpers/checker";
import { roll } from "./helpers/actions";

/* place holder for execution time measuring **/
const hrstart = process.hrtime();
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

/**@rules https://www.bkgm.com/rules.html */

/**  played on a board consisting of twenty-four narrow triangles called points */
const numberOfPoints = 24;
/** The triangles alternate in color and are grouped into four quadrants of six triangles each. */
const numberOfPointsInEachQuadrant = 6;

const numberOfCheckersPerPlayer = 15;

type Config = {
  homeBoardLocation: HomeBoardLocation;
};

const config: Config = {
  homeBoardLocation: "left",
};

const player1 = initialPlayer({
  color: "red",
  name: "Saeid",
});
const player2 = initialPlayer({
  color: "blue",
  name: "Amir",
});

const board = initialBoard({
  numberOfPoints,
  players: [player2, player1],
  numberOfCheckersPerPlayer,
  homeBoardLocation: config.homeBoardLocation,
});

const move01 = roll({ numberOfDice: 2, player: player1 });
