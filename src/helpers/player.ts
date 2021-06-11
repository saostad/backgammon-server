import { Player } from "../typings/basic-types";
import { randomUUID } from "crypto";

type InitialPlayer = {
  name: string;
  color: string;
};

export function initialPlayer({ name, color }: InitialPlayer): Player {
  const player: Player = {
    name,
    color,
    type: "player",
    score: 0,
    id: randomUUID(),
  };

  return player;
}
