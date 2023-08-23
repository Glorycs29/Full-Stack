const fs = require('fs');

function readFromFile(err,data){
    console.log(data);
}

fs.readFile("1-read.txt",'utf8', readFromFile); // w/o promise
