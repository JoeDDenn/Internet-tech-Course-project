const express = require('express');
const app = express();


//routes
app.get("/", (req, res) => {
    res.send("5rateez");
});

//listening
let port = 3000;
app.listen(3000);
console.log(`listening on port ${port}`)