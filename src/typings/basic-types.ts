export type Checker = {
  /** auto generated uuid */
  id: string;
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
  id: string;
  homeBoardLocation: HomeBoardLocation;
  kickoffStarter: KickoffStarter;
  bar: Checker[];
  bearOff: Checker[];
  points: Array<{
    type: string;
    /** auto generated uuid */
    id: string;
    positionId: number;
    checkers: Checker[];
  }>;
};

export type HomeBoardLocation = "left" | "right";
export type KickoffStarter = "lower" | "higher";
