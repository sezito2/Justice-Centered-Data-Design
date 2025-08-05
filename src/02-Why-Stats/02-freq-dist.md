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
// FileAttachment() code here
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
const ncAbsentees = FileAttachment("./../data/nc-voters/nc_absentee_mail_2024.csv").csv({typed: true})
```

### Uncounted NC 2024 Absentee Voter Count by Race-Gender

```js
const rollupByRaceAndStatus = (data) => {
  const dataWithOther = data.map(
    d => ({ ...d, status: statusSubset.includes(d.ballot_rtn_status) ? d.ballot_rtn_status : "OTHER"}));
  return d3.rollups(dataWithOther, v => d3.sum(v, d => d.count), d => d.race, d => d.status)
  .flatMap(([race, entries]) => {
    const total = d3.sum(entries, d => d[1]);
    return entries.map(([status, sum]) => ({race, status, sum, percentage: total ? sum / total : 0}));
  })
}
```

```javascript
// const raceStatusSummary = rollupByRaceAndStatus(ncAbsenteeAll)
// console.log(raceStatusSummary)
// let random = ncAbsentees.slice(Math.floor(Math.random() * ncAbsentees.length), Math.floor(Math.random() * ncAbsentees.length) + 1)[0]
```

```js
const votingAgg = d3.rollup(
  ncAbsentees,
  // v => d3.sum(v, d => d.count),
  v => v.length,
  d => d.race,
    d => d.ballot_request_party,
      d => d.ballot_rtn_status
)
```

```js
votingAgg
```

```js
console.log(typeof(votingAgg))
const votersTotals = d3.map(votingAgg,
  ([race, raceEntries]) => {
    console.log(race, "--SPOILED:", raceEntries.get("DEM").get("SPOILED-EV"))
  }
)
```

<!-- ```js
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
``` -->

<!-- ```js
const notAcceptedByRaceGender = []
for (let i=0; i<=notAcceptedByRaceGenderMapped.length-1; i++) {
  for (let ii=0; ii<=notAcceptedByRaceGenderMapped[i].length-1; ii++) {
    notAcceptedByRaceGender.push(notAcceptedByRaceGenderMapped[i][ii])
  }
}
// console.log(notAcceptedByRaceGender)
``` -->

<!-- <div>
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
</div> -->

## 2.2.x Reflection Questions

### 1. Question number one here?
