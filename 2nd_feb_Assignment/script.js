var min = 04;
var sec = 59;
var start = document.querySelector("#start");
var reset = document.querySelector("#reset");
var min_b = document.querySelector("#mint");
var sec_b = document.querySelector("#sec");

var timmer = false;
function show() {
  min_b.innerText = min + " min: ";
  sec_b.innerText = sec + "sec";
}

start.addEventListener("click", () => {
  if (timmer == false) {
      timmer = true;
  const interval =    setInterval(() => {
      show();
      sec = sec - 1;
      if (sec < 0) {
          if(min ==0){
              clearInterval(interval);
          }
        min = min - 1;
        sec = 59;
      }
    
    }, 1000);
  }
});
reset.addEventListener("click", () => {
    timmer = false;
  min = 04;
  sec = 59;
  show();
});