/*jslint node: true */
'use strict';

module.exports = {

  goto : function(floor, button){

    return 'poop';
  }

  floorCheck :function(floor, button){

    if(floor >= 0 && floor <=3){
      goto(floor,button)
    }else{
      floor = 0;
      goto(floor,button)
    }

  }

  buttonPush : function(floor, button){

    if(button >= 0 && button <=3){
      goto(floor,button)
    }else{
      button = floor;
      goto(floor,button)
    }

  }

  mover : function(floor, button){
    if(button > floor){
      goto(floor,button);
    }else if(floor > button){
      button = button * -1;
      goto(floor, button)
    }else{
      goto(floor,button);
    }
  }







};
