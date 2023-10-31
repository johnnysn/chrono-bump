const audios = [new Audio("click1.mp3"), new Audio("click2.mp3"), new Audio("click3.mp3")];

const AudioContext = window.AudioContext;
const audioContext = new AudioContext();

const envelope = audioContext.createGain();
envelope.connect(audioContext.destination);

export class ClickService {
  playRecorded(level: 1 | 2 | 3) {
    const audio = audios[level - 1];

    audio.play();
    audio.currentTime = 0;
  }

  playSynthetic(level: 1 | 2 | 3) {
    envelope.gain.cancelScheduledValues(0);
    const oscillator = audioContext.createOscillator();
    oscillator.type = "square";
    oscillator.frequency.value = level > 2 ? 1000 : level > 1 ? 800 : 600;
    oscillator.connect(envelope);

    envelope.gain.value = 0;
    const time = audioContext.currentTime;
    envelope.gain.linearRampToValueAtTime(1, time + 0.01);
    envelope.gain.setValueAtTime(1, time + 0.04);
    envelope.gain.linearRampToValueAtTime(0, time + 0.07);

    oscillator.start();
    oscillator.stop(time + 0.1);
  }
}

const clickService = new ClickService();
export default clickService;
