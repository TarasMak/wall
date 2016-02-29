//noprotect

[].forEach.call(document.getElementsByClassName("brick"), function(el){
  el.addEventListener('click', dissaper, false);
   
})

function dissaper (){
 
  this.style.background= "#808991";
  this.style.color="#FFF";
  this.style.width= "0";
  this.style.height= "0";
  this.style.border="none";
  this.style.transition="2s linear";
 //pausecomp(2000);
 // this.style.opacity="0";

}

function pausecomp(millis)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}