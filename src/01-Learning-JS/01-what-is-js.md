# 1.1 What is JavaScript

<p class="cite_small">
  Some content below is reused and modified from MDN Web Docs' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/" target="_blank" rel="noopenner noreferrer">JavaScript Guide</a>.
</p>

JavaScript (JS) is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JS such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Overall, JS helps you create and select digital objects on the web, so you can programmatically change what they do and look like.

Computers have been programmed to interpret the source text of JS by parsing JS code from left to right and converting the text into a sequence of input elements, such as predefined and protected names for tokens, control characters, line terminators, comments, or whitespace, (e.g., spaces, tabs, and newline characters).

If that info doesn't fully compute yet, that's ok. You simply should understand that JS has to be "read" by a computer, so there are certain syntax and grammars that we should be aware of. Comments are a great place to begin.

Before we move forward, let's be sure we understand some basic pieces that are honestly part of all programming languages:

1. Comments
2. Variables, Declarations, and Scope

## 1.1.2 JS Comments

You can and should document your code with comments. Comments are parts of code that are ignored by the JS interpreter, because it is written for the people writing the code only.

In JS, there are two types of comments: **one-line** and **multi-line**:

```javascript
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

### One-line comments

- **Syntax**: Begins with a double forward-slash: `//`.
- **Scope**: Ends once you add a new line. JS assumes it will be source code again.
- **Uses**: Short notes about a line or susbet portion of code. Often, they can be used like headings in documentation to inform the reader what is below that line or set of lines.

### Multi-line comments

- **Syntax**: Begins with `/*` and ends with `*/`.
- **Scope**: As stated above, comments begin with `/*` and end once you write `*/`. JS assumes it will be source code again.
- **Uses**: Longer notes.
    - Heading + intro at the top of a file, describing the file.
    - Set of notes about what are called functions in JS, i.e., a block of code designated to perform one function on the data.

At this juncture, just be sure to know how to read and write comments. We'll practice them more as we learn specific parts of JS.

## 1.1.3 Declarations, Initialization, and Variables

In JS, you write with data. Computers need to be told what to do with the data of which you are writing. To be able to manage the state of data at any point in your code, you need *declare* to JS to *initialize*, i.e., create, *variables* to store the data meaningfully.

### Declarations and Initialization

**Declarations** tell JS how to manage the data being initialized, and there are three types in JS that we'll cover below.

**Initialization** refers to the act of creating a new variable, which you declare.

#### `var`

Declares a variable, optionally initializing it to a value. See [MDN Example of var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).

```javascript
// Declare variable x and initialize by assigning a value of number 1
var x = 1

// If variable x value is equal to 1, then run code within scoped curly braces {}
if (x === 1) {

  // Declare variable x and initialize by assigning a value of number 2
  var x = 2
  // Print out x to console; Expected output: 2
  console.log(x)

  // Just re-assign variable x a value of number 3
  x = 3
  // Print out x to console; Expected output: 3
  console.log(x)

}

// Print out x to console; Expected output: 3
console.log(x)
```

#### let

Declares a block-scoped, local variable, optionally initializing it to a value. See [MDN Example of let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let).

```javascript
// Declare variable x and initialize by assigning a value of number 1
let x = 1

// If variable x value is equal to 1, then run code within scoped curly braces {}
if (x === 1) {

  // Declare variable x and initialize by assigning a value of number 2
  let x = 2
  // Print out x to console; Expected output: 2
  console.log(x)

  // Just re-assign variable x a value of number 3
  x = 3
  // Print out x to console; Expected output: 3
  console.log(x)

}

// Print out x to console; Expected output: 1
console.log(x)
```

#### const

Declares a block-scoped, read-only named constant. See [MDN Example of const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

```javascript
// Declare variable x and initialize by assigning a value of number 1
const x = 1

// If variable x value is equal to 1, then run code within scoped curly braces {}
if (x === 1) {

  // Declare variable x and initialize by assigning a value of number 2
  const x = 2
  // Print out x to console; Expected output: 2
  console.log(x)

  // Re-assign variable x a value of number 2
  x = 3
  // Print out x to console; Expected output:
  //   > TypeError: invalid assignment to const 'x'
  console.log(x)

}

// Nothing, since error is produced within scope of if conditional
console.log(x)
```

### Variables

We can infer from the above examples that variables are meaningful names for values to use and reuse across your code. The names of variables, called identifiers, conform to certain rules:

- Begins with a letter (a-z A-Z): `apples`
- JS is case sensitive, so letters include the characters A through Z (uppercase) as well as a through z (lowercase).
    - JS convention uses camelCaseFormat for variables: `applesForMe`.
- Subsequent characters after letters can be digits (0 – 9): `applesForMe10`.

There are other conventions and rules, but we don't need to belabor them right now.

## 1.1.4 What's Next

Comments, declarations, intitialization, and variables help us start our reading and writing journey with JS. Let's take the next step by learning some types of data formats that we can assign to declared and initialized variables.
