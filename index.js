let whatIsFeet;
function scuberGreetingForFeet(feet){  
  if (feet <= 400) {
    whatIsFeet ='This one is on me!';
    } else if ((feet >= 400) && (feet <= 2000)) {
      whatIsFeet ='That will be twenty bucks.';
    } else if (feet > 2500) {
      whatIsFeet = 'No can do.';
    } else if (feet > 2000) {// can use ternaryexpression
      whatIsFeet = 'I will gladly take your thirty bucks.';
    } 
    return whatIsFeet;
  }// can use return statement to print output 

function ternaryCheckCity(city){
  //close to using a for loop 
   return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; {// try to get what you want done in one line of code
  }
}




//using switch and case statements
function switchOnCharmFromTip(tip){ // neeed help 
  switch (tip) {//this is problem i called the function instead of the calling the parameter i called the fucntion
    case tip = 'generous':
      return('Thank you so much.'); //used return instead of console.log
      break;
    case tip = 'not as generous':
      return("Thank you.");
      break;
    case tip = 'thanks for everything':
      return("Bye.");
      break;
    default:
      return('Goodbye');
  }
}