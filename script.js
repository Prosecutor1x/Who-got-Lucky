'use strict';
alert(
  'GAMBLING IS SUBJECT TO RISK OF ADDICTION USER DISCRETION IS RECOMMENDED💰  😞 '
);

const rbtn = document.querySelector('.btn--roll');
const nbtn = document.querySelector('.btn--new');
const hbtn = document.querySelector('.btn--hold');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const diceH = document.querySelector('.dice');
const cScore1 = document.querySelector('#current--0');
const cScore2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let scores, curScore, activePlayer, playing;
//strt

const initia = function () {
  scores = [0, 0];
  curScore = 0;
  activePlayer = 0;
  playing = true;

  diceH.classList.add('hidden');
  score1.textContent = 0;
  score2.textContent = 0;
  cScore1.textContent = 0;
  cScore2.textContent = 0;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

initia();

//roll dice
const swtcP = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  curScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
const rDice = function () {
  if (playing) {
    const diceVal = Math.trunc(Math.random() * 6) + 1;
    diceH.classList.remove('hidden');
    diceH.src = `dice-${diceVal}.png`;
    if (diceVal !== 1) {
      curScore = curScore + diceVal;
      document.getElementById(`current--${activePlayer}`).textContent =
        curScore;
    } else {
      swtcP();
    }
  }
};

//hold score
const hDice = function () {
  if (playing) {
    scores[activePlayer] += curScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceH.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      // document.querySelector('.name').textContent = `Player WINS 🎊 `;
    } else {
      swtcP();
    }
  }
};

rbtn.addEventListener('click', rDice);
hbtn.addEventListener('click', hDice);
nbtn.addEventListener('click', initia);
