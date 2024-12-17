function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
let array = [10, 20, 30, 40, 50];
let targetValue = 30;

let result = linearSearch(array, targetValue);

if (result !== -1) {
    console.log(`Target value ${targetValue} found at index ${result}`);
} else {
    console.log(`Target value ${targetValue} not found in the array`);
}
