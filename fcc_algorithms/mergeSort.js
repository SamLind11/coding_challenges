/*
The steps of merge sort are:

1) Recursively split the input array in half until a sub-array with only one 
element is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). 
This algorithm is popular because it is performant and relatively easy to 
implement.

Instructions: Write a function mergeSort which takes an array of integers as 
input and returns an array of these integers in sorted order from least to 
greatest. A good way to implement this is to write one function, for instance 
merge, which is responsible for merging two sorted arrays, and another function,
for instance mergeSort, which is responsible for the recursion that produces 
single-item arrays to feed into merge.
*/
function mergeSort(array) {
    let length = array.length;

    // Base case.
    if (length <= 1) {
        return array;
    }

    // Function for merging sorted arrays.
    function merge(arr1, arr2) {
        let length1 = arr1.length;
        let length2 = arr2.length;
        let i = 0, j = 0;
        let result = [];
        while (i + j < length1 + length2) {
            if (j == length2) {
                result.push(arr1[i]);
                i++;
            } else if (i == length1) {
                result.push(arr2[j])
                j++;
            } else if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        }
        return result;
    }

    //Split the array at the middle value into left and right arrays.
    let split = Math.floor(length / 2);
    let left = array.slice(0, split);
    let right = array.slice(split, length);

    // Return the merged and split subarrays.
    return merge(mergeSort(left), mergeSort(right));
}


test = [1, 5, 6, 4, 3, 1];
console.log(mergeSort(test));
