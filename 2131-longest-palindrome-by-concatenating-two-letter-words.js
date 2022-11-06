// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let length = 0

  const wanted = {}
  const singles = new Set()

  for (const word of words) {
    if (wanted[word] > 0) {
      wanted[word] = wanted[word] - 1
      singles.delete(word)
      length += 4
      continue
    }

    const reverse = word[1] + word[0]

    if (word === reverse) {
      singles.add(word)
    }

    wanted[reverse] = (wanted[reverse] || 0) + 1
  }

  return length + (singles.size !== 0 ? 2 : 0)
};