# Scroller.js

Lightweight, smooth scrolling JavaScript plugin with no external dependences.

## Getting started

#### CDN
```html
<!-- The fastest way to get started -->
<!-- Note that CDN version has been transpiled with Babel -->
<script src="https://cdn.jsdelivr.net/gh/casadelaweb/scroller/dist/scroller-cdn.min.js">
</script>
```

#### Via script tag
Download the latest scroller-cdn.min.js and then place it in your project's folder.

```html
<!-- Include via script tag in your html code -->
<!-- Note that CDN version has been transpiled with Babel -->
<script src="your-path-to/scroller-cdn.min.js"></script>
```
#### Import
Import scroller-es6.min.js as an ES module like the following:

```js 
// Import it with webpack
import Scroller from "./your-path-to/scroller.min.js";
```

## Usage & Initialization

### Scrolling to elements

#### HTML
Declare buttons that cause scrolling in your html code by adding them default class "scroll-to" and default "data-scroll" attribute:
```html
<!-- Add class "scroll-to" to your scrolling buttons -->
<button type="button" class="scroll-to" data-scroll="target-section-id">
    Scroll me to #target-section-id element
</button>
<!-- Don't forget to add "data-scroll" attribute with target element id-->
<button type="button" class="scroll-to" data-scroll="specific-element-id">
    Scroll me to #specific-element-id
</button>

<!-- Both selector and data attribute might be redefined in your js settings -->
```

Links and buttons dafault behavior:
```html
<!-- By default, scroller.js prevents default behavior of links and submit buttons -->

<!-- So these would only cause scrolling -->
<button type="submit" class="scroll-to" data-scroll="target-section-id">
    Submit button
</button>

<a href="#" class="scroll-to" data-scroll="specific-element-id">
    Scroll me to #specific-element-id
</a>

<!-- If default behavior is needed, you can change it in your js settings -->

```

### Scrolling to the top of the page
Scroller also has button Up feature:
```html
<!-- This one scrolls you to the top of the page -->
<button type="button" class="button-up">
    Bring me to the top
</button>
```

### Init in JS
Initialize scroller in your javascript code the way you prefer:

```js
// Don't forget to initialize it in your js

// using a variable:
const myLinks = new Scroller({
    // with or without your custom settings
});

// or simply just:
new Scroller();
```

Add your custom settings if needed:

```js
const myLinks = new Scroller({
    // Your custom settings go here
});
```
## Settings

#### Scrolling to elements settings:

```js 
const myLinks = new Scroller({
    // Elements that fire scrolling
    // Type String
    btnSelector: ".scroll-to",

    // Attribute that contains target element id
    // Type String
    btnAttr: "data-scroll",

    // Prevent default behavior of links and buttons?
    // Type Boolean
    btnPreventDefault: true,
});
```
#### Fixed navigation offset settings:
```js 
const myLinks = new Scroller({
    // Static top offset (px)
    // Type Number. Negative value is also appropriate. By default it's 0px.
    // This will scroll you to 100px before target element
    offsetTop: 100,

    // Calculate top offset based on navigation height?
    // Type Boolean. By default it's false.
    navAutoOffset: true,

    // Navigation selector
    // Type String. By default it's "nav" tag.
    navSelector: ".navigation",
});
```

Notice that if offsetTop and navAutoOffset are both enable total offset summarizes their values. Total offset formula: *(offsetTop + nav Height) px*.
```js
const myLinks = new Scroller({
    // Static top offset = 100px
    offsetTop: 100,
    // Nav offset is enable and nav height, for example, 80px
    navAutoOffset: true,
    // total offset would be 100px + 80px = 180px

    // Works fine with negative valueSet
    offsetTop: -50,
    // For example, nav height is 80px
    navAutoOffset: true,
    // total offset would be -50px + 80px = 30px
});
```

#### Links settings
```html
    <a href="services.html#title-section">
        Go to page "services.html" and then scroll to element with id "title-section"
    </a>
```

```js
const myLinks = new Scroller({
    // Selector of links that scroll to the specific id
    // Works fine for any page - current or external
    // If current page contains an element with stated id, it scrolls to that element
    // If not, goes to the stated page and then scrolls to the element with stated id
    // Type String
    linkSelector: "a"
});
```

#### button Up settings:
Button to top has only one setting - it's selector:
```js 
const myLinks = new Scroller({
    // Selector of buttons that scroll to the top of the page
    // Type String
    btnUpSelector:".button-up",
});
```

#### All default setting:
```js 
const myLinks = new Scroller({
    // These are default settings
    btnSelector: ".scroll-to",
    btnAttr: "data-scroll",
    btnPreventDefault: true,
    offsetTop: 0,
    navAutoOffset: false,
    navSelector: "nav",
    btnUpSelector:".button-up",
    linkSelector: "a",
    log: false,
    logLang: "en"
});
```
