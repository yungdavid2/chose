function getrandomnum(min , max ){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand = getrandomnum(1 , 10) ;  // любое число 
console.log(rand) ;
function mainfun() {

  var displaytext = document.getElementById("display") ; // вывод ответа 
  var personnumber = document.getElementById("personnumber").value ; // число пользователя 
  
  if(isNaN(personnumber)){
    displaytext.textContent = personnumber + " is not a number " ; 
  }
  else{
    
    if(personnumber === rand.toString()) {
        displaytext.textContent = "Successfully! It was a " + rand ;
    
      }
      else {
        randtext = getrandomnum(1 , 7) ;
        console.log(randtext)
        if(randtext === 1 ) {displaytext.textContent = "Wrong! Try again!"} ;
        if(randtext === 2 ) {displaytext.textContent = "Nah , You have change"} ;
        if(randtext === 3 ) {displaytext.textContent = "So close bro!"} ;
        if(randtext === 4 ) {displaytext.textContent = "ALMOST"} ;
        if(randtext === 5 ) {displaytext.textContent = "U are so near)"} ;
        if(randtext === 6 ) {displaytext.textContent = "Try again!"} ;
        if(randtext === 7 ) {displaytext.textContent = "is it hard for u?"} ;

      }
  } if (personnumber === "") {
    displaytext.textContent = "String is emply!"; }
 
}
