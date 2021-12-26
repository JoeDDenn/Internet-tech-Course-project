const { json } = require('express');
const express = require('express');
const cart = require("./cart");
const app = express();


//routes
app.get("/api/cartitems", (req, res) => {
    return res.send(JSON.stringify(cart.cartitems));
});

app.post("/api/addItem/:id", (req, res) => {
    cart.addToCart(req.params.id);
    return res.send(JSON.stringify(cart.cartitems));
    console.log(list);
});

//listening
let port = 3000;
app.listen(3000);
console.log(`listening on port ${port}`)