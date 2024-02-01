const playPauseBtn = document.getElementById("play-pause");
const audioTrack = document.getElementById("audio-track");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const trackName = document.getElementById("track");

const totalTracks = 5;
let isPlaying = 0;
let actualTrack = 1;

function playTrack() {
  audioTrack.play();
  playPauseBtn.classList.remove("bi-play-circle-fill");
  playPauseBtn.classList.add("bi-pause-circle-fill");
}

function pauseTrack() {
  audioTrack.pause();
  playPauseBtn.classList.remove("bi-pause-circle-fill");
  playPauseBtn.classList.add("bi-play-circle-fill");
}

function playOrPause() {
  if (isPlaying === 0) {
    playTrack();
    isPlaying = 1;
  } else {
    pauseTrack();
    isPlaying = 0;
  }
}

function changeTrackName() {
  trackName.innerText = "Faixa " + actualTrack;
}

function nextTrack() {
  if (actualTrack === totalTracks) {
    actualTrack = 1;
  } else {
    actualTrack = actualTrack + 1;
  }

  audioTrack.src = "./tracks/track" + actualTrack + ".mp3";
  playTrack();
  isPlaying = 1;
  changeTrackName();
}

function backTrack() {
  if (actualTrack === 1) {
    actualTrack = totalTracks;
  } else {
    actualTrack = actualTrack - 1;
  }

  audioTrack.src = "./tracks/track" + actualTrack + ".mp3";
  playTrack();
  isPlaying = 1;
  changeTrackName();
}

playPauseBtn.addEventListener("click", playOrPause);
forwardBtn.addEventListener("click", nextTrack);
backwardBtn.addEventListener("click", backTrack);
