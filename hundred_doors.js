var numDoors = 5;
var doorStatus = [];
var doorSkip = [];
for(var i =0; i < numDoors; i++){
  doorStatus.push(0);
  doorSkip.push(i);
}
for(let i =0; i < numDoors; i++){
  for(let j=0; j < numDoors; j=doorSkip[j]){
    if(doorStatus[j]==0){
      doorStatus[j]=1;
    }

  }
}
console.log(doorStatus);
  console.log(doorSkip);
