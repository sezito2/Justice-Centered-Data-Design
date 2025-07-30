# 1.8. Loading Data & Data Loaders

<p class="cite_small">
  Some content below is reused and modified from Observable Framework's documentation page about the <a href="https://observablehq.com/framework/files" target="_blank" rel="noopenner noreferrer">FileAttachment()</a> function</a>.
</p>

Thus far, we've been working with data declared and instantiated within the notebook itself. Yet, often is the case that we will be working with data sets that we save and load from the `data` folder.

Let's learn how to load these files, so we can use a variety of data sets.

## 1.8.1 Framework's FileAttachment()

The most convenient method provided by Observable Framework is their `FileAttachment()` function.

Framework's `FileAttachment()` function takes one parameter, which is a String literal. It uses as a local path to locate the desired file to attach to the page. The path parameter is relative to the calling code’s source file, e.g., the page’s Markdown file.

Here's the syntax:

```javascript
const data = FileAttachment("./../relative/path/to/data.csv")
```

If loaded successfully, the following properties of the variable are available in addition to the data:

- `name` - the file’s name (such as `rdu-forum-board.json`)
- `mimeType` - MIME type (such as application/json),
- `lastModified` - modification time (in milliseconds since epoch), and
- `size` - size in bytes.

```javascript
// Example use and accessing of FileAttachment properties
data.name // == data.csv
data.mimeType // == text/csv
```

### FileAttachment file methods

Here's an important detail. The `FileAttachment()` function doesn’t actually load the file for you to use all by itself!

Before you can do anything, Framework is designed to apply a file-format method. Once this method is applied, the file is officially loaded.

Use the appropriate method for the file type. For instance, a CSV file means that you should use the `.csv()` method.

<div class="example">
  <p>
    <code>const data = FileAttachment("./../relative/path/to/data.csv").csv({typed: true})</code>
  </p>
  <p>
    See Observable's documentation about the <a href="https://observablehq.com/framework/lib/csv" target="_blank" rel="noopenner noreferrer">.csv()</a> method.
  </p>
</div>

A quick note about the .csv() method. Note how CSV assumes the values are delimited, i.e., separated, by commas. Some files use different delimiters, such as semicolons. For a different delimiter, like semicolon separated values, use the `.dsv()` method and pass the delimiter as a parameter called `delimiter`:

```javascript
// Revised the typical one-liner just for the sake of formatting
const capitals = FileAttachment("us-state-capitals.csv").dsv(
  {
    delimiter: ";",
    typed: true
  }
)
```

#### File methods & supported file formats

In the table below, review what file formats are currently supported and what data type the method returns. We will typically be using `.csv()` and `.json()`, and occassionally `.txt()` for text files and `.xlsx()` for MS Excel files.

<!-- FileAttachment() Supported Filetypes -->
<table>
  <thead>
    <tr>
      <th>method</th>
      <th>return type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><code>file.arquero</code></td>
    <td>Arquero <code>Table</code></td>
    </tr>
    <tr>
    <td><code>file.arrayBuffer</code></td>
    <td><code>ArrayBuffer</code></td>
    </tr>
    <tr>
    <td><code>file.arrow</code></td>
    <td>Arrow <code>Table</code></td>
    </tr>
    <tr>
    <td><a href="#binary-formats"><code>file.blob</code></td>
    <td><code>Blob</code></td>
    </tr>
    <tr>
    <td><code>file.csv</code></td>
    <td><code>Array</code> of objects</td>
    </tr>
    <tr>
    <td><code>file.dsv</code></td>
    <td><code>Array</code> of objects</td>
    </tr>
    <tr>
    <td><code>file.html</code></td>
    <td><code>Document</code></td>
    </tr>
    <tr>
    <td><code>file.image</code></td>
    <td><code>HTMLImageElement</code></td>
    </tr>
    <tr>
    <td><code>file.json</code></td>
    <td><code>Array</code> of objects, <code>Object</code>, <em>etc.</em></td>
    </tr>
    <tr>
    <td><code>file.parquet</code></td>
    <td>Arrow <code>Table</code></td>
    </tr>
    <tr>
    <td><code>file.sqlite</code></td>
    <td><code>SQLiteDatabaseClient</code></td>
    </tr>
    <tr>
    <td><code>file.stream</code></td>
    <td><code>ReadableStream</code></td>
    </tr>
    <tr>
    <td><code>file.text</code></td>
    <td><code>string</code></td>
    </tr>
    <tr>
    <td><code>file.tsv</code></td>
    <td><code>Array</code> of objects</td>
    </tr>
    <tr>
    <td><code>file.xlsx</code></td>
    <td><code>Workbook</code></td>
    </tr>
    <tr>
    <td><code>file.xml</code></td>
    <td><code>Document</code></td>
    </tr>
    <tr>
    <td><code>file.zip</code></td>
    <td><code>ZipArchive</code></td>
    </tr>
  </tbody>
</table>

## 1.8.2 Framework's Data Loaders

Observable Framework also provides us with the ability to preload and preprocess larger data sets with data loaders.

Data loaders helps us widdle larger data sets down to smaller sizes before the page loads on the user (client) side for better performance and easier comprehension. However, we can't really learn how to use them quite yet, since it involves coding with the data and data formats. So, for now, just know that we will learn about this option later.

If you wish to read about them, see Observable Framework's "[Data loaders](https://observablehq.com/framework/data-loaders)" page.

## Exercises

**Goal**: Load a data file and demonstrate your ability to access its properties and data values.

<p class="note">Remember to convert all of the <code>javascript</code> codeblocks to executable <code>js</code> codeblocks.

### E 1.8.1 - Load a CSV file

1. Attach the `.csv` file in the first codeblock and assign it to a meaningful variable name.
2. In the second codeblock, log the following properties to the console: name and size.
3. Still in the second codeblock, log the first object in the Array to the console.
4. Don't forget to go through the GH/PR process.

```javascript
// Your FileAttachment() code goes here
```

```javascript
// Your other code with the variable goes here
```
