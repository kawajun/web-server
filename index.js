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
        res.redirect("/correct.html");
    } else {
        res.redirect("/wrong.html");
    }
    res.send(answer);
});

app.get('/about', function (req, res) {
    res.send('aboutページ');
});
  
const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log("I am running!");
});