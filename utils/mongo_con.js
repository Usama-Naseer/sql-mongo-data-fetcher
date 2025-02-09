const { MongoClient } = require("mongodb");

var url = "URL";
const client = new MongoClient(url);
const database = client.db('fyp');
module.exports = database;
module.exports = client;



