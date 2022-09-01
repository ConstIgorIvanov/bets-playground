export type Match = {
  id: string;
  game: string;
  live: boolean;
  team1?: Team;
  team2?: Team;
  date?: string;
  event?: Event;
  score?: string;
  link?: string;
};

export type Event = {
  name: string;
  tournamentLink: string;
};

export type Team = {
  name: string;
  odds: string;
};
