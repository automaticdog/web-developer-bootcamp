# NOTES:

## Strings:

#### `substr(firstIndex, lastIndex)`
  - returns all characters from `firstIndex` to `lastIndex`, INCLUDING `lastIndex`
  - `lastIndex` is optional
#### `slice(firstIndex, lastIndex)`
  - returns all characters from `firstIndex` to `lastIndex`
  - the character at `lastIndex` is NOT included!
  - `lastIndex` is optional

## Arrays:

#### for-in vs for-of
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