var a = [];
var b = prompt("Enter 1st number");
b = parseInt(b);
a.push(b);
b = prompt("Enter 2nd number");
b = parseInt(b);
a.push(b);
b = prompt("Enter 3rd number");
b = parseInt(b);
a.push(b);
console.log(a);

alert("maximum is " + Math.max(...a))
