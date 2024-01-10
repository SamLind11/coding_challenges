/*
Quick sort is an efficient, recursive divide-and-conquer approach to sorting an 
array. In this method, a pivot value is chosen in the original array. The array 
is then partitioned into two subarrays of values less than and greater than the 
pivot value. We then combine the result of recursively calling the quick sort 
algorithm on both sub-arrays. This continues until the base case of an empty or 
single-item array is reached, which we return. The unwinding of the recursive 
calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance 
on average.
*/

function quickSort(array) {
    let length = array.length;
    
    // Base case.
    if (length == 0 || length == 1) {
        return array;
    }

    // Choose pivot value to be the first value.
    let pivot = array[0];

    // Subarrays to be sorted recursively.
    let subArrGreater = [], subArrLess = [];
    
    // Sort values into the greater or less array.
    for (let i = 1; i < length; i++) {
        if (array[i] < pivot) {
            subArrLess.push(array[i]);
        } else {
            subArrGreater.push(array[i]);
        }
    }

    // Quicksort each subarray.
    subArrLess = quickSort(subArrLess);
    subArrGreater = quickSort(subArrGreater);

    // Concatentate the results and return.
    return [...subArrLess, pivot, ...subArrGreater];
}

let test = [1, 4, 2, 5, 3];

console.log(quickSort(test));