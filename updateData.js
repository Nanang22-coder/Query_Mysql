const conn = require("./conn")

const sql = `UPDATE customers
           SET address='LEM Lantai 1'
           WHERE id=1`;

conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});