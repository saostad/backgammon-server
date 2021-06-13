import { randomUUID } from "crypto";
import {
  Board,
  Checker,
  HomeBoardLocation,
  Player,
} from "../typings/basic-types";

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
  players.forEach((player, playerIndex) => {
    for (
      let checkerIndex = 1;
      checkerIndex <= numberOfCheckersPerPlayer;
      checkerIndex++
    ) {
      const checker: Checker = {
        id: randomUUID(),
        type: "checker",
        owner: player,
      };

      if (homeBoardLocation === "right") {
        if (playerIndex === 0) {
          switch (checkerIndex) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              board.points
                .find((el) => el.positionId === 6)
                ?.checkers.push(checker);
              break;
            case 6:
            case 7:
            case 8:
              board.points
                .find((el) => el.positionId === 8)
                ?.checkers.push(checker);
              break;
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
              board.points
                .find((el) => el.positionId === 13)
                ?.checkers.push(checker);
              break;
            case 14:
            case 15:
              board.points
                .find((el) => el.positionId === 24)
                ?.checkers.push(checker);
              break;

            default:
              break;
          }
        } else {
          switch (checkerIndex) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              board.points
                .find((el) => el.positionId === 19)
                ?.checkers.push(checker);
              break;
            case 6:
            case 7:
            case 8:
              board.points
                .find((el) => el.positionId === 17)
                ?.checkers.push(checker);
              break;
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
              board.points
                .find((el) => el.positionId === 12)
                ?.checkers.push(checker);
              break;
            case 14:
            case 15:
              board.points
                .find((el) => el.positionId === 1)
                ?.checkers.push(checker);
              break;

            default:
              break;
          }
        }
      } else {
        // TODO player homes are in left sides
      }
    }
  });

  return board;
}
