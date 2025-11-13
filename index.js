const express = require('express');
const app = express();
const port = 3000;

var message = "Hello, World!"; // 故意使用 var 讓 linter 抓到問題

app.get('/', (req, res) => {
    // 故意留一個未使用的變數
    const user = req.query.user;
    res.send(message);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});