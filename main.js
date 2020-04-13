const canvas = document.getElementById('canvas')
const cw = canvas.width;
const ch = canvas.height;
const fps = 40;
const cx = canvas.getContext('2d');

keyDown({
  37: () => { player.move('left') },
  38: function() { },
  39: () => { player.move('right') },
  40: function() { }
}, 100);

function main() { 
  player = new Player;

  loop();
}

function drawWorld() {
  const groundSprite = new Image();
  groundSprite.src = 'sprites/ground.png';
  groundSprite.x = 100;

  ground = new Obstacle(0, 290, 400, 10, groundSprite, 100);
  ground.show();
}

function draw() {
  cx.clearRect(0,0,cw,cw);
  
  drawWorld();

  player.update();
  player.show();
}

function loop() {
  requestAnimationFrame(loop)
  draw();
}

main();