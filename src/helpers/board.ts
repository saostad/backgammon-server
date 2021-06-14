import { randomUUID } from "crypto";
import {
  Board,
  HomeBoardLocation,
  KickoffStarter,
  Player,
} from "../typings/basic-types";
import { initialCheckers } from "./checker";

type InitialBoard = {
  players: [Player, Player];
  homeBoardLocation: HomeBoardLocation;
  kickoffStarter: KickoffStarter;
};

/**
 * @rules
 * - https://www.bkgm.com/rules.html
 * - https://en.wikipedia.org/wiki/Backgammon
 */

export function initialBoard({
  players,
  homeBoardLocation,
  kickoffStarter,
}: InitialBoard): Board {
  /**  played on a board consisting of twenty-four narrow triangles called points */
  const numberOfPoints = 24;

  const numberOfCheckersPerPlayer = 15;

  const board: Board = {
    homeBoardLocation,
    kickoffStarter,
    bar: [],
    points: [],
    bearOff: [],
  };
  for (let i = 1; i <= numberOfPoints; i++) {
    board.points.push({
      type: "point",
      /** between 1-24 */
      positionId: i,
      id: randomUUID(),
      checkers: [],
    });
  }

  initialCheckers({
    board,
    numberOfCheckersPerPlayer,
    players,
    homeBoardLocation,
  });

  return board;
}
