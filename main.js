const canvas = document.getElementById('canvas')
const cw = canvas.width;
const ch = canvas.height;
const fps = 40;

keyDown({
  37: () => { player.move('left') },
  38: function() { },
  39: () => { player.move('right') },
  40: function() { }
}, 100);

function main() {
  ground = new Obstacle(300, 500, 200, 10);
  player = new Player;

  loop();
}

function draw() {
  cx = canvas.getContext('2d');
  cx.clearRect(0,0,cw,cw);

  ground.show();

  player.update();
  player.show();
}

function loop() {
  requestAnimationFrame(loop)
  draw();
}

main();