/*jslint node: true */
'use strict';

module.exports = {

  goto : function(floor, button){

    if(typeof(floor) === 'number' && typeof(button) === 'string'){

      button = Number(button);
      //Check the floor       //check the button
      if(floor >= 0 && floor <= 3 && button >= 0 && button <= 3){

        if(button > floor){
          return button;

        }else if(floor > button){
          floor = (button - floor);
          return (floor);

        }else{
          return button;
        }
      }else{
        return 0;
      }
    }
    //either floor input or button input is not 0,1,2,3
    else{
      return 0;
    }



  }
}
