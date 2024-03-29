/*
This method works by building up a sorted array at the beginning of the list. It
begins the sorted array with the first element. Then it inspects the next
element and swaps it backwards into the sorted array until it is in sorted
position. It continues iterating through the list and swapping new items
backwards into the sorted portion until it reaches the end. This algorithm has 
quadratic time complexity in the average and worst cases.
*/

function insertionSort(array) {
    let length = array.length;
    
    
    if (length == 0 || length == 1) {
        return array;
    }

    let to_sort;

    for (let i = 1; i < length; i++) {

        to_sort = array[i];
        let tracker = i - 1;

        while (tracker >= 0 && array[tracker] > to_sort) {
            array[tracker + 1] = array[tracker];
            tracker--;
        }
        array[tracker + 1] = to_sort;
    }
    return array;
    
}

let test = [1, 5, 3, 4, 2];

console.log(insertionSort(test));