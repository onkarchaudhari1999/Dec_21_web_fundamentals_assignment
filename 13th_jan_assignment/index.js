console.log("Hello");


const outer = [
    [4,3,2,4],
    [9,1,5,6],
    [2,7,9,8],
    [8,5,2,0]
];

 var count = 0;
  
for(let i=0 ; i< outer.length ; i++){
    document.write("[");
   document.write(outer[i]);
   document.write("]");
   document.write("<br/>");
     var inner = outer[i];

     
     for(let j = 0; j < inner.length; j++){
         if( i == j ){
             inner[j] = parseInt(inner[j]);
             count = count + inner[j];
         }
     }
   }
 document.write("Sum of digonals of this matrix is ",count);
