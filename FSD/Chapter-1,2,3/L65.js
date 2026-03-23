var url=require('url')
var addr="https://video.google.com:8080/about?id=20&year=2027#students"
var up=url.parse(addr,true)
console.log(up)
function leap(){
    var y=up.query.year;
    if ((y%400==0) || (y%100!=0 && y%4==0)){
        console.log("Leap Year")
    }
    else{
        console.log("NO Leap Year")
    }
}
leap()
