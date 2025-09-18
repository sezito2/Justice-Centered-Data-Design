# Zito - Midterm

* **Name**: Sami Zito
* **Dataset**: meta-ads-mentioning-israel-after-2015-09-11

## Overview

Politics have been an interest of mine since the pandemic, so this was the dataset I was initially drawn to when each dataset was introduced. Recent events, namely the assination of Charlie Kirk and the UN finally reporting that Israel is committing a genocide in Palestine, only heightened the importance of this dataset. Companies spending and making money off of political violence and meddling in politics is not a novel concept. However the rate and scale of these incidents seems to be growing. I was interested to see how much money was being spent to influence social media users. After completing these exercises, I would be interested to investigate a few more groupings, but I know I should real it in for now.


```js
import {utcParse,utcFormat} from "d3-time-format";
```

## Attach the data

* csv data (will need ({typed: true}) when attaching the file)

<p class="codeblock-caption">
  Code block:
</p>  

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

<p class="codeblock-caption">
  Code block:
</p>  

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

For this group, I wanted to look at the maximum potential cost of the ad versus the minimum number of people that saw it.

1. define the new array variable 
2. set the new variable equal to `d3.rollup`
3. In the `()` enter the orginal array
4. Enter fields to group by with the formula: `(d) => d.field`

```js
let impressionsByMoney = d3.rollup(
  metaAdsOriginal,
  (D) => D.length,
  (d) => d.max_spend,
    (d) => d.min_impressions,
)
```

```js
impressionsByMoney
```

## Grouping #2 - Minimum amount spent by year

For this group, I wanted to explore how minimum estimated amount of money had changed over the years. Since each ad may cost a different amount (and there are so many ads) I also wanted to create ranges of money to make it more digestable.

1. Create an intern map with `d3.group()`
2. The skeleton follow a similar format to the `d3.rollup()` I used above.
3. Group by `year`
4. Create conditional `if` statements for the map returning the ranges I want

### Simple Grouping Without Ranges

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
### Comparing Minimum $$s Spent by Year (Ranges)

```js
/**monetary ranges
 * 0
 * 1-999
 * 1000-1999
 * 2000-2999
 * 3000-3999
 * 4000-4999
 * 5000-5999
 * 6000-6999
 * 7000-7999
 * 8000-8999
 * 9000-9999
 * 10000-10999
 * 11000-11999
 * 12000-12999
 * 13000-13999
 * 14000-14999
 * 15000-15999
 * 16000-16999
 * 17000-17999
 * 18000-18999
 * 19000-19999
*/
```
```js
let moneyRangesYears = d3.group(metaAdsDates,
  (d) => (d.year),
  (min_spend) => {
    if (min_spend >=20000) {return "$20,000+"}
    else if (min_spend >= 19000) {return "$19000-19,999"}
    else if (min_spend >= 18000) {return "$18,000-18,999"}
    else if (min_spend >= 17000) {return "$17,000-17,999"}
    else if (min_spend >= 16000) {return "$16,000-16,999"}
    else if (min_spend >= 15000) {return "$15,000-15,999"}
    else if (min_spend >= 14000) {return "$14,000-14,999"}
    else if (min_spend >= 13000) {return "$13,000-13,999"}
    else if (min_spend >= 12000) {return "$12000-12,999"}
    else if (min_spend >= 11000) {return "$11,000-11,999"}
    else if (min_spend >= 10000) {return "$10,000-10,999"}
    else if (min_spend >= 9000) {return "$9000-9,999"}
    else if (min_spend >= 8000) {return "$8,000-8,999"}
    else if (min_spend >= 7000) {return "$7,000-7,999"}
    else if (min_spend >= 6000) {return "$6,000-6,999"}
    else if (min_spend >= 5000) {return "$5,000-5,999"}
    else if (min_spend >= 4000) {return "$4,000-4,999"}
    else if (min_spend >= 3000) {return "$3,000-3,999"}
    else if (min_spend >= 2000) {return "$2000-2,999"}
    else if (min_spend >= 1000) {return "$1,000-1,999"}
    else if (min_spend >= 1) {return "$1-999"}
    else {return "free.99"}
  }
)
```
```js
moneyRangesYears
```

## Reflection

Use the following prompt to guide your reflection about your data work:
"What 2-3 insights and 2-3 questions did you glean from your initial work
with the dataset?"

Use the PR-TEMPLATE prompts to reflect on the midterm experience.