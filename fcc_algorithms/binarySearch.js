/*
Binary search is an O(log(n)) efficiency algorithm for searching a sorted array 
to find an element. It operates using the following steps:

1) Find the middle value of a sorted array. If value == target return true (The 
value has been found and the search is complete).
2) If middle value < target, search right half of array in next compare.
3) If middle value > target, search left half of array in next compare.
4) If after searching the whole array the value is not present, return false 
(The array has been searched and the value is not in the array).

As you can see, you are successively halving an array, which gives you the 
log(n) efficiency. For this challenge, we want you to show your work - how you 
got to the target value... the path you took!

Write a function binarySearch that implements the binary search algorithm on an 
array, returning the path you took (each middle value comparison) to find the 
target in an array.
*/

// Function which performs binary search and returns the path.
function binarySearch(searchList, value) {
    let arrayPath = [];
    let length = searchList.length;

    if (length == 0) return arrayPath;

    let found = false;
    let left = 0, right = length + 1;
    let middle, current;

    // Search for value while updating left and right.
    while (left != right) {
        middle = Math.floor((left + right) / 2);
        current = searchList[middle];
        arrayPath.push(middle);

        if (current == value) {
            found = true;
            break;
        } else if (value < current) {
            right = middle;
        } else {
            left = middle;
        }
    }

    if (found) {
        return arrayPath;
    } else {
        return "Value Not Found";
    }
}

const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70];

console.log(binarySearch(testArray, 0));