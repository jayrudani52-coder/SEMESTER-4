// Write a Node.js program using fs synchronous methods to read a file, count the number of vowels in its content, and append the vowel count to the same file.
var fs=require("fs");
fs.writeFileSync("vowel.txt","Hello B4 Students! \nWelcome to the Node JS Tutorial \n");
var d=fs.readFileSync("vowel.txt","utf-8");
var i=0;
var v="aeiouAEIOU";
for(let a=0 ; a<d.length ; a++){
    if(v.includes(d[a])){
        i++;
    }
}
fs.appendFileSync("vowel.txt","Vowels count is : "+i);
console.log("Vowel count is : " +i);