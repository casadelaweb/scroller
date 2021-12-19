# Scroller
## Simple and lightweight script for scrolling purposes

## Getting started
1. Download latest scroller.min.js and place it in your project's folder.
2. Include it via script tag in your html:

```html
<!-- Include via script tag in HMTL -->
<script src="scroller.min.js"></script>
```
2. Or import it as an ES module like the following:

```js 
// Import it with webpack
import Scroller from "./your-path-to-scroller.min.js";
```

3. Then initialize it in your javascript code:

```js
// Don't forget to init it in your js
const myLinks = new Scroller({});
myLinks.init();
```
4. Add you custom settings or just leave it default

```js
const myLinks = new Scroller({
    // Your custom settings go here
});
myLinks.init();  
```

## Settings

```js 
const myLinks = new Scroller({
        // These are default settings
        btnSelector: ".scroll-to",
        btnAttr: "data-scroll",
        btnPreventDefault: true,
        offsetTop: 0,
        navAutoOffset: false,
        navSelector: "nav",
    });
myLinks.init();   
```
