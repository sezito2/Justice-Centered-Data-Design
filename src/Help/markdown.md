# Markdown Cheatsheet

This page includes basic markdown syntax for quick support.

## Headings

```md
# Heading level 1
Heading level 1

## Heading level 2
Heading level 2

### Heading level 3
Heading level 3

#### Heading level 4
Heading level 4

##### Heading level 5
Heading level 5

###### Heading level 6
Heading level 6
```

## Basic Formatting

```md
 **bold text**
__bold text__

*italic text*
_italic text_

***bold + italic text***
___bold + italic text___

~~strikethrough text~~

> Blockquote
>
>> Nested blockquote

```

## Lists

```md
1. First item
2. Second item
    1. Indented item
    2. Indented item
3. Third item

- First item
- Second item
    - Indented item
    - Indented item
- Third item

- [ ] Checkbox 1
- [x] Checkbox 2
- [ ] Checkbox 3
```

## Inline code

`const example = "Example"`

## Multiline code that renders to the page

You will see this codeblock in the markdown file render on the page, because Observable will wrap the code in a fancy preformatted text element: `<pre>...</pre>`.

```javascript
// See the notebook for the syntax
const example = "Example"
const anotherExample = "Really?"
```

## Multiline code that executes as JS code

You won't see this codeblock in the markdown file render on the page, because Observable will execute it as an actual script.

```js
// See the notebook for the syntax
const example = "Example"
const anotherExample = "Really?"
// See the web browser console log
console.log(example, anotherExample)
```

## Links & Images

```md

Refer to [Google](https://google.com)

[Link with title](https://google.com "Here the title goes")

![Alternative text to describe the image](./../pat/to/image_file.png)

```
