const express = require("express");
const app = express();

app.listen(9000)

app.get("/signup", (req,res) => {
    console.log("bayo is here");
    let userData = {
        username : "bayo",
        password : 1234
    }
    res.send(userData);
})