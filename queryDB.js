import fs from "fs";
import { exit } from "process";

export default async function queryDB(externalFunction) {
    fs.readFile("dbFileCheck.js", function(err, data){
        if (err) {
            console.log("Something went wrong", err);
            exit(1)
        }
        console.log(data.toString());
    })
}