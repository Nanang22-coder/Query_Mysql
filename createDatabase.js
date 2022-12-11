const conn = require("./conn")

const sql = "CREATE DATABASE oraa";
conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
    console.log(result)
});