

var count = 0;
document.getElementById("counter").innerText = count;

function like() {
   count = count + 1;
   document.getElementById("counter").innerText = count;
}
function dislike() {
   count = count - 1;
   document.getElementById("counter").innerText = count;
}