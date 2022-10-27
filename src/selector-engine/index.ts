"use strict"

type CSSSelector = string

/**
 * Find all elements of the passed selectors of the element upon which it was called.
 * @param {selectors} CSSSelector
 * @param {element} HTMLElement
 * @returns {Array} a NodeList representing a list of elements matching the specified group of selectors.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 * @example find<HTMLDivElement>('div, .div, #div')
 * @example fint<HTMLSpanElement>('.selector', HTMLElement)
 */
const find = <T extends HTMLElement = HTMLElement>(selectors: CSSSelector, element = document.documentElement): Array<T> => {
  return <Array<T>>Array.from(Element.prototype.querySelectorAll.call(element, selectors))
}

/**
 * Find the first element of from passed selectors of the element upon which it was called.
 * @param {selectors} CSSSelector
 * @param {element} HTMLElement
 * @returns {HTMLElement|null} the first child element which matches the specified group of selectors or null, if didn't find.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @example findOne<HTMLDivElement>('div, .div, #div')
 * @example findOne<HTMLSpanElement>('.selector', HTMLElement)
 */
const findOne = <T extends HTMLElement = HTMLElement>(selectors: string, element = document.documentElement): T | null => {
  return <T>Element.prototype.querySelector.call(element, selectors)
}

/**
 * Find all of the child elements of the passed selectors of the element upon which it was called.
 * @param {element} HTMLElement
 * @param {selector} CSSSelector
 * @returns {Array} a live HTMLCollection.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/children
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 * @example childrens<HTMLDivElement>(HTMLElement, '.childDiv')
 * @example childrens<HTMLSpanElement>(HTMLElement, '.childSpan')
 */
const childrens = <T extends HTMLElement = HTMLElement>(element: HTMLElement, selector: string): Array<T> => {
  return <Array<T>>Array.from(element.children).filter(child => child.matches(selector))
}

/**
 * Find closest parent by selector.
 * @param {element} HTMLElement
 * @param {selector} CSSSelector
 * @returns {HTMLElement|null} the first parent element that matches the selector or null, if didn't find.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 * @example parents<HTMLDivElement>(HTMLElement, '.parentDiv')
 * @example parents<HTMLSpanElement>(HTMLElement, '.parentSpan')
 */
const parents = <T extends HTMLElement = HTMLElement>(node: HTMLElement, selector: string): T | null => {
  let ancestor = node.parentElement

    while (ancestor) {
      if (ancestor.matches(selector)) {
        return <T>ancestor
      }

      ancestor = ancestor.parentElement
    }

    return null
}

/**
 * Find the element's parent.
 * @param {element} HTMLElement
 * @returns {HTMLElement|null} the first parent element or null, if didn't find.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
 * @example parent<HTMLDivElement>(HTMLElement)
 * @example parent<HTMLSpanElement>(HTMLElement)
 */
const parent = <T extends HTMLElement = HTMLElement>(node: HTMLElement): T | null => {
  return <T>node.parentElement
}

/**
 * Find the previous Element.
 * @param {element} HTMLElement
 * @param {selector} CSSSelector
 * @returns {HTMLElement|null} the element preceding the specified one in its parent's list of children, or null.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 * @example prev<HTMLDivElement>(HTMLElement, '.prevDiv')
 * @example prev<HTMLSpanElement>(HTMLElement, '.prevSpan')
 */
const prev = <T extends HTMLElement = HTMLElement>(element: HTMLElement, selector: string): T | null => {
  let previous = element.previousElementSibling

    while (previous) {
      if (previous.matches(selector)) {
        return <T>previous
      }

      previous = previous.previousElementSibling
    }

    return null
}

/**
 * Find the next Element.
 * @param {element} HTMLElement
 * @param {selector} CSSSelector
 * @returns {HTMLElement|null} the element immediately following the specified one in its parent's children list, or null.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 * @example next<HTMLDivElement>(HTMLElement, '.nextDiv')
 * @example next<HTMLSpanElement>(HTMLElement, '.nextSpan')
 */
const next = <T extends HTMLElement = HTMLElement>(element: HTMLElement, selector: string): T | null => {
  let next = element.nextElementSibling

    while (next) {
      if (next.matches(selector)) {
        return <T>next
      }

      next = next.nextElementSibling
    }

    return null
}


export const selectorEngine = {
  find,
  findOne,
  childrens,
  parents,
  parent,
  prev,
  next
}
