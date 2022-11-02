import "./styles.css";

var age = 10;
var accompanied = false;
if (age >= 13) {
  console.log("you're allowed");
} else if (age < 13 && accompanied === true) {
  console.log("you're in");
} else {
  console.log("sorry, you can't come in");
}
