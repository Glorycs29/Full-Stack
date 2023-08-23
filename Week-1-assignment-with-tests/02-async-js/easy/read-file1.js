
// const fs = require('fs').promises;

// function callback(err,data){
//     console.log(data);
// }

// fs.readFile('a.txt', 'utf8').then(callback);


const fs = require('fs').promises;

function callback(data) {
    console.log(data);
}

fs.readFile('a.txt', 'utf8')
  .then(callback)
  .catch(err => {
    console.error('Error reading file:', err);
  });
