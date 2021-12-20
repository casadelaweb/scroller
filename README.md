# Scroller.js

Lightweight, smooth scrolling JavaScript plugin with no external dependences.

## Getting started

#### CDN
```html
<!-- The fastest way to get started -->
<script src="https://cdn.jsdelivr.net/gh/casadelaweb/scroller/dist/scroller.min.js>"></script>
```

#### Via script tag
Download the latest scroller.min.js and then place it in your project's folder.

```html
<!-- Include via script tag in your html code -->
<script src="your-path-to/scroller.min.js"></script>
```
#### Import
Import scroller.js as an ES module like the following:

```js 
// Import it with webpack
import Scroller from "./your-path-to-scroller.min.js";
```

## Initialize 
Then initialize it in your javascript code the way you prefer:

```js
// Don't forget to initialize it in your js

// using a variable:
const myLinks = new Scroller({
    // with or without your custom settings
});

// or simply just:
new Scroller();
```

## Settings

#### Add your custom settings if needed

```js
const myLinks = new Scroller({
    // Your custom settings go here
});
```

#### Or don't - stay with default settings
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
```
