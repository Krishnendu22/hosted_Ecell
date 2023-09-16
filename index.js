
 var numberOfDrumButtons = document.querySelectorAll(".btn").length;

 for (var i = 0; i < numberOfDrumButtons; i++) {
 
   document.querySelectorAll(".btn")[i].addEventListener("click", function() {
 
     var buttonInnerHTML = this.innerHTML;
 
    
 
     buttonAnimation(buttonInnerHTML);
 
   });
   function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 900);
  
  }
 
 }
