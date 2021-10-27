//1
function countToTwenty(){
    for( var i=1; i<=20; i++){
        console.log(i);
}
}
countToTwenty()



//2
function countFromTwenty(){
  for( var i=20; i>=0; i--){
        console.log(i);
}
}
countFromTwenty()


//3
function countToN(num){
  for( var i=0; i<=num; i++){
      console.log(i)
  }
}

countToN(50)

//4
function countFromN(num){
  for( var i=num; i>=0; i--){
        console.log(i);
}
}
 
 countFromN(50)

//5
function countEveryOdd(num){
    for (let i=1; i<= num; i++) {
        if ( i % 2 === 1){
        console.log(i);
        }
    }
}

countEveryOdd(10)
