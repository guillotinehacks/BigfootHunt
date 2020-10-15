function loadBigFoot() {
  document.getElementById('bigFoot').src = 'bigfoot.png'
}

function moveBigFoot() {
  alert('Well done, you found Bigfoot!')
  var picture = document.getElementById('bigFoot')

  var x = Math.random() * 600
  var y = Math.random() * 400

  picture.style.top = x + 'px'
  picture.style.left = y + 'px'
}
