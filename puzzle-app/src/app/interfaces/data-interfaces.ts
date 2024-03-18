interface LevelData {
  author: string;
  cutSrc: string;
  id: string;
  imageSrc: string;
  name: string;
  year: string;
}

interface Word {
  audioExample: string;
  id: number;
  textExample: string;
  textExampleTranslate: string;
  word: string;
  wordTranslate: string;
}

interface Round {
  levelDetail: LevelData[];
  words: Word[];
}

export default interface RoundData {
  rounds: Array<Round>;
  roundsCount: number;
}
