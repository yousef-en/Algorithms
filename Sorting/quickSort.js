

function quicksort(array) {
    // Define the function "quicksort" that takes an array as input.
    if (array.length <= 1) return array;
    // If the array has 1 or no elements, return it as it doesn't need sorting.

    const pivot = array[0];
    // Select the first element of the array as the "pivot".

    const less = array.filter(i => i < pivot);
    // Create a new array "less" with all elements smaller than the pivot.

    const greater = array.filter(i => i >= pivot);
    // Create a new array "greater" with all elements greater than or equal to the pivot.

    return [...quicksort(less), pivot, ...quicksort(greater)];
    // Recursively sort "less" and "greater", then combine them with the pivot.
}

console.log(quicksort([10, 5, 2, 3]));
// Call the "quicksort" function with an array of numbers and print the result.