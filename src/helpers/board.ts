import { Board, Player } from "../typings/basic-types";
import { initialCheckers } from "./checker";

type InitialBoard = {
  numberOfPoints: number;
  numberOfCheckersPerPlayer: number;
  players: [Player, Player];
};

export function initialBoard({
  numberOfCheckersPerPlayer,
  players,
  numberOfPoints,
}: InitialBoard): Board {
  const board: Board = {
    startPoint: [],
    bar: [],
    points: [],
  };
  for (let i = 1; i <= numberOfPoints; i++) {
    board.points.push({ type: "point", id: i, checkers: [] });
  }

  initialCheckers({
    board,
    numberOfCheckersPerPlayer,
    players,
  });

  return board;
}
