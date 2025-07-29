# 1.8 More Advanced Data Types &amp; Transformations

```js
// import {downloadCSV} from "./utils/utils.js";
import {downloadCSV} from "./utils/utils.js";
```

In the previous lessons, we used individual variables to represent some of the demographic information about the 19th century Irish immigrants featured in the [Bellevue Almshouse data](https://gih-nyc.org/almshouse/the-almshouse-records/), such as names.

```javascript
let person1Name = 'Marry Gallagher'
let person2Name = 'John Sanin'
```

We learned that Array lists help us create a *collection* of values rather than individual variables.

```javascript
let names = ['Mary Gallagher', 'John Sanin', 'Anthony Clark', 'Margaret Farrell']
```

Yet, if all of this data are meaningful together, we should use data types that helps us self-document our data. By self-document, I mean that the each ***value*** in the data should be labeled as a means for readers to understand what the values mean.

Let's take some time to learn a few standard data file formats, as well as common JS data structures that help us work with data sets.

## 1.8.1 Common Data File Formats

Data are texts with a repeatable pattern in structure. We are going to learn about two main types of data file formats: CSV & JSON.

### CSV - Comma Separated Values

CSV stands for Comma Separated Values. The CSV standard assumes the following structure and patterns to create 2-dimensional data with rows and columns like spreadsheet tables:

- Every line == 1 row.
- Commas separate values, thereby making columns.
- First line is reserved for the header, i.e., the column names.

Here's an example demonstrating these basic rules:

```
col1,col2,col3,col4
value_col1,value_col2,value_col3
value_col1,value_col2,value_col3
value_col1,value_col2,value_col3
value_col1,value_col2,value_col3
```

Here's another example with highlighted text from the 2024 NC voter data set included in this project (See `/src/data/nc-voters/absentee_2024_aggregated.csv`):

![](./../assets/images/1-js/csv-example-ncv.png)

### JSON: JavaScript Object Notation

Enter

## Loading Data with Observable's FileAttachment()

Observable's `FileAttachment()` function takes one parameter, which is a String literal, that it uses as a local path to locate the desired file to attach to the page.

Here's the syntax:

```javascript
const data = FileAttachment("./../path/to/the/data.csv")
```

If loaded successfully, the following properties are available in addition to the data:

- `name` - the file’s name (such as `rdu-forum-board.json`)
- `mimeType` - MIME type (such as application/json),
- `lastModified` - modification time (in milliseconds since epoch), and
- `size` - size in bytes.

### Support file formats

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
  <td><code>Array</code></td>
  </tr>
  <tr>
  <td><code>file.dsv</code></td>
  <td><code>Array</code></td>
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
  <td><code>Array</code>, <code>Object</code>, <em>etc.</em></td>
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
  <td><code>Array</code></td>
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

## 1.8.1 JS Object Arrays

In JS, we can use Object arrays to create a set that combines multiple types of data that we can iterate, use, and change. Object arrays are scoped with opening and closing curly braces, `{ }`, where in-between them we add our key-value pairs, each of which we demarcate with a comma: `{ key: value, key: value, key: value, }`.

Object arrays are very helpful with more complex data, because of the self-documenting feature, as well as the ability to create more meaningful relationships between parts of the data via nested hierarchies. For example, here's a sample of NC 2024 voter data. Note how there seems to be two main parts to the available date: voter demographics and ballot information.

<!-- Render nc2024SampleVoters -->
```javascript
// Sample of 4 randomly selected abridged entries from NC November 2024 absentee voter data
let nc2024SampleVoters = [
  {
    "race": "WHITE",
    "ethnicity": "NOT HISPANIC or NOT LATINO",
    "gender": "F",
    "age": 33,
    "ballot_req_type": "MAIL",
    "ballot_request_party": "REP",
    "ballot_req_dt": "10/23/2024",
    "ballot_send_dt": "10/28/2024",
    "ballot_rtn_dt": null,
    "ballot_rtn_status": null
  },
  {
    "race": "BLACK or AFRICAN AMERICAN",
    "ethnicity": "UNDESIGNATED",
    "gender": "F",
    "age": 57,
    "ballot_req_type": "MAIL",
    "ballot_request_party": "DEM",
    "ballot_req_dt": "09/14/2024",
    "ballot_send_dt": "09/23/2024",
    "ballot_rtn_dt": "10/28/2024",
    "ballot_rtn_status": "SPOILED-EV"
  },
  {
    "race": "WHITE",
    "ethnicity": "NOT HISPANIC or NOT LATINO",
    "gender": "M",
    "age": 21,
    "ballot_req_type": "MAIL",
    "ballot_request_party": "UNA",
    "ballot_req_dt": "09/19/2024",
    "ballot_send_dt": "09/21/2024",
    "ballot_rtn_dt": "10/24/2024",
    "ballot_rtn_status": "ACCEPTED"
  },
  {
    "race": "WHITE",
    "ethnicity": "UNDESIGNATED",
    "gender": "F",
    "age": 32,
    "ballot_req_type": "MAIL",
    "ballot_request_party": "DEM",
    "ballot_req_dt": "08/03/2024",
    "ballot_send_dt": "09/24/2024",
    "ballot_rtn_dt": null,
    "ballot_rtn_status": "SPOILED-EV"
  }
]
```

<!-- Define nc2024SampleVoters -->
```js
let nc2024SampleVoters = [
  {
    "race": "WHITE",
    "ethnicity": "NOT HISPANIC or NOT LATINO",
    "gender": "F",
    "age": 33,
    "ballot_req_type": "MAIL",
    "ballot_request_party": "REP",
    "ballot_req_dt": "10/23/2024",
    "ballot_send_dt": "10/28/2024",
    "ballot_rtn_dt": null,
    "ballot_rtn_status": null
  },
  {
    "race": "BLACK or AFRICAN AMERICAN",
    "ethnicity": "UNDESIGNATED",
    "gender": "F",
    "age": 57,
    "ballot_req_type": "MAIL",
    "ballot_request_party": "DEM",
    "ballot_req_dt": "09/14/2024",
    "ballot_send_dt": "09/23/2024",
    "ballot_rtn_dt": "10/28/2024",
    "ballot_rtn_status": "SPOILED-EV"
  },
  {
    "race": "WHITE",
    "ethnicity": "NOT HISPANIC or NOT LATINO",
    "gender": "M",
    "age": 21,
    "ballot_req_type": "MAIL",
    "ballot_request_party": "UNA",
    "ballot_req_dt": "09/19/2024",
    "ballot_send_dt": "09/21/2024",
    "ballot_rtn_dt": "10/24/2024",
    "ballot_rtn_status": "ACCEPTED"
  },
  {
    "race": "WHITE",
    "ethnicity": "UNDESIGNATED",
    "gender": "F",
    "age": 32,
    "ballot_req_type": "MAIL",
    "ballot_request_party": "DEM",
    "ballot_req_dt": "08/03/2024",
    "ballot_send_dt": "09/24/2024",
    "ballot_rtn_dt": null,
    "ballot_rtn_status": "SPOILED-EV"
  }
]
```

If desired, we could also group the data with the following nested hierarchy to simplify the structure for easier comprehension: `{ "key": {...}, "key": {...} }`.

<!-- Render nc2024SampleVoters -->
```javascript
// Sample of 4 randomly selected abridged entries from NC November 2024 absentee voter data
let nc2024SampleVoters = [
  {
    "voter": {
      "race": "WHITE",
      "ethnicity": "NOT HISPANIC or NOT LATINO",
      "gender": "F",
      "age": 33,
    },
    "ballot_info": {
      "req_type": "MAIL",
      "request_party": "REP",
      "req_dt": "10/23/2024",
      "send_dt": "10/28/2024",
      "rtn_dt": null,
      "rtn_status": null
    }
  },
]
```

## 1.8.2 Grouping Data by Fields with Map()

Object arrays are great structures for meaningfully storing and transforming complex data sets. But, you should know that JS has some built-in global types of object arrays like `Map()` (see [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)).

The global Map object holds key-value pairs like basic object arrays. Yet, the two types have key notable differences:

- **Key Types**: Map's remember the original insertion order of the keys
- **Key Order**: Map's keys can be any value (including functions, objects, or any primitive).

Additionally, Maps includes the following bult-in methods to use and transform the data:

### Typical Uses of Map()

#### Setters & Getters

Use `.set()` to add or update a Map().

```javascript
const myMap = new Map()

// Add new elements to the map
myMap.set("key", "value")

// Update an element in the map
myMap.set("key", "updatedValue")
```

Use `.get()` to retrieve a particular keyed value.

```javascript
const myMap = new Map()
myMap.set("key", "value")

console.log(myMap.get("key")) // Returns "value"
console.log(myMap.get("keyNotInMap")) // Returns undefined
```

#### .has() - Check if key exists

Sometimes you need to check if a key exists. Do so with .has().

```javascript
const myMap = new Map()
myMap.set("key", "value")

console.log(myMap.has("key")) // Returns Boolean of true
console.log(myMap.has("keyNotInMap")) // Returns Boolean of false
```

#### Iterate a Map() with for...of loop

You will definitely need to iterate through maps for multiple reasons. Use the `for...of` looping method to do so.

```javascript
const myMap = new Map()
myMap.set(0, "zero")
myMap.set(1, "one")

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`)
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`)
}
// 0 = zero
// 1 = one
```

#### Convert and aggregate an object array as a Map() grouped the data by a chosen data field

Ok. Here's a great case for using Map!

Sometimes you need to group an array of objects by a specific field in your data.

For example, if your data set is at the individual voter level, like `nc2024SampleVoters`, but you need the data organized by voters' ***requested ballot party affiliation***, you can group the per Voter level by the available `ballot_request_party` field. The final returned Map uses the unique values from `.groupBy()` as keys, which can be used to get the array of elements in each group.

Still tricky to understand. No problem. Let's review how that looks like in practice with our running `nc2024SampleVoters` array of objects:

<!-- EXAMPLE .groupBy() in practice -->
```javascript
// Create and assign the groupBy result to a new variable
let ncVotersGroupedByParty = Map.groupBy(nc2024SampleVoters,
  ({ballot_request_party}) => {
    /**
      * Enter desired evaluative expression(s)
      * Let's use simple conditionals to tell JS how to
      * explicitly group the data by the available
      * ballot_request_party values
    **/
    if (ballot_request_party == "REP") { return "REP" }
    else if (ballot_request_party == "DEM") { return "DEM" }
    else if (ballot_request_party == "UNA") { return "UNA" }
  }
)
```

Here's the resulting JS Map() object from the above code, which you should plug into your console:

```javascript
Map([
  // All voters who requested Republican ballots
  ["REP", [
      {
        "race": "WHITE",
        "ethnicity": "NOT HISPANIC or NOT LATINO",
        "gender": "F",
        "age": 33,
        "ballot_req_type": "MAIL",
        "ballot_request_dt": "10/23/2024",
        "ballot_send_dt": "10/28/2024",
        "ballot_rtn_dt": null,
        "ballot_rtn_status": null
      },
      ... // rinse and repeat for every voter who requested on this date
    ],
  ],
  // All voters who requested Democrat ballots
  ["DEM", [{...}]],
  // All voters whose ballot requests are unavailable
  ["UNA", [{...}]],
  // rinse and repeat for every unique "ballot_request_party"
])
```

Here's how it will look in your console:

![](./../assets/images/1-js/js-map-obj.png)

```js
let ncVotersGroupedByParty = Map.groupBy(nc2024SampleVoters, ({ballot_request_party}) => {
  // Enter evaluative expression
  if (ballot_request_party == "REP") { return "REP" }
  else if (ballot_request_party == "DEM") { return "DEM" }
  else if (ballot_request_party == "UNA") { return "UNA" }
})

console.log('ncVotersGroupedByParty')
console.log(ncVotersGroupedByParty)
```

Before we move forward, let's break that structure down in a simplified fashion. Here's the basic structure and pieces:

<!-- EXAMPLE .groupBy() structure -->
```javascript
Map.groupBy(objectArray,
  ({parameterHere, asNeeded}) => {
    // code to evaluate here
  }
)
```

## 1.8.3 Grouping Data by Date() objects with D3.js InternMap

```js
import {InternMap} from "d3-array";
```

In addition to JS's built-in data structures, like Arrays, Object Arrays, and Map(), we should also learn some of D3.js' data structures, since we are already importing and using it. Why? Because sometimes JS doesn't do what you think it will.

For example, if you use dates as keys in a JavaScript Map, you may be surprised that it won’t work as you expect. Indeed, if you use `Date()` objects as keys in a `Map()`, JS will not always respect the one key per collection rule. Let's see what happens in the example below:

```
// Example JS Map() with Date() objects as keys
vanillaJsDateMap = new Map([
  [new Date(Date.UTC(2001, 0, 1)), "red"],
  [new Date(Date.UTC(2001, 0, 1)), "green"] // distinct key!
])

// Try to .get() the desired entry at that date
vanillaJsDateMap.get(new Date(Date.UTC(2001, 0, 1))) // --> undefined!
```

Why does this happen in JS? In this case of Map(), **those Date() objects as keys are not being evaluated as the same moment in time**.

Instead, `Map()` uses the [SameValueZero algorithm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) to determine ***key equality***. By key equality, I mean that JS evaluates the uniqueness of keys by checking if the keys are the same ***instantiated instance of the Date() object***. In other words, two **dates** are only considered the same, i.e., unique keys in a collection, if those Date objects are the same object being stored in the computer's memory.

***Woof!***

To avoid this issue, enter D3.js' `InternMap()`.

Akin to Object Arrays, D3.js has the InternMap. ***Interning*** is specific method for using keys that help us group the data more meaningfully for analysis and visualization later. Specifically, interning as a main feature of grouping data helps us consistently store only one copy of each distinct key, i.e., group. Based on this assumption of the InternMap(), you should know how JS/D3.js stores the data, so you don't accidentally overwrite/erase your data, when grouping it via an InternMap.

For example, the below InternMap considers two Date instances representing the same moment to be equal, so the environment will only store the first instance, i.e., replace the `"red"` entry with subsequent `"green"` entry. Print that out to the console and see for yourself.

```
const exampleInternMap = new InternMap([
  [new Date(Date.UTC(2001, 0, 1)), "red"],
  [new Date(Date.UTC(2001, 0, 1)), "green"] // replaces previous entry
])

// Get value at specific indexed Date() object key
exampleInternMap.get(new Date(Date.UTC(2001, 0, 1))) // "green"
```

```js
const exampleInternMap = new InternMap([
  [new Date(Date.UTC(2001, 0, 1)), "red"],
  [new Date(Date.UTC(2001, 0, 1)), "green"] // replaces previous entry
])
console.log("It's not easy being __", exampleInternMap.get(Date.UTC(2001, 0, 1)), "__.") // returns "It's not easy being __ green __."
```

Here's a more helpful and applied example to see the InternMap() in action. Let's say you wanted to group all of the NC 2024 voter data by their requested ballot party affiliation: `ballot_request_party`. Here's how that new grouping structure would look like with an InternMap():

```
let nc2024ByReqDate = new InternMap([
  ["REP", [
      {
        "race": "WHITE",
        "ethnicity": "NOT HISPANIC or NOT LATINO",
        "gender": "F",
        "age": 33,
        "ballot_req_type": "MAIL",
        "ballot_request_dt": "10/23/2024",
        "ballot_send_dt": "10/28/2024",
        "ballot_rtn_dt": null,
        "ballot_rtn_status": null
      },
      ... // rinse and repeat for every voter who requested on this date
    ],
  ],
  ["DEM", [{...}]],
  ["UNA", [{...}]],
  // rinse and repeat for every unique "ballot_request_party"
])
```

```js
let nc2024ByReqDate = new InternMap([
  ["REP", [
      {
        "race": "WHITE",
        "ethnicity": "NOT HISPANIC or NOT LATINO",
        "gender": "F",
        "age": 33,
        "ballot_req_type": "MAIL",
        "ballot_request_party": "REP",
        "ballot_send_dt": "10/28/2024",
        "ballot_rtn_dt": null,
        "ballot_rtn_status": null
      },
    ],
  ],
  ["DEM", [
      {
        "race": "BLACK or AFRICAN AMERICAN",
        "ethnicity": "UNDESIGNATED",
        "gender": "F",
        "age": 57,
        "ballot_req_type": "MAIL",
        "ballot_req_dt": "09/14/2024",
        "ballot_send_dt": "09/23/2024",
        "ballot_rtn_dt": "10/28/2024",
        "ballot_rtn_status": "SPOILED-EV"
      },
      {
        "race": "WHITE",
        "ethnicity": "UNDESIGNATED",
        "gender": "F",
        "age": 32,
        "ballot_req_type": "MAIL",
        "ballot_req_dt": "08/03/2024",
        "ballot_send_dt": "09/24/2024",
        "ballot_rtn_dt": null,
        "ballot_rtn_status": "SPOILED-EV"
      },
    ],
  ],
  ["UNA", [
      {
        "race": "WHITE",
        "ethnicity": "NOT HISPANIC or NOT LATINO",
        "gender": "M",
        "age": 21,
        "ballot_req_type": "MAIL",
        "ballot_req_dt": "09/19/2024",
        "ballot_send_dt": "09/21/2024",
        "ballot_rtn_dt": "10/24/2024",
        "ballot_rtn_status": "ACCEPTED"
      },
    ]
  ],
  // rinse and repeat for every unique "ballot_req_dt"
])

// Outputs list of InternMap() keys --> [ "REP", "DEM", "UNA" ]
console.log( nc2024ByReqDate )
```

### InternMap() Methods

Thankfully, InternMap() has essentially revised JS's global Map(), so it uses many of the same built-in methods like the following:

- `.set()`
- `.get()`
- `.has()`
- `.delete()`
- `.keys()`
- `.entries()`
- `.size()`
- ...

Don't believe me, check out both of their respective `prototype` functions in the console by creating a new JS block in this notebook with the following code:

```
let ogJsMap = new Map()
let d3InternMap = new InternMap()
console.log("ogJsMap\n", ogJsMap)
console.log("d3InternMap\n", d3InternMap)
```

Notice how InternMap() echoes JS's Map().

![](./../assets/images/1-js/js-compare-map-internmap.png)

```
// Spread operator will list all values as Array List []
[...map.keys()] // [2001-01-01]
```

While InternMap uses object.valueOf by default to compute the intern key, you can pass a key function as a second argument to the constructor to change the behavior. For example, if you use JSON.stringify, you can use arrays as compound keys (assuming that the array elements can be serialized to JSON).

```
mapAsJSON = new InternMap([
  [["foo", "bar"], 1],
  [["foo", "baz"], 2],
  [["goo", "bee"], 3]
], JSON.stringify)
```

Enter

```bash
// Console log printout:
Map(3) { (2) […] → 1, (2) […] → 2, (2) […] → 3 }
_intern: Map(3) { '["foo","bar"]' → (2) […], '["foo","baz"]' → (2) […], '["goo","bee"]' → (2) […] }
size: 3
<entries>
  0: '["foo","bar"]' → Array [ "foo", "bar" ]
  1: '["foo","baz"]' → Array [ "foo", "baz" ]
  2: '["goo","bee"]' → Array [ "goo", "bee" ]
<prototype>: Map.prototype { … }
_key: function stringify()
size: 3
<entries>
  0: Array [ "foo", "bar" ] → 1
  1: Array [ "foo", "baz" ] → 2
  2: Array [ "goo", "bee" ] → 3
<prototype>: Object { … }
```

## E 1.8.1 Group NC Voters By Age Range as an InternMap()

**Goal**: Take the `nc2024SampleVoters` data and group it by a set of age ranges of your own choosing using `InternMap()`.

<p class="tip">
  You can first create a list of age caps as Number values, then use that list to check if each voter fits within a particular range of those caps. For example, if your caps are based on decades like 30, 40, 50, 60, 70, 80, 90, 100, ... and so on, then you can check if a voter is less than 30 years old, then less than 40 AND greater than or equal to 30, ... and so on.
</p>

```js
// Code here
```

## E 1.8.2 Group NC Voters By the Ballot Sent Date as an InternMap()

**Goal**: Take the `nc2024SampleVoters` data and do the following:

1. Create a new field for each entry at the voter level called `ballot_send_dt_obj` and set the value to this field by converting the string value of dates ballots were sent to voters -- `ballot_send_dt` -- into a Date() object.
2. Aggregate the updated `nc2024SampleVoters` by grouping the data by `ballot_send_dt_obj` as a new `InternMap()`.

<p class="tip">
  Be sure to write your code in a manner aligned with how I break down the process above.
</p>

```js
// Code here
```

## E 1.8.3 Group NC Voters by Your Desired Field as an InternMap()

**Goal**: Take the `nc2024SampleVoters` data and group it by your own desired field. First outline your procedure with steps below. Then, use the JS codeblock to perform your grouping as a D3.js `InternMap()`.

1. Enter step 1
2. Enter step 2
3. ...

```js
// Code here
```
