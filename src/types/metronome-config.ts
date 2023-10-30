export default interface MetronomeConfig {
  beatCount: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  isPlaying: boolean;
  tempo: number;
  noteValue: 1 | 2 | 3;
}
