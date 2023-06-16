// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

myArr = [5, 3, 3, 9, 2, 9, 2]


function findNonDuplicatedNumber(arr) {
    const freqMap = new Map(); // Map to store the frequency of each element
  
    // Count the frequency of each element
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (freqMap.has(num)) {
        freqMap.set(num, freqMap.get(num) + 1);
      } else {
        freqMap.set(num, 1);
      }
    }
  
    // Find the non-duplicated number
    for (const [num, freq] of freqMap.entries()) {
      if (freq === 1) {
        return num;
      }
    }
  
    return null; // Return null if there's no non-duplicated number
  }
  
  // Example usage
  const nonDuplicatedNumber = findNonDuplicatedNumber(myArr);
  console.log(nonDuplicatedNumber);