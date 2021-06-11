import { Player } from "../typings/basic-types";

type Roll = {
  numberOfDice: 1 | 2;
  player: Player;
};
/** @return random integer number between 1-6 */
export function roll({ numberOfDice, player }: Roll): {
  player: Player;
  roll: number | [number, number];
} {
  function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  if (numberOfDice === 1) {
    return { player, roll: randomNumber() };
  } else {
    return { player, roll: [randomNumber(), randomNumber()] };
  }
}
