/*
The bubble sort method starts at the beginning of an unsorted array and 'bubbles
up' unsorted values towards the end, iterating through the array until it is 
completely sorted. It does this by comparing adjacent items and swapping them 
if they are out of order. The method continues looping through the array until  
no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and 
worst cases has quadratic time complexity. While simple, it is usually 
impractical in most situations.
*/

function bubbleSort(array) {
    let length = array.length;

    // Return an empty array or array with length 1.
    if (length == 0 || length == 1) {
        return array;
    }
    
    let limit, now, next;

    for (let i = 0; i < length; i++) {
        limit = length - i - 1;
        for (let j = 0; j < limit; j++) {
            // Compare each list item with the one after it.
            now = array[j];
            next = array[j + 1];

            // Swap items.
            if (next < now) {
                array[j] = next;
                array[j + 1] = now;
            }
        }
    }
    return array;
}

// Test code.
let test = [1, 5, 2, 4, 3];
console.log(bubbleSort(test));