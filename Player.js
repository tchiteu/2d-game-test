function Player(sprite) {
  this.x = 300;
  this.y = 200;
  this.w = 20;
  this.h = 40;

  this.xSpeed = 0;
  this.ySpeed = 4;
  this.maxSpeed = 5;

  this.move = (move) => {
    switch(move) {
      case 'right':
        if(this.xSpeed < this.maxSpeed) {
          this.xSpeed += 3;
        }
      break;

      case 'left':
        if(this.xSpeed > -this.maxSpeed) {
          this.xSpeed -= 3;
        }
      break;
    }
  }


  this.collision = (items) => {
    this.x = Math.max(0, Math.min(cw - this.w, this.x));
    this.y = Math.max(0, Math.min(ch - this.h, this.y));

    items.map((item) => {
      let distX = (this.x + this.w/2) - (item.x + item.w/2);
      let distY = (this.y + this.h/2) - (item.y + item.h/2);

      let sumW = (this.w + item.w)/2;
      let sumH = (this.h + item.h)/2;

      if(Math.abs(distX) < sumW && Math.abs(distY) < sumH) {
        let overlapX = sumW - Math.abs(distX);
        let overlapY = sumH - Math.abs(distY); 

        if(overlapX > overlapY) {
          this.y = (distY > 0) ? this.y + overlapY : this.y - overlapY; 
        } else {
          this.x = (distX > 0) ? this.x + overlapX : this.x - overlapX; 
        }
      }
      
    })

  }

  this.update = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    this.collision([ground])

    if(this.xSpeed != 0) {
      this.xSpeed /= 1.2;
    }
  }

  this.show = function() {
    if(sprite.src) {
      cx.drawImage(sprite, this.x, this.y);
    }
  }
}