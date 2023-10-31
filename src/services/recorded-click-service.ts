const audios =
  typeof window !== "undefined"
    ? [new Audio("click1.mp3"), new Audio("click2.mp3"), new Audio("click3.mp3")]
    : [];

export class RecordedClickService {
  play(level: 1 | 2 | 3) {
    const audio = audios[level - 1];

    audio.play();
    audio.currentTime = 0;
  }
}

const recordedClickService = new RecordedClickService();
export default recordedClickService;
