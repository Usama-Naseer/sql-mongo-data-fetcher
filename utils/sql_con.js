const mysql = require("mysql2");

const db = mysql.createPool({
    "host":"YOUR-HOST",
     "port":"25060",
    'user':"doadmin",
    "database":"fyp",
    "password":"YOUR-PASSWORD",
})

module.exports = db.promise();


