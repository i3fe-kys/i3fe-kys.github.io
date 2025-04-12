document.addEventListener("DOMContentLoaded", function () {
  const splash = document.getElementById("splash");
  const mainPage = document.getElementById("main-page");
  const typingEffect = document.getElementById("typing-effect");
  const audioPlayer = document.getElementById("audio-player");

  const playlist = [
    "audio/song1.mp3",
    "audio/song2.mp3",
    "audio/song3.mp3",
    "audio/song4.mp3"
  ];

  const text = "i3fe's socials!";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingEffect.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 150);
    }
  }

  typeEffect();

  function shufflePlaylist() {
    for (let i = playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
    }
  }

  function handleTransition() {
    splash.style.opacity = 0;
    setTimeout(function () {
      splash.style.display = "none";
      mainPage.style.display = "flex";
      mainPage.style.opacity = 0;

      setTimeout(function () {
        mainPage.style.transition = "opacity 1s";
        mainPage.style.opacity = 1;
      }, 20);

      shufflePlaylist();
      audioPlayer.src = playlist[0];
      audioPlayer.play();
    }, 1000);
  }

  splash.addEventListener("click", handleTransition);
});
