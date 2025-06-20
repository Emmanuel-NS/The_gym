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

let firstFlipped = null;
let firstImage = null;
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
  new Audio('sounds/success.mp3').play();
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
  if (lock || card.classList.contains('done') || card === firstFlipped) return;

  let picked = pickRandomImage();
  if (!picked) return;
  let image = picked.image;
  card.style.backgroundImage = `url('${image}')`;
  card.classList.add('done');
  card.dataset.image = image; 

  if (firstFlipped) {
    lock = true;
    updateMoves();
    if (firstImage === image) {
      updateScore();
      firstFlipped = null;
      firstImage = null;
      lock = false;
    } else {
      setTimeout(() => {
        picked.count--;
        let prevImgObj = imagelist.find(img => img.image === firstImage);
        if (prevImgObj) prevImgObj.count--;
        card.classList.remove('done');
        card.style.backgroundImage = "url('images/back.PNG')";
        firstFlipped.classList.remove('done');
        firstFlipped.style.backgroundImage = "url('images/back.PNG')";
        firstFlipped = null;
        firstImage = null;
        lock = false;
        new Audio('sounds/wrong.mp3').play();
      }, 1000);
    }
  } else {
    new Audio('sounds/flip.mp3').play();
    firstFlipped = card;
    firstImage = image;
  }
}

Array.from(cards).forEach(card => {
  card.addEventListener('click', () => {
    flipCard(card);
    if (score === 8) {
      setTimeout(() => {
        alert('Congratulations! You won the game!');
        new Audio('sounds/winning.mp3').play(); 
      }, 500);
    }
  });
});

start_btn.addEventListener('click', function() {
  new Audio('sounds/start.mp3').play()
  setTimeout(()=> {
    window.location.reload();
  }, 2000);
  
});
