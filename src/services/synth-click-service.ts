let audioContext: AudioContext;
let envelope: GainNode;

const createAudioContext = () => {
  if (typeof window !== "undefined") {
    const AudioContext = window.AudioContext;
    audioContext = new AudioContext();

    envelope = audioContext.createGain();
    envelope.connect(audioContext.destination);
  }
};

export class SynthClickService {
  play(level: 1 | 2 | 3) {
    if (!audioContext || !envelope) {
      createAudioContext();
    }

    if (audioContext && envelope) {
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
}

const synthClickService = new SynthClickService();
export default synthClickService;
