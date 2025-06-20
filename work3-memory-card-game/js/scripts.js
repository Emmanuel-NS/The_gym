cards = document.getElementsByClassName('card');
start_btn = document.getElementById('start-game');
imagelist = [
  {'image':'images/king.PNG','count':0},
  {'image':'images/queen.PNG','count':0},
  {'image':'images/jack.PNG','count':0},
  {'image':'images/a.PNG','count':0},
  {'image':'images/3.PNG','count':0},
  {'image':'images/tortie.PNG','count':0},
  {'image':'images/7.PNG','count':0},
  {'image':'images/joker.PNG','count':0}
];

let lastFlipped = null;
let lastImage = null;
let lock = false;
let moves = 0;
let score = 0;

const movesValue = document.getElementById('moves-value');
const scoreValue = document.getElementById('score-value');

function updateMoves() {
  moves++;
  movesValue.textContent = moves;
}

function updateScore() {
  score++;
  scoreValue.textContent = score;
}

function pickRandomImage() {
  let available = imagelist.filter(img => img.count < 2);
  if (available.length === 0) return null;
  let n = Math.floor(Math.random() * available.length);
  let card = available[n];
  card.count++;
  return card;
}

function flipCard(card) {
  if (lock || card.classList.contains('done') || card === lastFlipped) return;

  let picked = pickRandomImage();
  if (!picked) return;
  let image = picked.image;
  card.style.backgroundImage = `url('${image}')`;
  card.classList.add('done');
  card.dataset.image = image; 

  if (lastFlipped) {
    lock = true;
    updateMoves();
    // Compare images
    if (lastImage === image) {
      // Match: keep both flipped
      updateScore();
      lastFlipped = null;
      lastImage = null;
      lock = false;
    } else {
      // Not match: flip both back after delay
      setTimeout(() => {
        picked.count--;
        let prevImgObj = imagelist.find(img => img.image === lastImage);
        if (prevImgObj) prevImgObj.count--;
        card.classList.remove('done');
        card.style.backgroundImage = "url('images/back.PNG')";
        lastFlipped.classList.remove('done');
        lastFlipped.style.backgroundImage = "url('images/back.PNG')";
        lastFlipped = null;
        lastImage = null;
        lock = false;
      }, 1000);
    }
  } else {
    lastFlipped = card;
    lastImage = image;
  }
}

Array.from(cards).forEach(card => {
  card.addEventListener('click', () => {
    flipCard(card);
  });
});

// Reload the page when start button is clicked
start_btn.addEventListener('click', function() {
  window.location.reload();
});
