import {csvFormat, csvParse} from "d3-dsv";
import {FileAttachment} from "observablehq:stdlib";



/**
 * Utility
 */
const convertToCSVString = (arr) => {
  const array = [Object.keys(arr[0])].concat(arr)

  return array.map(it => {
    return Object.values(it).toString()
  }).join('\n')
}

/**
 * EXPORTED FUNCTIONS
 */

/**
 * downloadCSV()
 * Goal: Converts array of objects to a string in CSV formatted structure
 * @param:
 *  1. data: Array of object arrays. Desired data to export as CSV file
 *  2. filePath: String. Desired path in your directory structure, e.g., "./../data/"
 *  3. fileName: String. Desired name for your CSV file, e.g., "ncVoters2024.csv"
 * @return:
 *  - Nothing. Enacts virtual anchor clicking action to download file on client-side.
 */
export const downloadCSV = (data) => {
  // 1. Convert the array of objects as a string
  // let csvDataString = convertToCSVString(data)

  // Write out csv formatted data.
  // process.stdout.write(csvFormat(data))

  // // 2. Encode with UTF-8 standard characters
  // let blob = new Blob(
  //   [csvDataString],
  //   { type: 'text/csv;charset=utf-8;' }
  // )

  // // 3. Create an anchor link to "click", then download file
  // // 3.1. Create virtual URL object
  // let url = URL.createObjectURL(blob)
  // // 3.2. Create virtual HTML anchor element <a>
  // let a = document.createElement('a')
  // // 3.3. Set the URL to the anchor's href attribute: <a href="inserts url value here">
  // a.href = url
  // // 3.4. Set the HTML5 download attribute to the desired full path and filename
  // a.setAttribute('download', filePath+fileName)
  // // 3.5. Virtually click the anchor link to download the file
  // a.click()
}
