// https://leetcode.com/problems/perfect-squares/

const memory = {}

function numSquares(n) {
  if (n <= 3) {
    return n
  }

  const sqrt = Math.sqrt(n)
  const floor = Math.floor(sqrt)

  if (sqrt === floor) {
    return 1
  }

  let values = []
  for (let i = floor; i > 0; i--) {
    const remainder = n - (i * i)
    const memoryHit = memory[remainder]

    if (memoryHit !== undefined) {
      values.push(1 + memoryHit)
    } else {
      values.push(1 + numSquares(remainder))
    }
  }

  const output = Math.min(...values)
  memory[n] = output

  return output
}
