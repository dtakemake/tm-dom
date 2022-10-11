declare type Callback = () => void;
declare type documentReady = {
  (callback: Callback): void;
};
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
declare const documentReady: documentReady;
declare type documentComplete = {
  (callback: Callback): void;
};
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
declare const documentComplete: documentComplete;
export { documentReady, documentComplete };
//# sourceMappingURL=ready.d.ts.map
