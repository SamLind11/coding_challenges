/*
Compare and update the inventory stored in a 2D array against 
a second 2D array of a fresh delivery. Update the current existing 
inventory item quantities (in arr1). If an item cannot be found, 
add the new item and quantity into the inventory array. The 
returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    // Object to store item totals.
    const inv = {};

    // Add all items and values from arr1 to inv.
    arr1.forEach(element => {
        inv[element[1]] = element[0];
    });

    // Update inv using values from arr2.
    arr2.forEach(element => {
        if (inv.hasOwnProperty(element[1])) {
            inv[element[1]] += element[0];
        } else {
            inv[element[1]] = element[0];
        }
    });
    // Add record from inv to a 2d array.
    let result = [];
    for (const [key, value] of Object.entries(inv)) {
        let record = [value, key];
        result.push(record);
    }

    // Sort resulting array by the second column.
    result.sort((a,b) => {
        let aName = a[1].toUpperCase();
        let bName = b[1].toUpperCase();
        if (aName < bName) return -1;
        if (aName > bName) return 1;
        return 0;
    });

    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);