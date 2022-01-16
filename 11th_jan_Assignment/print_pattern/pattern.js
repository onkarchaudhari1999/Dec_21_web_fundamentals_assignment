 
var amt = prompt("Enter the number");

amt = parseInt(amt);

for(i = 1; i<= amt ; i++){
       for(j =0; j < i; j++){
      document.write("⭐");
    }
    document.write("<br>");
}