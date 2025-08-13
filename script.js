const content = document.getElementById('content');
const au = document.getElementById('au');
let time = 100;
const nd = ['Lớp có gái cứt được.', 'Cứ mơ mộng tiếp đi.', 'Có cái coin card!🤣'.];

let currentSentenceIndex = 0;
let currentCharacterIndex = 0;
let currentContent = '';
let isDeleting = false;
let playau = false;

function typeWriter() {
  const sentence = nd[currentSentenceIndex];

  if (isDeleting) {
    if (currentContent.length > 0) {
      currentContent = currentContent.slice(0, -1);
      if (content) {
        content.textContent = currentContent;
      }
      setTimeout(typeWriter, time / 2);
    } else {
      isDeleting = false;
      currentSentenceIndex++;
      currentCharacterIndex = 0;
      if (currentSentenceIndex < nd.length) {
        setTimeout(typeWriter, time + 500);
      } else {
        if (content) {
            content.textContent = sentence;
        }
        console.log("Đã hoàn thành tất cả các câu.");
      }
    }
  } else {
    if (currentCharacterIndex < sentence.length) {
      currentContent += sentence[currentCharacterIndex];
      if (content) {
        content.textContent = currentContent;
      }
      currentCharacterIndex++;
      setTimeout(typeWriter, time);
    } else {
      if (currentSentenceIndex < nd.length - 1) {
        isDeleting = true;
        setTimeout(typeWriter, time * 3);
      } else {
        console.log("Đã hoàn thành câu cuối cùng.");
        if (content) {
            content.textContent = sentence;
        }
      }
    }
  }
}

function handleSpeed(number) {
  time = Math.max(50, number + time);
}

typeWriter();

function changeAudio() {
  const autag = document.getElementById('toggle');
  const imageBtn = ['./assets/play.png', './assets/pause.png'];
  if(playau) {
    au.pause();
    autag.src = imageBtn[0];
    playau = false;
  } else {
    au.play();
    autag.src = imageBtn[1];
    playau = true;
  }
}
