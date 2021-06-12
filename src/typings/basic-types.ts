export type Checker = {
  id: number;
  type: "checker";
  owner: Player;
};

export type Player = {
  /** auto generated uuid */
  id: string;
  name: string;
  type: "player";
  color: string;
  score: number;
};

export type Board = {
  bar: Checker[];
  points: Array<{
    type: string;
    id: number;
    checkers: Checker[];
  }>;
};

export type HomeBoardLocation = "left" | "right";
