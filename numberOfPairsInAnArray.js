// Find number of pairs in an array which has the sum provided as a parameter
// For example:
// const arr1 = [4, 2, 5, 6, 8, 1];
// const sum = 6;
// numberOfPairs(arr1, sum);
// // Pais that matches are [4, 2] => 6. [5, 1] => 6
// So output 2


function findNumberOfPairsInAnArray(array, sum) {
    
    if(!Array.isArray(array) || typeof sum !== "number"){
         return "Invalid";
    }
    
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
      
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                count++;
            }
        }
    }
    return count;
 
}

console.log(findNumberOfPairsInAnArray([4, 2, 5, 6, 8, 1], 6)); 
console.log(findNumberOfPairsInAnArray([4, 2, 5, 6, 8, 1], true)); 
console.log(findNumberOfPairsInAnArray([4, 2, 5, 6, 8, 1], "hello")); 
console.log(findNumberOfPairsInAnArray([4, 2, "hello", 6, 8, 1], 6)); 
console.log(findNumberOfPairsInAnArray([4, 2, 5, '6', 8, '1'], 6)); 
console.log(findNumberOfPairsInAnArray([4, 2, 5, 6, 8, 1], 8)); 
console.log(findNumberOfPairsInAnArray([4, 2, 5, 6, 8, 1], true)); 
console.log(findNumberOfPairsInAnArray(4, 2, 5, 6, 8, 1), "hello"); 