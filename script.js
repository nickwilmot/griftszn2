  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  //const moles = document.querySelectorAll('.mole');
  const moles = document.querySelectorAll('.mole');
  const moles2 = document.querySelectorAll('.mole2');  
  const moles3 = document.querySelectorAll('.mole3');  
  const moles4 = document.querySelectorAll('.mole4');  
  const moles5 = document.querySelectorAll('.mole5');  
  const moles6 = document.querySelectorAll('.mole6');  
  let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 20000)
  }

  function whack(e) {
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click', whack));
  moles2.forEach(mole2 => mole2.addEventListener('click', whack));
  moles3.forEach(mole3 => mole3.addEventListener('click', whack));
  moles4.forEach(mole4 => mole4.addEventListener('click', whack));
  moles5.forEach(mole5 => mole5.addEventListener('click', whack));
  moles6.forEach(mole6 => mole6.addEventListener('click', whack));
 