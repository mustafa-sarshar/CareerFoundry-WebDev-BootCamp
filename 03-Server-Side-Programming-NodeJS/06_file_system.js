const fs = require("fs");

fs.readFile("./assets/temp_file.txt", (err, data) => {
    if (err)
        throw err;
    console.log("Data:\n", data.toString());
})