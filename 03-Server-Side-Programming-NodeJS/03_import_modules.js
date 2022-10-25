// Built-in modules
const os = require("os");
console.log(os.type());

const fs = require("fs");
fs.readFile("./assets/temp_file.txt", "utf-8", (err, data) => {
    if (err) { throw err; }
    console.log("data: ", data);
});

// Local modules
const myUtils = require("./assets/utils");
let r = 10;
console.log(`Circle (r=${r}):\n\tArea: ${myUtils.circleArea(r)}\tCircumference: ${myUtils.circleCircumference(r)}`);

// Local modules | ES6 approach
// import { rectangleArea, rectangleCircumference } from "./assets/utils_es6";
// let width = 10;
// let height = 25;
// console.log(`Circle (${width}x${height}):\n\tArea: ${rectangleArea(width, height)}\tCircumference: ${rectangleCircumference(width, height)}`);

const buffer = require("buffer");
const bufs = buffer.Buffer.from([1, 2, 3, 4]);
for (const buf of bufs)
    console.log(buf);