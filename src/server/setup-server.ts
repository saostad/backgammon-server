import { Logger } from "fast-node-logger";
import fastify from "fastify";
import { initialBoard } from "../helpers/board";
import { initialPlayer } from "../helpers/player";
import {
  HomeBoardLocation,
  KickoffStarter,
  Player,
} from "../typings/basic-types";

type InitServer = { logger: Logger };

export function initServer({ logger }: InitServer) {
  const server = fastify({ logger });

  // TODO: add security headers and others here

  return server;
}
