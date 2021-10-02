function loadBigFoot() {
  document.getElementById('bigFoot').src = 'bigfoot.png'
}

function moveBigFoot() {
  alert('Huzzah, you found Bigfoot!')
  var picture = document.getElementById('bigFoot')

  var x = Math.random() * 750
  var y = Math.random() * 550

  picture.style.top = x + 'px'
  picture.style.left = y + 'px'
}
