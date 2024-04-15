function fadeIn(element) {
  element.classList.add('fade-in'); // Добавляем класс 'fade-in' к элементу
  setTimeout(function() {
      element.classList.remove('fade-in'); // Через 1 секунду удаляем класс 'fade-in' из элемента
  }, 1000);
}

var check = true  ; 
function fuf(element) {
  var textvalue = document.getElementById("textvalue").value ; 
  var textfirst = document.getElementById("first") ; 
  var fel = textfirst.textContent ;    
  if (check) {
   textfirst.textContent = fel + " " + textvalue ;
   check = false ; 
   textfirst.style.color = "red" ;
   
  } else {alert("Вы уже использовали функцию") ; console.log("this function was used..." + "("+textvalue+")" )}
 

} 
   
 
      
function getvalue(el) {
    
}
