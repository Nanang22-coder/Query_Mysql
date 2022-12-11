
const express = require("express")
const app = express()
const conn = require("./conn")

app.get("/",(req, res) => {
  const sql = "SELECT * FROM mahasiswa"
  conn.query(sql, (err, result) => { 
    console.log(result)
  })
    
  res.send('conneting berhasil')
 })
app.listen(4002, () => console.log('aplikasi berjalan di port 4002'))