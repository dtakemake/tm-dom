declare type CSSSelector = string;
export declare const selectorEngine: {
  find: <T extends HTMLElement = HTMLElement>(
    selectors: CSSSelector,
    element?: HTMLElement
  ) => T[];
  findOne: <T_1 extends HTMLElement = HTMLElement>(
    selectors: string,
    element?: HTMLElement
  ) => T_1 | null;
  childrens: <T_2 extends HTMLElement = HTMLElement>(
    element: HTMLElement,
    selector: string
  ) => T_2[];
  parents: <T_3 extends HTMLElement = HTMLElement>(
    node: HTMLElement,
    selector: string
  ) => T_3 | null;
  parent: <T_4 extends HTMLElement = HTMLElement>(
    node: HTMLElement
  ) => T_4 | null;
  prev: <T_5 extends HTMLElement = HTMLElement>(
    element: HTMLElement,
    selector: string
  ) => T_5 | null;
  next: <T_6 extends HTMLElement = HTMLElement>(
    element: HTMLElement,
    selector: string
  ) => T_6 | null;
};
export {};
//# sourceMappingURL=selector-engine.d.ts.map
