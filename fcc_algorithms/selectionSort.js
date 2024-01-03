/*
Selection sort works by selecting the minimum value in a list and swapping it 
with the first value in the list. It then starts at the second position, selects
the smallest value in the remaining list, and swaps it with the second element. 
It continues iterating through the list and swapping elements until it reaches 
the end of the list. Now the list is sorted. Selection sort has quadratic time 
complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as
input and returns an array of these integers in sorted order from least to
greatest.
*/

function selectionSort(array) {
    // Only change code below this line
    let length = array.length;

    if (length == 0 || length == 1) {
        return array;
    }
    let least_index;

    for (let i = 0; i < length; i++) {
        least_index = i;

        // Loop through unsorted list and find the least element.
        for (let j = i; j < length; j++) {
            if (array[j] < array[least_index]) {
                least_index = j;
            }
        }
        // Swap least element with the ith element.
        if (least_index != i) {
            let temp = array[i];
            array[i] = array[least_index];
            array[least_index] = temp;
        }
    }

    return array;
    // Only change code above this line
}

let test = [1, 5, 3, 4, 2];
console.log(selectionSort(test));