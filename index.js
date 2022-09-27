const express = require('express');
const path = require("path");
const app = express();

//console.log(__dirname);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//     res.send('<h1>トップページ</h1>');
//     console.log("トップページ")
// });

app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer
    if(answer === "2" ){
        res.send("正解");
    } else {
        res.send("不正解");
    }
    res.send(answer);
});

app.get('/about', function (req, res) {
    res.send('aboutページ');
});
  
app.listen(3000, function(){
    console.log("I am running!");
});