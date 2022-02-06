let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let output = document.getElementById('output');

let id,id2;

let fun = (counter) =>{
button1.addEventListener('click',()=>{
    
  id =  setInterval(()=>{
        if(counter >= 0){
        counter +=1;
        output.innerText =counter;}
    },1000) }
);
button2.addEventListener('click',()=>{
    
   id2 = setInterval(()=>{
       if(counter > 0){
        clearInterval(id)
        counter -=1;
        console.log("clicked")
        output.innerText = counter;
    }
    },1000) 
})}
fun(0)

