//set name to "L3p"
name = "L3p";
//create var name
var name;
//log name in console
console.log(name);
//call function setName()
setName();
//create function setName()
function setName() {
  //name is "L3p"
  var name = "L3p";
  //log name to console
  console.log(name);
}
//log "===Line Break===" to console
console.log("===Line Break===");
//create avg that uses findAvg(n, n);
let avg = findAvg(2, 2);
//log some text and avg to console
console.log("some text", avg);
//create function findAvg
function findAvg(a, b) {
  //log "===Line Break===" to console
  console.log("===Line Break===");
  //answer is a added to be then divided by 2
  var answer = (a + b) / 2;
  //returns answer
  return answer;
}
