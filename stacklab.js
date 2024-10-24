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



//     console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 4000);
// console.log("third");


