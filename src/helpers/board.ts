import { randomUUID } from "crypto";
import { Board, HomeBoardLocation, Player } from "../typings/basic-types";
import { initialCheckers } from "./checker";

type InitialBoard = {
  numberOfPoints: number;
  numberOfCheckersPerPlayer: number;
  players: [Player, Player];
  homeBoardLocation: HomeBoardLocation;
};

export function initialBoard({
  numberOfCheckersPerPlayer,
  players,
  numberOfPoints,
  homeBoardLocation,
}: InitialBoard): Board {
  const board: Board = {
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
