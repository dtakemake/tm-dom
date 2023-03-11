# DOM utilities

```

$ npm install tm-dom

```

### How to use

##### selectorEngine

```ts

import { selectorEngine } from 'tm-dom'

const inputTextElements = selectorEngine.find<HTMLInputElement>( 'input["type="text"]' )
inputTextElements.forEach( element => {
  
  /**
   * we know the element is a HTMLInputElement
   * and it has the property `value`
   */
  console.log( element.value ) 
})

```

##### ready

```ts

import { documentReady, documentComplete } from 'tm-dom'

// the function calls the passed function after the document has finished loading 
// and the document has been parsed, but sub-resources such as scripts, images,
// stylesheets and frames are still loading
documentReady( callback )

// the function calls the passed function after the document and all sub-resources have finished loading
documentComplete( callback )

```
