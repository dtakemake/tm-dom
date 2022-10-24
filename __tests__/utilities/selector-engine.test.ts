import { selectorEngine } from '../../src'

// the class that doesn't exist
const notExistingClass = '.not-existing-class'

beforeAll(() => {
  document.body.innerHTML = `
    <section class="container parents">
      <div class="row parents">
        <div class="col-12">
          <h1>Hello world!</h3>
        </div>
        <div class="col-md-4 first-element"></div>
        <div class="col-md-4 between-element">
          <img src="fake-path" alt="fake-alt" />
        </div>
        <div class="col-md-4 last-element">
          <form action="#" method="GET" class="form">
            <div class="form-group first-element">
              <input type="text" value="" class="input" />
            </div>
            <div class="form-group">
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
  test('returns an empty array, if no elements are found', () => {
    const expected: Array<HTMLElement> = []
    const elements = selectorEngine.find(notExistingClass)

    // comparison with an array
    expect(elements).toEqual(expect.arrayContaining(expected))
  })

  // 2
  test('finds the required number of elements', () => {
    const selector = '.col-md-4'
    const expected = 3

    // find in the DOM
    const elements = selectorEngine.find(selector)
    expect(elements).toHaveLength(expected)

    // find in the HTMLElement
    const parent = <HTMLElement>document.querySelector('.row')
    const parentElements = selectorEngine.find(selector, parent)
    expect(parentElements).toHaveLength(expected)
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
  test('returns null, if the element is not found', () => {
    const element = selectorEngine.findOne(notExistingClass)

    // null
    expect(element).toBeNull()
  })

  // 2
  test('check that the method returns exactly the first element found', () => {

    // find in the DOM
    const element = selectorEngine.findOne('.col-md-4')

    // check for classname
    if(element) {
      expect(element.classList.contains('first-element')).toBe(true)
    } else {

      // incorrectly defined HTMLElement
      expect(element).not.toBeNull()
    }

    // find in the HTMLElement
    const parent = <HTMLElement>document.querySelector('.form')
    const parentElement = selectorEngine.findOne('.form-group', parent)
    
    // check for classname
    if(parentElement) {
      expect(parentElement.classList.contains('first-element')).toBe(true)
    } else {
    
      // incorrectly defined HTMLElement
      expect(parentElement).not.toBeNull()
    }
  })
})

// childrens
describe('selectorEngine.childrens', () => {

  // 1
  test('returns empty array, if no elements are found', () => {
    const expected: Array<HTMLElement> = []

    // find in the HTMLElement
    const parent = <HTMLElement>document.querySelector('.row')
    const childrens = selectorEngine.childrens(parent, notExistingClass)

    // comparison with an array
    expect(childrens).toEqual(expect.arrayContaining(expected))
  })

  // 2
  test('finds the required number of elements', () => {
    const expected = 3

    // find in the HTMLElement
    const parent = <HTMLElement>document.querySelector('.row')
    const parentElements = selectorEngine.childrens(parent, '.col-md-4')
    expect(parentElements).toHaveLength(expected)
  })
})

// parents
describe('selectorEngine.parents', () => {

  // 1
  test('returns null, if the element is not found', () => {
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

  // 2
  test('checking the search for the nearest parent by the selector', () => {

    // find in the HTMLElement
    const children = <HTMLElement>document.querySelector('.input')
    const parent = selectorEngine.parents(children, '.parents')

    if(parent) {
      expect(parent.classList.contains('row')).toBe(true)
    } else {

      // incorrectly defined HTMLElement
      expect(parent).not.toBeNull()
    }
  })
})

// parent
describe('selectorEngine.parent', () => {

  // 1
  test('find element\'s parent', () => {
    const children = selectorEngine.findOne('.col-md-4')
    
    if(children) {
      const parent_1 = selectorEngine.parent(children)

      if(parent_1) {
        expect(parent_1.classList.contains('row')).toBe(true)

        const parent_2 = selectorEngine.parent(parent_1)

        // incorrectly defined HTMLElement
        expect(parent_2).not.toBeNull()
        expect(parent_2?.classList.contains('container')).toBe(true)
      } else {

        // incorrectly defined HTMLElement
        expect(parent_1).not.toBeNull()
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
  test('returns null, if the element is not found', () => {
    const element = selectorEngine.findOne('.col-md-4')

    if(element) {
      const prev = selectorEngine.prev(element, notExistingClass)
      expect(prev).toBeNull()
    } else {

      // incorrectly defined HTMLElement
      expect(element).not.toBeNull()
    }
  })

  // 2
  test('checking the search for the previous sibling element by the selector', () => {
    const element = <HTMLElement>document.querySelector('.last-element')

    const previous = selectorEngine.prev(element, '.first-element')

    if(previous) {
      expect(previous.classList.contains('col-md-4')).toBe(true)
      expect(previous.classList.contains('between-element')).toBe(false)
    } else {
      
      // incorrectly defined HTMLElement
      expect(previous).not.toBeNull()
    }
  })
})
  
// next
describe('selectorEngine.next', () => {

  // 1
  test('returns null, if the element is not found', () => {
    const element = selectorEngine.findOne('.col-md-4')

    if(element) {
      const next = selectorEngine.next(element, notExistingClass)
      expect(next).toBeNull()
    } else {

      // incorrectly defined HTMLElement
      expect(element).not.toBeNull()
    }
  })

  // 2
  test('checking the search for the next sibling element by selector', () => {
    const element = <HTMLElement>document.querySelector('.first-element')

    const next = selectorEngine.next(element, '.last-element')

    if(next) {
      expect(next.classList.contains('col-md-4')).toBe(true)
      expect(next.classList.contains('between-element')).toBe(false)
    } else {
      
      // incorrectly defined HTMLElement
      expect(next).not.toBeNull()
    }
  })
})
