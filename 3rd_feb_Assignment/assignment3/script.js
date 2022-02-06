
function twoSum(num, target){
    var ans = [];
 for(i = 0 ; i<=num.length;i++){
         for(j = i+1 ;j <= num.length;j++){
             sum = num[i]+num[j];
             if(sum==target){
                 ans.push(i,j);
                 return (ans);
             }
         }
 }

};

document.write(twoSum([2,7,11,15,14,5,9,6], 19));