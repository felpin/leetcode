// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = []

  for (const c of s) {
    if (c === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }

  return stack.join('')
};