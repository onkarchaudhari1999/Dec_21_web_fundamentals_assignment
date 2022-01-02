 var num = parseInt(prompt("Enter number: "));
var cnt = 0;
for(var i= 0; i<num;i++){
    if(num%i == 0 && num/i == i){
        cnt++;
        break;
    }
}
if(cnt==1){
    alert("It's a perfect square");
}
else{
    alert("not perfect square");
} 