// https://leetcode.com/problems/rectangle-area/

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const cx1 = Math.max(ax1, bx1)
  const cy1 = Math.max(ay1, by1)

  const cx2 = Math.min(ax2, bx2)
  const cy2 = Math.min(ay2, by2)

  const areaA = calculateArea(ax1, ay1, ax2, ay2)
  const areaB = calculateArea(bx1, by1, bx2, by2)
  const areaC = calculateArea(cx1, cy1, cx2, cy2)

  return areaA + areaB - areaC
};

function calculateArea(x1, y1, x2, y2) {
  return x1 > x2 || y1 > y2 ? 0 : (x2 - x1) * (y2 - y1)
}