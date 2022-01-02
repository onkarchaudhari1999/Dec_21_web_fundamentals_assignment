var p = prompt("Enter number: ");
cnt = 0
for(var i = 2; i <= p/2; i++)
{
    if(p%i == 0){
        cnt++;

    }
}    
    if(cnt==0)
{
        alert("Entered number is a prime number");
    }

    else
{
        alert("Entered number is not a prime number")
    }    

