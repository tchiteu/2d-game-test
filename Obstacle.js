function Obstacle(x, y, w, h, sprite = null, spriteW) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.show = () => {
    if(sprite.src) {

      let cont = 0;
      let calcX = 0;

      while(calcX < w) {
        calcX = cont * spriteW;
        cx.drawImage(sprite, calcX, y);
        cont++;
      };

    }
  }
}