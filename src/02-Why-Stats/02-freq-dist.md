# 2.2-Frequency Distributions &amp; Graphs

```js
import {utcParse,utcFormat} from "d3-time-format";
```

Enter summative statement.

## 2.2.1 Readings

1. Chapter 3 - "Frequency distributions and graphs" (pp. 25-44) in *Statistics for Social Justice*.

## 2.2.2 Frequency Distributions

Before I ask you to do some work with data different than the book, let's learn how to write some JS in OF.

### JS Learning Objectives

We're going to practice the following skills:

1. Practice variable assignments, loops, conditions and functions in JS.
2. Fetching, i.e., "attaching" data sets with `FileAttachment()`.

## 2.2.3 Absolute & Cumulative Frequency

Under the hood, we're going to load the data for OF to use with the following code:

```javascript
// Assign the CSV file data about Planned Parenthood services to the variable of ppServices
const ppServices = FileAttachment("data/pp-services-per-yr.csv").csv({typed: true})
```

<!-- D3 parsers -->
```js
const parseDate = utcParse("%d-%m-%Y")
const formatYear = utcFormat("%Y")
```

```js
const statusSubset = [
  'AFFIDAVIT DECLINED',
  'AFFIDAVIT INCOMPLETE',
  'ASSISTANT INFO INCOMPLETE',
  'CANCELLED',
  'DUPLICATE',
  'E-TRANSMISSION FAILURE',
  'ID NOT PROVIDED',
  'NO APPLICATION',
  'NO TIME FOR CURE - CONTACTED',
  'NOT PROPERLY NOTARIZED',
  'PHOTO ID NONCOMPLIANT',
  'REJECTED',
  'RETURNED AFTER DEADLINE',
  'RETURNED UNDELIVERABLE',
  'SIGNATURE DIFFERENT',
  'SPOILED',
  'SPOILED-EV',
  'WITNESS INFO INCOMPLETE',
  'WRONG VOTER',
] // others will be categorized "OTHER"
const raceSubset = ["BLACK or AFRICAN AMERICAN", "ASIAN", "WHITE"]
```

<!-- GET DATA -->
```js
// Assign the CSV file data about Planned Parenthood services to the variable of ppServices
const ncAbsenteeAll = FileAttachment("./../data/nc-voters/absentee_2024_aggregated.csv").csv({typed: true})
const ncAbsentees = FileAttachment("./../data/nc-voters/nc_absentee_mail_2024.csv").csv({typed: true})
const ppServices = FileAttachment("./../data/planned-parenthood/pp-services-per-yr.csv").csv({typed: true})
```

<!-- AFCF -->
```js
const addAFCF = (d, indexCol, colA, colB) => {
  /**
    * addAFCF()
    * Add Absolute and Cumulative Frequencies per column
    * NOTE: Assumes data are sorted in particular order
    * @params
      * d: List of objects. Data of choice.
      * index: String. Column for index.
      * colA: String. Column to isolate.
      * colB: String. Column to isolate.
  */
  const afcf = []
  let i = 0
  let colA_CF = "CF_"+colA
  let colB_CF = "CF_"+colB
  d.forEach((row) => {

    if (i == 0) {
      afcf.push({
        [indexCol]: row[indexCol],
        [colA]: row[colA],
        [colB]: row[colB],
        [colA_CF]: row[colA],
        [colB_CF]: row[colB],
      })
      // Done, so add 1 to the index for next row
      i = i+1
    }
    else if (i > 0) {
      afcf.push({
        [indexCol]: row[indexCol],
        [colA]: row[colA],
        [colB]: row[colB],
        [colA_CF]: afcf[i-1][colA_CF]+row[colA],
        [colB_CF]: afcf[i-1][colB_CF]+row[colB],
      })
      // Done, so add 1 to the index for next row
      i = i+1
    }

  })
  return afcf
}

const afCfData = addAFCF(
  ppServices,
  "Year",
  "Cancer Screening",
  "Abortion Services"
)
```

### Uncounted NC 2024 Absentee Voter Count by Race-Gender

```js
const rollupByRaceAndStatus = (data) => {
  const dataWithOther = data.map(d => ({ ...d, status: statusSubset.includes(d.ballot_rtn_status) ? d.ballot_rtn_status : "OTHER"}));
  return d3.rollups(dataWithOther, v => d3.sum(v, d => d.count), d => d.race, d => d.status)
  .flatMap(([race, entries]) => {
    const total = d3.sum(entries, d => d[1]);
    return entries.map(([status, sum]) => ({race, status, sum, percentage: total ? sum / total : 0}));
  })
}
```

```js
const raceStatusSummary = rollupByRaceAndStatus(ncAbsenteeAll)
// console.log(raceStatusSummary)
let random = ncAbsentees.slice(Math.floor(Math.random() * ncAbsentees.length), Math.floor(Math.random() * ncAbsentees.length) + 1)[0]
```

```js
console.log(random)
```

```js
const map3 = new d3.InternMap([
  [["foo", "bar"], 1],
  [["foo", "baz"], 2],
  [["goo", "bee"], 3]
], JSON.stringify)
// console.log(map3)

const votingAgg = d3.rollups(
  ncAbsenteeAll,
  v => d3.sum(v, d => d.count),
  d => d.race,
    d => d.ballot_request_party,
      d => d.ballot_rtn_status
)

/**
 * Use .map() to
*/
const notAcceptedByRaceGenderMapped = votingAgg.map(
  ([race, raceEntries]) => {
    const raceGenderMapped = raceEntries.map(
      ([gender, genderEntries]) => {
        // Get totals of grouped race+gender
        const total = d3.sum(genderEntries, ([status, value]) => {
          return value
        })

        // Get NOT ACCEPTED totals of grouped race+gender
        const notAccepted = d3.sum(genderEntries, ([status, value]) => {
          if (status != null) {
            // Don't count Accepted ballots
            if (status.startsWith("ACCEPTED") == true) {
              return 0
            }
            // Count REJECTED ballots
            else {
              return value
            }
          }
          // Don't count Accepted ballots
          else if (status == null) {
            return 0
          }
        })
        const raceGenderRow = {race, gender, total, notAccepted, percentage: total ? notAccepted / total : 0}
        return raceGenderRow
      })
    return raceGenderMapped
  })
```

```js
const notAcceptedByRaceGender = []
for (let i=0; i<=notAcceptedByRaceGenderMapped.length-1; i++) {
  for (let ii=0; ii<=notAcceptedByRaceGenderMapped[i].length-1; ii++) {
    notAcceptedByRaceGender.push(notAcceptedByRaceGenderMapped[i][ii])
  }
}
console.log(notAcceptedByRaceGender)
```

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

<div>
  ${ Inputs.table(
    notAcceptedByRaceGender,
    {
      width: {
        race: 90,
        gender: 20,
        total: 20,
        notAccepted: 20,
        percentage: 20,
      },
      sort: "percentage",
      reverse: true,
      rows: 25,
      header: {
        race: "Race",
        gender: "Gender",
        total: "Voter Total",
        notAccepted: "Total Not Accepted",
        percentage: "% of Total",
      },
      align: {
        race: "left",
        gender: "center",
        total: "left",
        notAccepted: "left",
        percentage: "center",
      },
    }
  )}
</div>

## 2.2.x Reflection Questions

### 1. Question number one here?
