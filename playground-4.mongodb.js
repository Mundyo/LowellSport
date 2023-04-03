/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Lowell');

// Insert a few documents into the sales collection.
db.getCollection('Sport').insertMany([
  { 'type': 'Basketball', 'name': 'Game Time Sports & fitness',    'city': 'Lowell',  'address':'1703 middlesex street', 'zip-code':01851},
  { 'type': 'Basketball', 'name': 'Father MAGUIRES Park',          'city': 'Lowell',  'address': '108 mammoth road' ,'zip-code':01854},
  { 'type': 'Basketball', 'name': 'TJL training',                  'city': 'Lowell', 'address':  '109 industrial ave unit 6','zip-code':01852},
  { 'type': 'Basketball', 'name': 'HADLEY PARK',                   'city': 'Lowell', 'address':  '57-125 Baldwin street','zip-code':01851},
  { 'type': 'Basketball', 'name': 'MC PHERSON Park',               'city': 'Lowell', 'address':  '1040 bridge street','zip-code':01850},
  { 'type': 'Basketball', 'name': 'ROBERTO CLEMENTE',              'city': 'Lowell',  'address':  'washington park','zip-code':01851},
  { 'type': 'Basketball', 'name': 'South Common Basketball court', 'city': 'Lowell', 'address': '145 thorndike street' ,'zip-code':01852},
  { 'type': 'Basketball', 'name': 'CASTELLO Athletic Center',      'city': 'Lowell',  'address':  '275 riverside street','zip-code':01854}
]);

// Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

//  Here we run an aggregation and open a cursor to the results.
//  Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//    Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
