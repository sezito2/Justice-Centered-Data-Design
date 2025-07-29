import {csvFormat, csvParse} from "d3-dsv";
import {utcParse} from "d3-time-format";
import {FileAttachment} from "observablehq:stdlib";

const zip = FileAttachment("https://s3.amazonaws.com/dl.ncsbe.gov/ENRS/2024_11_05/absentee_20241105.zip").zip();
const absentee = zip.then((zip) => zip.file("absentee_20241105.csv").csv({typed: true}));

// console.log(absentee)

// Parse dates!
const parseDate = utcParse("%m/%d/%Y");

// "county_desc","voter_reg_num","ncid","voter_last_name","voter_first_name","voter_middle_name","race","ethnicity","gender","age","voter_street_address","voter_city","voter_state","voter_zip","ballot_mail_street_address","ballot_mail_city","ballot_mail_state","ballot_mail_zip","other_mail_addr1","other_mail_addr2","other_city_state_zip","relative_request_name","relative_request_address","relative_request_city","relative_request_state","relative_request_zip","election_dt","voter_party_code","precinct_desc","cong_dist_desc","nc_house_desc","nc_senate_desc","ballot_req_delivery_type","ballot_req_type","ballot_request_party","ballot_req_dt","ballot_send_dt","ballot_rtn_dt","ballot_rtn_status","site_name","sdr","mail_veri_status"

// Load and parse launch-log and trim down to smaller size.
const ncAbsenteeVotes = csvParse("./nc_absentee_20241105.csv")

// const ncAbsenteeVotes = csvParse("./nc_absentee_20241105.csv").filter((d) => d.ballot_req_type === "MAIL")
// .reduce(
//   (accumulator, current) => {
//     if (!accumulator.find((row) => row.voter_reg_num === current.voter_reg_num)) {
//       if (row.ballot_rtn_status == "ACCEPTED") {
//         accumulator.push(row);
//       }
//       else if (current.ballot_rtn_status == "ACCEPTED") {
//         accumulator.push(current);
//       }
//       else {
//         accumulator.push(current);
//       }
//     }
//     return accumulator;
//   },
// []);

// Write out csv formatted data.
process.stdout.write(csvFormat(ncAbsenteeVotes));
