import { Board, HomeBoardLocation, Player } from "../typings/basic-types";

type InitialCheckers = {
  board: Board;
  numberOfCheckersPerPlayer: number;
  players: [Player, Player];
  homeBoardLocation: HomeBoardLocation;
};

export function initialCheckers({
  board,
  players,
  numberOfCheckersPerPlayer,
  homeBoardLocation,
}: InitialCheckers): Board {
  players.forEach((player) => {
    // TODO: put checkers in initial locations
  });

  return board;
}
