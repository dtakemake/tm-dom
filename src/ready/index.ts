"use strict"

type Callback = () => void

type documentReady = {
  (callback: Callback): void
}

/**
 * the function calls the passed function after 
 * the document has finished loading and the document has been parsed,
 * but sub-resources such as scripts, images, stylesheets and frames are still loading.
 * @param {callback} () => {}
 * @returns void
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState#value
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
 * @example documentReady(() => {})
 */
const documentReady: documentReady = callback => {
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true })
  } else {
    // call the passed function immediately
    callback()
  }
}

type documentComplete = {
  (callback: Callback): void
}

/*
interface EventTarget {
  readonly readyState: DocumentReadyState
}

interface Event {
  readonly target: EventTarget
}*/

/**
 * the function calls the passed function after 
 * the document and all sub-resources have finished loading. 
 * @param {callback} () => {}
 * @returns void
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState#value
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 * @example documentComplete(() => {})
 */
const documentComplete: documentComplete = callback => {
  if(document.readyState !== 'complete') {

    // ?
    document.addEventListener('readystatechange', () => {
      if(document.readyState === 'complete') {
        callback()
      }
    })

  } else {
    // call the passed function immediately
    callback()
  }
}

export { 
  documentReady,
  documentComplete
}
