export default interface MetronomeConfig {
  beatCount: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  tempo: number;
  noteValue: Note;
  synthetic?: boolean;
}

export enum Note {
  CROTCHET,
  QUAVER,
  QUAVER_TRIPLET,
}
