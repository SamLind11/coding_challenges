/*
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements 
which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} 
and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. 
So to evaluate an expression involving symmetric differences among three elements 
(A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, 
and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric 
difference. The returned array must contain only unique values (no duplicates).
*/

function sym(args) {
    // Convert args to array.
    const arr = Array.from(arguments);
    const len = arr.length;
    if (len === 1) {
        return arr;
    }

    // Loop through arr and perform sym dif on the current result (now) and the next array in arr.
    var now = arr[0];
    var next;

    for (var i = 0; i < len - 1; i++) {
        next = arr[i + 1]; 
        now = sym_two(now, next)
    }

    // Function using Sets to store unique values from each array.  Performed on two arrays.
    function sym_two(arr1, arr2) {
        var set1 = new Set(arr1);
        var set2 = new Set(arr2);

        // If set1 and set2 share an item, delete from set1. Else, add the unshared item in set2 to set1.
        for (var i of set2) {
            if (set1.has(i)) {
                set1.delete(i);
            } else {
                set1.add(i);
            }
        }
        return Array.from(set1);
    }

    
    return now;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4], [19, 3]));