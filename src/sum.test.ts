import { sum } from "./server"



describe("sum's", () => {

  let sumResult: number

  beforeAll(()=>{
    sumResult = 10
  })
  test("sum of 3 + 7 must be 10", () => {
    const result = sum(3, 7)

    expect(result).toBe(sumResult)
  })
  test("sum of 4+4  must be 8", () => {
    const result = sum(4, 4)

    expect(result).toBe(8)
  })
})
