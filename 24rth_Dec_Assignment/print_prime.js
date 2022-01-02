var p=parseInt(prompt("Enter number"));

if(p==0 || p==1)
{
    console.log("no prime numbers")
}
else {
console.log("prime numbers are");
    console.log(2);
}

for(var i = 3; i <=p; i++)
{
    if(i%2 != 0)
{

        console.log(i);
  }
} 
