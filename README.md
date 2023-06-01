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