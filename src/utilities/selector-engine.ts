"use strict"

type CSSSelector = string

/**
 * 
 * @param selector CSSSelector
 * @param element HTMLElement
 * @returns a NodeList representing a list of elements matching the specified group of selectors
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */
const find = <T extends HTMLElement = HTMLElement>(selectors: CSSSelector, element = document.documentElement): Array<T> => {
  return <Array<T>>Array.from(Element.prototype.querySelectorAll.call(element, selectors))
}

/**
 * 
 * @param selector CSSSelector
 * @param element HTMLElement
 * @returns the first descendant element of baseElement which matches the specified group of selectors or null, if didn't find
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 */
const findOne = <T extends HTMLElement = HTMLElement>(selectors: string, element = document.documentElement): T | null => {
  return <T>Element.prototype.querySelector.call(element, selectors)
}

/**
 * 
 * @param element HTMLElement
 * @param selector CSSSelector
 * @returns 
 */
const childrens = <T extends HTMLElement = HTMLElement>(element: HTMLElement, selector: string): Array<T> => {
  return <Array<T>>Array.from(element.children).filter(child => child.matches(selector))
}

/**
 * 
 * @param element HTMLElement
 * @param selector CSSSelector
 * @returns 
 */
const parents = <T extends HTMLElement = HTMLElement>(element: HTMLElement, selector: string): T | null => {
  let ancestor = element.parentElement

    while (ancestor) {
      if (ancestor.matches(selector)) {
        return <T>ancestor
      }

      ancestor = ancestor.parentElement
    }

    return null
}

/**
 * 
 * @param element HTMLElement
 * @returns 
 */
const parent = <T extends HTMLElement = HTMLElement>(element: HTMLElement): T | null => {
  return <T>element.parentElement
}

/**
 * 
 * @param element HTMLElement
 * @param selector CSSSelector
 * @returns 
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
 * 
 * @param element HTMLElement
 * @param selector CSSSelector
 * @returns 
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
