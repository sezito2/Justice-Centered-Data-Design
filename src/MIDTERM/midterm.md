# Zito - Midterm

* **Name**: Sami Zito
* **Dataset**: Filename of the chosen dataset

## Overview

***Paragraph 1: Briefly explain your reasons for choosing the specific dataset,
which can include any discussion about the topic and particular variables.***


```js
import {utcParse,utcFormat} from "d3-time-format";
```

Then, divide the notebook into meaningfully sections and subsections.
Use the following general scheme to revise as needed.

## Attach the data

* csv data (will need ({typed: true}) when attaching the file)
  
```javascript
let metaAdsOriginal = FileAttachment("../data/midterm-options/meta-ads/meta-ads-mentioning-israel-after-2015-09-11.csv").csv({typed: true})
```
```js
let metaAdsOriginal = FileAttachment("../data/midterm-options/meta-ads/meta-ads-mentioning-israel-after-2015-09-11.csv").csv({typed: true})
```
```js
metaAdsOriginal
```

## Convert Dates

The dates found in the data file are not strings. But below is the code I would use to convert the date strings to date objects.

```javascript
const dateParse = d3.timeParse("%Y-%m-%d")
let metaAds = metaAdsOriginal.map((ad)=> ({
    ...ad,
    ad_creation_time_obj: dateParse(ad.ad_creation_time)
  }
))
```
```javascript
metaAds
```

### Format Dates
<!-- Formatting dates to play around with differnt ideas -->
```js
let dayNum = d3.utcFormat("%j")
let prettyFormat = d3.utcFormat("%b %d, %Y")
let yearFormat = d3.utcFormat("%Y")
let metaAdsDates = metaAdsOriginal.map((ad) => ({
  ...ad,
  ad_creation_time_day: dayNum(ad.ad_creation_time),
  formatted_date:  prettyFormat(ad.ad_creation_time),
  year: yearFormat(ad.ad_creation_time),
  })
)
```
```js
metaAdsDates
```


## Grouping #1 - Maximum Amount Spent vs the Minimum Impressions

Explain your plan to group the data in a particular way here, before you do so.
At least one of the groupings should use some variation of D3's `.rollup()`, so
you can count particular grouped properties.

Provide a procedure of your grouping plan in an ordered list before the codeblock:

1. define the new array variable 
2. set the new variable equal to `d3.rollup`
3. In the `()` enter the orginal array
4. Enter fields to group by with the formula: `(d) => d.field`

```js
let groupByArray1 = d3.rollup(
  metaAdsOriginal,
  (D) => D.length,
  (d) => d.max_spend,
    (d) => d.min_impressions,
)
```

```js
groupByArray1
```

Again, be sure to output your newly transformed data in executable codeblocks
for easier verification and reviewing.

## Grouping #2 - Minimum amount spend by year

Explain your plan to group the data in a particular way here, before you do so.
At least one of the groupings should use some variation of D3's `.rollup()`, so
you can count particular grouped properties.

Provide a procedure of your grouping plan in an ordered list before the codeblock:

1. Coding_Action_1
2. Coding_Action_2
3. ...

```js
let amountByYear = d3.rollup(
  metaAdsDates,
  (D) => D.length,
  (d) => d.year,
    (d) => d.min_spend,
)
```
```js
amountByYear
```

## Reflection

Use the following prompt to guide your reflection about your data work:
"What 2-3 insights and 2-3 questions did you glean from your initial work
with the dataset?"

Use the PR-TEMPLATE prompts to reflect on the midterm experience.