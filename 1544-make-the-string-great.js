// https://leetcode.com/problems/make-the-string-great/

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let index = 0;
  let lastCode = 0;

  while (index < s.length) {
    const code = s.charCodeAt(index);

    if (code >= 97 ? code - 32 === lastCode : code + 32 === lastCode) {
      s = s.slice(0, index - 1) + s.slice(index + 1, s.length)
      index = Math.max(0, index - 2);
      lastCode = 0;
    } else {
      index += 1;
      lastCode = code
    }
  }

  return s;
};
