// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let duplicatesCount = 0
  let index = 1
  let lastValue = nums[0]

  while (index < nums.length && lastValue !== undefined) {
    const value = nums[index]

    if (value === lastValue) {
      nums.splice(index, 1)
      nums.push(undefined)
      duplicatesCount += 1
    } else {
      lastValue = value
      index += 1
    }
  }

  return nums.length - duplicatesCount
};
