// Function as a variable must be defines before calling
const callB2 = () => {
  console.log("I'm B2");
}

console.log('Hello');
let a = setTimeout(callB1, 2000);
let b = setTimeout(callB2, 0);
console.log("World");

// Regular function declaration can be called after
function callB1(){
  console.log("I'm B1");
}