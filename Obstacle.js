function Obstacle(x, y, w, h, sprite = null, spriteW) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.show = () => {
    if(sprite.src) {

      let calcX = 0;

      for(cont = 0;calcX < w; cont++) {
        cx.drawImage(sprite, calcX, y);
        calcX = cont * spriteW;
      }
    }
 }
}