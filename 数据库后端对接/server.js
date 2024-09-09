// const express = require('express')
// const app = express()
// const db = require('./db');

// // 创建数据库连接 填入数据库信息
// const conn = mysql.createConnection({
//   host:'192.168.40.33',
//   port:3306,
//   user:'root',
//   password:'asdasd',
//   database:'mo'
// })
// // 测试连接
// conn.connect((err)=>{
// 	if(err){
// 		console.log('contenter link unsuccess');
// 		console.log(err);
// 		return;
// 	}else{
// 		console.log('contenter link success');
// 	}
// });
// // 开启服务器
// app.listen(3000,()=>{
//   console.log('服务器在3000端口开启。。。。。');
// })

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const query = 'SELECT * FROM coffce_inif'; // 替换为你的表名
  db.query(query, (err, results) => {
    if (err) throw err;
    res.render('index', { results });
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
