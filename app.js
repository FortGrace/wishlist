const express = require(`express`);
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(bodyParser())

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Wishlist'
})

conn.connect(err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('db connected')
    }
})

app.listen(8000, () => { console.log('app started') })

let dbData;
conn.query('SELECT * FROM Wishlist', (err, result, field) => {
    dbData = result
})

app.get('/', (req, res) => {
    res.send(dbData)
})

app.post('/', (req, res) => {
    let data = [req.body.id, req.body.wish, req.body.isDone]
    conn.query('INSERT INTO`Wishlist`(`id`, `wish`, `isDone`) VALUES(?,?,?)', data, (err, results, field) => {
        !err ? res.json(results) : res.json(err)
    })
})
