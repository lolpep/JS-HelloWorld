const express=require('express');
var app=express();


app.get('/', (req, res) => {
    res.send("안녕하세요");
});
app.listen(1024, () => {
    console.log ("서버가 http://localhost:1024/ 에서 돌아가고 있습니다.");
});
