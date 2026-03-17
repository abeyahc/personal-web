const audio = new Audio();
audio.loop = true;
audio.volume = 0.4;

export const musicPlayer = {
  start(src) {
    if (audio.src !== src) {
      audio.src = src;
    }
    audio.play().catch(() => {});
  },
  stop() {
    audio.pause();
    audio.currentTime = 0;
  },
  isPlaying() {
    return !audio.paused;
  },
};