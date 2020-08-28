const read = require('./read');

const add = require('./add');

// let output = read.readQuery();
// console.log(output);


// add.addQuery(333, 'Shantanu', 'Betul');

// add.addQueryJSON({
//     sid: 678,
//     name: 'Aditya',
//     city: 'Ratlam'
// });


read.readQuery({
    city: 'Betul',
    name: 'Messi'
});