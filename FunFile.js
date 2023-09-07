import fs from "fs";

if(!fs.existsSync("db.json")) {
    console.log("File does not exist");
}
