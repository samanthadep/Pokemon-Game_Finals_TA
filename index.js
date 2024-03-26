let blastoiseHP = 100;
let charizardHP = 100;

function blastoiseAttack(attackType) {
  let damage = 0;
  switch (attackType) {
    case 'Water Cannon':
      damage = 10; 
      break;
    case 'Water Pulse':
      damage = 8; 
      break;
    case 'Surf':
      damage = 12; 
      break;
    case 'Tackle':
      damage = 6; 
      break;
    default:
      break;
  }

  charizardHP -= damage;
  if (charizardHP < 0) {
    charizardHP = 0; 
  }
  document.getElementById('message').innerHTML = `Blastoise used ${attackType} and dealt ${damage} damage to Charizard!`;
  document.getElementById('myHP').innerHTML = blastoiseHP;
  document.getElementById('apHP').innerHTML = charizardHP;

  if (charizardHP <= 0) {
    document.getElementById('message').innerHTML = "Charizard fainted. Blastoise wins!";
    disableAttackButtons();
  } else {
    setTimeout(charizardAttack, 1000); 
  }
}

document.getElementById('startButton').addEventListener('click', function() {
  window.location.href = 'main.html';
});

function showPokemonSelection() {
  document.getElementById('pokemonSelection').style.display = 'block';
}

function charizardAttack() {
  let damage = 10; 
  if (blastoiseHP - damage < 0) {
    blastoiseHP = 0; 
  } else {
    blastoiseHP -= damage;
  }
  document.getElementById('message').innerHTML = `Charizard used Flamethrower and dealt ${damage} damage to Blastoise!`;
  document.getElementById('myHP').innerHTML = blastoiseHP;
  document.getElementById('apHP').innerHTML = charizardHP;

  if (blastoiseHP <= 0) {
    document.getElementById('message').innerHTML = "Blastoise fainted. Charizard wins!";
    disableAttackButtons();
    alert('Game Over');
  }
  
  if (charizardHP <= 0) {
    document.getElementById('message').innerHTML = "Charizard fainted. Blastoise wins!";
    disableAttackButtons();
    alert('Game Over');
  }
}

function disableAttackButtons() {
  const attackButtons = document.querySelectorAll('.actions button');
  attackButtons.forEach(button => {
    button.disabled = true;
  });
}