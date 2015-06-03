/*jslint node: true */
'use strict';

module.exports = {

  goto : function(floor, button){
    //Check the floor       //check the button
    if(floor >= 0 && floor <=3 && button >= 0 && button <=3){

      if(button > floor){
        console.log('Welcome to floor ' + button);
        return button;

      }else if(floor > button){
        button = button * -1;
        console.log('Welcome to floor ' + (button * -1));
        return (button * -1);

      }else{
        console.log('You are still on floor ' + button);
        return button;
      }

    }
    //either floor input or button input is not 0,1,2,3
    else{
      console.log('Floor not recognized. You have not gone anywhere!');
      return 0;
    }

  }
}
