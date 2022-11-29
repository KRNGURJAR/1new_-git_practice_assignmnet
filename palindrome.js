let n=5;
let bag="";
let str="naman";

for(let i=n-1;i>=0;i--){
  bag+=str[i];
}

if(bag==str){
  console.log("Its palindrome");
  
}
else{
  console.log("Its not palindrome");
}
