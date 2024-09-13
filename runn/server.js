const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.40.33',
  post: 3306,
  user: 'root',
  password: 'asdasd',
  database: 'mo'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('link is success');
});

module.exports = connection;

// 实际服务
app.set('view engine', 'ejs');

app.get('/a', (req, res) => {
  const quer = "select AES_DECRYPT(coffce_name, '123') AS '芳名', AES_DECRYPT(coffce_price, '123') AS '价格', AES_DECRYPT(coffce_image, '123') AS '实拍' FROM coffce_inif;";
  connection.query(quer, (err, results) => {
    if (err) throw err;
    res.render('index', { results });
  });
});

app.listen(8000, () => {
  console.log('Server is running on http://127.0.0.1:8000');
});