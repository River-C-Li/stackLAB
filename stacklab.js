// Part 1 Stack Overflow, Part 2: Trampolines
let counter = 100; // Declaring the global variable

try{
function incrementCounter() {
  counter++;
}
console.log(counter); // Outputs 0
incrementCounter(100);
console.log(counter); // Outputs 1

// function incrementAndRecurse(num) {
    // Base case: stop recursion when num reaches 5
    if (num >= 9) {
      return num;
    }
    // Increment num
    num++; 
    // Recursive call
    return incrementAndRecurse(num); 
  }
  console.log(incrementAndRecurse(5)); 
  console.log(counter); 
} catch (error) {
    console.log("erro")     
    } 
    finally{
    console.log("OOPS!")
    }

    console.log("first");
setTimeout(() => {
    console.log("second");
}, 4000);
console.log("third");


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
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// // eg
// // 1
  const factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
  }
// 2 changed from 1
  const facto = (n, a = 1) => {
    if (n === 0) return a;
    return () => facto(n - 1, n * a);
  }
// 3
  const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }
  console.log(trampoline(facto(10000)))


