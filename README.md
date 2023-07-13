# NOTES:

## Strings:

### `substr(firstIndex, lastIndex)`
  - returns all characters from `firstIndex` to `lastIndex`, INCLUDING `lastIndex`
  - `lastIndex` is optional
### `slice(firstIndex, lastIndex)`
  - returns all characters from `firstIndex` to `lastIndex`
  - the character at `lastIndex` is NOT included!
  - `lastIndex` is optional

## Arrays:

### for-in vs for-of
- syntax:
  - `for (let day in days) {}` -- VS -- `for (let day of days) {}`
  - **for-in:** variable = the actual index of the item being iterated, i.e. for an array `["mon", "tues", "wed"]`, returning `day` will return 0, 1, and 2 respectively
    - so, to get the value stored at the current iteration you would need to do `days[day]`
  - **for-of:** variable = the *value* stored at the index being iterated, so `day` will return "mon", "tues" and "wed" respectively

- if you need to perform some operation on an array and return it from a function *without changing the original array*, best to save the result of that operation to a variable and then return the variable, i.e.:
```
  function lastElement(arr) {
    let output = arr;
    return output[output.length -1];
  }
```
  - need to do more research into returns on arrays - when does the original array get modified etc

## Scope

- global variables are available inside any subordinate scope, HOWEVER: if you declare a variable w/ the same name within a subordinate scope, you **cannot** reference the global variable - will result in an uninitialized variable error
  - **question:** how does JS know that the variable will be re-initialized later on within the local scope, if you're calling it *before* re-initializing locally?
    - need to understand JS execution order better

## innerHTML, innerText, & textContent

- `innerHTML`: shows the full HTML contents of an element
- `innerText`: shows the text contents (without HTML markup) of an element as rendered in the *source file*, including line breaks
- `textContent`: shows only the VISIBLE text contents of an element - ex., elements with `display: none` will not be included in this attribute

## classList
- can be used to add classes to a node (whereas `setAttribute("class", "whatever"` _replaces_ the current class)
- has multiple associated methods
  - `add`, `remove`, `toggle`

## Adding elements
- if you're adding an element, you'll need to create it first with `createElement("[ELEMENT_TYPE]")`
- `apendChild`, `append`, `prepend`, `insertAdjacentElement("position", [ELEMENT])`

## Removing elements
- `remove` vs `removeChild`
  - when appended to a node, `remove()` will remove the node it's being called on
    - DOES NOT WORK IN **IE**
  - with `removeChild`, you have to call the method on the _parent_ of the node/element you want to remove, then specify the child being removed as an argument to the method

## condole.dir()
- get info about an object?

## `this` inside an event listener
- when used inside a function called by an event listener, `this` refers to the element the event listener is attached to
- primary advantage: helps code not be repetitive when reusing the same function in multiple places - without it, you would need a separate function for each element the function is called in an event listener for
  - example: `button.addEventListener("click", printText}) // function printText() { this.innerText }`

## The Event Object

### event object
- contains info about an event fired/captured by an event listener
- refer to it by passing a placeholder i.e. 'evt', 'e' or 'event' to the function in your event listener
  - example: `button.addEventListener("click", function(event) { console.log(event) })`

### event.preventDefault()
- prevents the default behavior triggered by a given event
- usually used with form submissions - where default behavior is to redirect to the submission POST route path
  - using `e.preventDefault()` allows single-page workflows with forms - can grab & use data that would otherwise be lost when the page reroutes

### input.value property
- gets the current value entered into an input

### form.reset()
- clears input fields in a form

### `change` event
- fires whenever the user _blurs_ (leaves/unfocuses) the input field

### `input` event
- fires as soon as any change is made to the input value

## Event Bubbling
- triggering an event on an element inside of another element(s) also triggers all events associated with the higher-level/parent elements

### `event.stopPropagation()`
- when called on an event, `stopPropagation()` prevents event bubbling - events will only be triggered at the level of the specific element being interacted

## Event Delegation
- event listener won't be applied to elements created _after_ the event listener was called; i.e., if an element is present on page in the initial markup, or is created dynamically prior to the event listener being declared, then that element will have the event listener added to it - but if an element is created dynamically AFTER the event listener is declared, the event listener won't be applied
- the solution is event delegation
  - apply an event listener to the _parent_ element that is going to have new elements dynamically created within it - the event listener will then apply down to the child element
  - use `event.target` to refer to the specific child element that was interacted

## The Call Stack
- mechanism that allows JS to keep track of its current place when calling multiple functions
- LIFO order until the innermost function returns something that is _not_ another function call

## WebAPIs
- JS is single-threaded, so it can only ever be handling (running) one line of code at once
- call stack recognizes certain special WebAPI functions, e.g. setTimeout, and passes those off to the _browser_ to run - freeing up JS to run the next line
- once function is complete on the browser's end, it gets passed to the callback queue, and then sent back to the call stack and placed on top

## Callback Hell™

## Promises

### Working with Promises

### Creating Promises

## Async Functions