import { FastifyInstance } from "fastify";
import { boardAdd } from "./board/add";

export function serverRoutes(server: FastifyInstance) {
  boardAdd(server);
}
