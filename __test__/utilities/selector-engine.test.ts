import { selectorEngine } from '../../src'

// a class that doesn't exist
const notExistingClass = '.not-existing-class'

beforeAll(() => {
  document.body.innerHTML = `
    <section class="container">
      <div class="row">
        <div class="col-12">
          <h1>Hello world!</h3>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <img src="fake-path" alt="fake-alt" />
        </div>
        <div class="col-md-4">
          <form action="#" method="GET" class="form">
            <div class="forn-group">
              <input type="text" value="" class="input" />
            </div>
            <div class="forn-group">
              <button type="submit" class="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
})

// find
describe('selectorEngine.find', () => {

  // 1
  test('returns empty array(not null), if no elements found', () => {
    const expected: Array<HTMLElement> = []
    const elements = selectorEngine.find(notExistingClass)

    // not null
    expect(elements).not.toBeNull()

    // comparison with an array
    expect(elements).toEqual(expect.arrayContaining(expected))
  })

  // 2
  test('finds the required number of elements', () => {
    const selector = '.col-md-4'

    // find in the DOM
    const elements = selectorEngine.find(selector)
    expect(elements).toHaveLength(3)

    // find in the HTMLElement
    const parent = <HTMLElement>document.querySelector('.row')
    const parent_elements = selectorEngine.find(selector, parent)
    expect(parent_elements).toHaveLength(3)
  })

  // 3
  test('if an element is passed, the found elements have a value property', () => {
    const inputs = selectorEngine.find<HTMLInputElement>('.input')
    expect(inputs[0]).toHaveProperty('value')

    const images = selectorEngine.find<HTMLImageElement>('img')
    expect(images[0]).toHaveProperty('src')
  })
})

// findOne
describe('selectorEngine.findOne', () => {

  // 1
  test('returns null, if element not found', () => {
    const element = selectorEngine.findOne(notExistingClass)

    // null
    expect(element).toBeNull()
  })

})

// childrens
describe('selectorEngine.childrens', () => {

  // 1
  test('returns empty array(not null), if no elements found', () => {
    const expected: Array<HTMLElement> = []
    const parent = selectorEngine.findOne('.container')

    if(parent) {
      const childrens = selectorEngine.childrens(parent, notExistingClass)

      // not null
      expect(childrens).not.toBeNull()

      // comparison with an array
      expect(childrens).toEqual(expect.arrayContaining(expected))
    } else {

      // incorrectly defined HTMLElement
      expect(parent).not.toBeNull()
    }
  })
})

// parents
describe('selectorEngine.parents', () => {

  // 1
  test('returns null, if element not found', () => {
    const children = selectorEngine.findOne('.row')

    if(children) {
      const parents = selectorEngine.parents(children, notExistingClass)

      // null if not found
      expect(parents).toBeNull()
    } else {

      // incorrectly defined HTMLElement
      expect(children).not.toBeNull()
    }
  })

})

// parent
describe('selectorEngine.parent', () => {

  // 1
  test('find parent', () => {
    const children = selectorEngine.findOne('.col-md-4')
    
    if(children) {
      const parent_1 = selectorEngine.parent(children)

      if(parent_1) {
        // incorrectly defined HTMLElement
        expect(parent_1).not.toBeNull()
        expect(parent_1.classList.contains('row')).toBeTruthy()

        const parent_2 = selectorEngine.parent(parent_1)

        // incorrectly defined HTMLElement
        expect(parent_2).not.toBeNull()
        expect(parent_2?.classList.contains('container')).toBeTruthy()
      }
      
    } else {

      // incorrectly defined HTMLElement
      expect(children).not.toBeNull()
    }
  })

})

// prev
describe('selectorEngine.prev', () => {

  // 1
  test('returns null, if element not found', () => {
    const element = selectorEngine.findOne('.col-md-4')

    if(element) {
      const prev = selectorEngine.prev(element, '.col-md-5')
      expect(prev).toBeNull()
    } else {

      // incorrectly defined HTMLElement
      expect(element).not.toBeNull()
    }
  })

})
  
// next
describe('selectorEngine.next', () => {

  // 1
  test('returns null, if element not found', () => {
    const element = selectorEngine.findOne('.col-md-4')

    if(element) {
      const next = selectorEngine.next(element, '.col-md-5')
      expect(next).toBeNull()
    } else {

      // incorrectly defined HTMLElement
      expect(element).not.toBeNull()
    }
  })

})
