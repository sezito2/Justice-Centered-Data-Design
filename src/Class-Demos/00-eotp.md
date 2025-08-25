# Eyes on the Prize!

This notebook is just meant to be a little fun demo notebook to help us remember where we are headed with our data-design goals.

## Why should we care about filepaths?

A: Because we need to attach data to our notebooks sometimes! Let's attach the following dataset:

- `nc_absentee_mail_2024.csv`
- CSV file is inside of `src` --> `data` --> `nc-voters`

```javascript
// Attaching data to use in the notebook
const ncMailInBallots = FileAttachment("ENTER_PATH_HERE").csv({typed: true})
```

<p class="codeblock-caption">
  Interactive output of the data:
</p>

```javascript
// Convert me to a `js` executable, after attaching the data
ncMailInBallots
```

## Slicing data into interesting angles for lines of questioning

```javascript
// Group and tally by race
const sliceExample = d3.rollups(
  ncMailInBallots, //the data
  (v) => v.length, //tally the # of leaf node (last) grouped items
  (d) => d.race //"race" is the property we want to group and count
)
```

<p class="codeblock-caption">
  Interactive output of sliceExample:
</p>

```javascript
// Convert me to a `js` executable
sliceExample
```

## Let's flatten that nested tree of data

```javascript
// 2. Flatten back to array of objects
const flatFrequencies = sliceExample.flatMap(
  (ballot) => {
    return {
      race: ballot[0],
      af: ballot[1]
    }
  }
)
```

<p class="codeblock-caption">
  Interactive output of flatFrequencies:
</p>

```javascript
// Convert me to a `js` executable
flatFrequencies
```

## Let's Plot This Data

```javascript
Plot.plot({
  marks: [
    Plot.barX(
      flatFrequencies,
      {
        y: "race",
        x: "af",
        sort: {y: "-x"},
        tip: true
      }
    )
  ]
})
```
