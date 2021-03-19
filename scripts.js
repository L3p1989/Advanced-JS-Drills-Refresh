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
//fruits array
let fruits = ["strawberry", "peach", "banana"];
//global variable
//let favFruit;
//pintFruit function
function printFruit() {
  //log "strawberry" to console
  console.log(fruits[0]);
  //favFruit set to "peach"
  let favFruit = fruits[1];
  //leastFav is "banana"
  let leastFav = fruits[2];
  //function printFavFruit
  function printFavFruit() {
    //log favFruit to console
    console.log(favFruit);
  }
  console.log(leastFav);
  //call printFavFruit
  printFavFruit();
}
//call printFruit
printFruit();
//call function
greeting();
//create greeting function
function greeting() {
  console.log(`Hello ${name}`);
}
