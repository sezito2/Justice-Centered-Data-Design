# 1.6 Strings

<p class="cite_small">
  Some content below is reused and modified from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopenner noreferrer">MDN's JS reference guide</a>.
</p>

Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.

## 1.6.1 Creating Strings

Easy! Yet, there are a few ways to create strings, as seen in the below example. There are different more nuanced reasons for creating strings with particular methods. But, we will mostly rely on the most typical method of creating a string with double quotes.

```
// Double quotes
const string1 = "A string primitive"

// Single quotes
const string2 = 'Also a string primitive'

// Backticks
const string3 = `Yet another string primitive`
```

### Special tip with backticks

Yet, here's a fun trick using backticks as strings. Backticks tell the JS engine to interpret the string as a string literal, which unlocks some fun features to use variables within String literal consructions like the below example:

```
const a1 = "cat"
const a2 = "bullfrog"

// Use mustache syntax to incorporate string variables
// within the string construction more seamlessly
console.log(`A ${a1} will chase your ${a2}`)

// Log prints "A cat will chase your bullfrog
```

## 1.6.2 Accessing Characters

There are two ways to access an individual character in a string.

### charAt()

```
"cat".charAt(1) // gives value "a"

let stringEx = "Dog"
stringEx.charAt(1) // gives value of "o"
```

### Numerical index

The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:

```
"cat"[1] // gives value "a"
stringEx[1] // gives value of "o"
```

<p class="warning">
  When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. The properties involved are neither writable nor configurable.
</p>

## 1.6.3 Common String Methods

Try out the following common methods for strings located in the table below. Start by defining the variable, `str1` below in your browser's console.

```
// Running string example
let str1 = "Cat In The Hat"
```

| Method | Action | Output  |
|--------|--------|---------|
| `str1.toUpperCase()`  | Converts all chars to uppercase. | `"CAT IN THE HAT"`|
| `str1.toLowerCase()`  | Converts all chars to lowercase. | `cat in the hat`|
| `str1.length`  | Retrieves the total length of String.<br>Returns Number value. | `14`|
| `str1.split(" ")`  | Splits String by given delimiter value.<br>Returns Array list of Strings. | `[ "Cat", "In", "The", "Hat" ]`|
| `str1.includes("The Hat")`  | Checks if the given String value is in the string.<br>Returns Boolean `true` or `false`. | `true`|
| `str1.startsWith("c")`  | Checks if String starts with character.<br>Returns Boolean `true` or `false`. | `false`|
| `str1.endsWidth("t")`  | Checks if String ends with character.<br>Returns Boolean `true` or `false`. | `true`|

## 1.6.4 Chaining JS Methods

Many methods can be ***chained*** in a desired sequence of execution in JS. By chained, I mean that you can link them together as follows:

```javascript
/**
  * Search for string but not worry about casing of characters
  * 1. .toLowerCase() --> make all chars lowercase in string.
  * 2. .includes() --> search for desired part of the string.
**/
str1.toLowerCase().includes("hat") // returns true
```

This chaining method can be applied with many JS methods—not just Strings.

## Exercises

```js
const vonnegut = FileAttachment("./../data/vonnegut.txt").text()
```

