export type RecordsResponse = {
  content: RecordItem[];
  config: {
    totalPages: number;
  };
};

export type RecordItem = {
  age: number;
  gamePlatform: Platform;
  gameTitle: string;
  genreName: string;
  id: number;
  moment: string;
  name: string;
};

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';
