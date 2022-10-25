const url = require("url");
let addr = "http://localhost:8080/default.html?year=2017&month=february";
let q = url.parse(addr, true);

console.log(q.host); // returns "localhost:8080"
console.log(q.port); // returns the port number
console.log(q.href); // returns the hyperlink
console.log(q.pathname); // returns "/default.html"
console.log(q.search); // returns "?year=2017&month=february"

let qdata = q.query; // returns an object: { year: 2017, month: "february" }
console.log(qdata.month); // returns "february"
