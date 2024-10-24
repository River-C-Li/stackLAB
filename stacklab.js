// Part 1 Stack Overflow, 
let counter = 3; // Declaring the global variable

try{
function incrementCounter() {
  console.log(counter)
  counter=counter+1;
}
incrementCounter(100);
console.log(counter); 
} catch (error) {
    console.log("erro")     
    } 
    finally{
    console.log("OOPS!")
    }

//part-2   Trampolines
// Write a recursive function that completely flattens an array of nested arrays,
function flatten(arr) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flatten(arr[i])); // Recursive call
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  const nestedArray = [1, [2, 3], [4, [5, 6]]];
  const flattenedArray = flatten(nestedArray);
  // console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

  const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }
  console.log(trampoline(flattenedArray))

//Part 3: Deferred Execution
const primebar = document.creatElement("primebar")
body.appendChild(primebar)

function collectPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
const primes = collectPrimes(100); 
// console.log(primes); 

primes.forEach((prim) => {
  const primeP = document.createElement("p");
  primeP.textContent = `
      ${prim}
      `;
  primebar.appendChild(primeP);
});

setTimeout(function () {
  answer = window.alert("These are the prime number between 2 to 100!");
  firstStep();
}, 4000);


// function firstStep() {
//   if ( ) {
//       alert("These are the prime number between 2 to 100!");
//     }

