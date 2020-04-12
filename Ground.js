function Ground() {
  this.x = 300;
  this.y = 500;
  this.w = 200;
  this.h = 10;

  this.show = () => {
    cx.fillStyle = '#fff'; 
    cx.fillRect(this.x, this.y, this.w, this.h); 
  }
}