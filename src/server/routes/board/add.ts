import { FastifyInstance } from "fastify";
import { initialBoard } from "../../../helpers/board";
import { initialPlayer } from "../../../helpers/player";
import {
  HomeBoardLocation,
  KickoffStarter,
  Player,
} from "../../../typings/basic-types";

export function boardAdd(server: FastifyInstance) {
  server.post<{
    Body: {
      homeBoardLocation: HomeBoardLocation;
      kickoffStarter: KickoffStarter;
      player1: Pick<Player, "color" | "name">;
      player2: Pick<Player, "color" | "name">;
    };
  }>(
    "/board/add",
    {
      schema: {
        body: {
          type: "object",
          required: [
            "homeBoardLocation",
            "kickoffStarter",
            "player1",
            "player2",
          ],
          properties: {
            homeBoardLocation: { enum: ["left", "right"] },
            kickoffStarter: { enum: ["min", "max"] },
            player1: {
              type: "object",
              properties: {
                name: { type: "string" },
                color: { type: "string" },
              },
            },
            player2: {
              type: "object",
              properties: {
                name: { type: "string" },
                color: { type: "string" },
              },
            },
          },
        },
      },
    },
    (req, rep) => {
      const { kickoffStarter, homeBoardLocation, player1, player2 } = req.body;

      const player1Item = initialPlayer({
        color: player1.color,
        name: player1.name,
      });
      const player2Item = initialPlayer({
        color: player2.color,
        name: player2.name,
      });

      const board = initialBoard({
        players: [player2Item, player1Item],
        homeBoardLocation,
        kickoffStarter,
      });
      rep.send(board);
    },
  );
}
