function Obstacle(x, y, w, h, sprite = null) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.show = () => {
    cx.fillStyle = '#fff'; 
    cx.fillRect(this.x, this.y, this.w, this.h); 
  }
}