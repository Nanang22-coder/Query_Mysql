const conn = require("./conn")

const sql = `CREATE TABLE customers (
        id int NOT NULL AUTO_INCREMENT,
        name VARCHAR(255), 
        address VARCHAR(255),
        PRIMARY KEY (id)
    )`
conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    console.log(result)
});