import { documentReady, documentComplete } from '../../src' 

beforeEach(() => {
  document.addEventListener('readystatechange', () => {
    console.log(document.readyState)
  })
})

describe('documentReady', () => {

  // 1
  test('the number of calls to the passed function === 1', () => {
    const jestFn = jest.fn()

    documentReady(jestFn)

    expect(jestFn).toHaveBeenCalledTimes(1)
  })

  // 2
  
})

describe('documentComplete', () => {

  // 1
  test('the number of calls to the passed function === 1', () => {
    const jestFn = jest.fn()

    documentComplete(jestFn)

    expect(jestFn).toHaveBeenCalledTimes(1)
  })
  
  // 2

})
