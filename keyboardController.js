function keyDown(keys, repeat) {
  let timers = {};

  document.onkeydown = function(event) {
    let key = (event || window.event).keyCode;

    if (!(key in keys)) return true;

    if (!(key in timers)) {
      timers[key]= null;
      keys[key]();
      if (repeat!==0) timers[key]= setInterval(keys[key], repeat);
    }

    return false;
  };

  document.onkeyup = function(event) {
    let key = (event || window.event).keyCode;
    
    if (key in timers) {
      if(timers[key]!==null) clearInterval(timers[key]);
      delete timers[key];
    }
  };

  window.onblur= function() {
    for(key in timers) {
      if(timers[key]!==null) clearInterval(timers[key]);
    }
    
    timers= {};
  };
};