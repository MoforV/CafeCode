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