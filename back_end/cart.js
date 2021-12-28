const fs = require('fs');
const it = require('./products');

let cartitems = [];

function listCart() {
    return cartitems;
}

function addToCart(itemID) {
    if (it.verifyItem(itemID) === true) cartitems.push(it.itemList.find(x => x.id === itemID));
    else return;
}

function removeFromCart(itemID) {
    cartitems.pop(it.itemList.find(x => x.id === itemID));
}



module.exports.cartitems = cartitems;
module.exports.listCart = listCart;
module.exports.addToCart = addToCart;
module.exports.removeFromCart = removeFromCart;
