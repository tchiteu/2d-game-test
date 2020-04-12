function Player() {
  this.x = 380;
  this.y = 50;
  this.w = 40;
  this.h = 80;

  this.xSpeed = 0;
  this.ySpeed = 4;
  this.maxSpeed = 10;

  this.move = (move) => {
    switch(move) {
      case 'right':
        if(this.xSpeed < this.maxSpeed) {
          this.xSpeed += 5;
        }
      break;

      case 'left':
        if(this.xSpeed > -this.maxSpeed) {
          this.xSpeed -= 5;
        }
      break;
    }
  }

  this.collision = (items) => {
    let collision = false;

    this.x = Math.max(0, Math.min(cw - this.w, this.x));
    this.y = Math.max(0, Math.min(ch - this.h, this.y));


    items.map((item) => {
      if (this.x < item.x + item.w &&
        this.x + this.w > item.x &&
        this.y < item.y + item.h &&
        this.y + this.h > item.y) {
         collision = true;
      }
    })

    return collision;
  }

  this.update = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    this.collision([ground])

    if(this.xSpeed != 0) {
      this.xSpeed /= 1.1;
    }
  }

  this.show = function() {
    cx.fillStyle = '#fff';
    cx.fillRect(this.x, this.y, this.w, this.h);
  }
}