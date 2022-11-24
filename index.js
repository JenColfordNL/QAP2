//
console.log("Hello World");
var i = 0;
for (i < 0; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("fizz");
  } else if (i % 3 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
console.log("This is the change made to branch bonusWord");
