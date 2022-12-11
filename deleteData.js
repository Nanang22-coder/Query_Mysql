const conn = require("./conn")

const sql =`DELETE FROM customers WHERE id=1`;


conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted : " + result.affectedRows);
});