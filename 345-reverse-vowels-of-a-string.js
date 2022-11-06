// https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const stack = []
  const positions = []

  let result = s

  for (let i = 0; i < s.length; i++) {
    if (/a|e|i|o|u/i.test(s[i])) {
      stack.push(s[i])
      positions.push(i)
    }
  }

  for (let position of positions) {
    const popped = stack.pop()
    result = result.slice(0, position) + popped + result.slice(position + 1, result.length)
  }

  return result
};