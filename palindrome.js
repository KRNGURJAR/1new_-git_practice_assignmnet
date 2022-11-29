let n=5;
let bag="";
let str="naman";

for(let i=n-1;i>=0;i--){
  bag+=str[i];
}

if(bag==str){
  console.log("palindrome");
  
}
else{
  console.log("not palindrome");
}
