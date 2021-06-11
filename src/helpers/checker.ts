import { Board, Player } from "../typings/basic-types";

type InitialCheckers = {
  board: Board;
  numberOfCheckersPerPlayer: number;
  players: [Player, Player];
};

export function initialCheckers({
  board,
  players,
  numberOfCheckersPerPlayer,
}: InitialCheckers): Board {
  players.forEach((player) => {
    for (let i = 1; i <= numberOfCheckersPerPlayer; i++) {
      board.startPoint.push({ id: i, type: "checker", owner: player });
    }
  });

  return board;
}
