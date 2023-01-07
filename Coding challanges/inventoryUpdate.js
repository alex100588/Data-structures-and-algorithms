// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    const obj1 = arr1.reduce((acc, [amt, name])=>({
    ...acc,
    [name]: amt
  }), {});
  const obj2 = arr2.reduce((acc, [amt, name])=>({
    ...acc,
    [name]: amt
  }), {});

  for (const name in obj2) {
    if (name in obj1) {
      obj1[name] += obj2[name];
    } else {
      obj1[name] = obj2[name];
    }
  }

  const output = [];
  for (const name in obj1) {
    output.push([obj1[name], name]);
  }

  return output.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]));
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

// updateInventory(curInv, newInv);
console.log(updateInventory(curInv, newInv));