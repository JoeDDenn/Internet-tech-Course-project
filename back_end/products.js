let itemList = [
    { "id": "1000", "price": "16000", "name": "dell xps", "image": "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805" },
    { "id": "1001", "price": "16000", "name": "think pad", "image": "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805" },
    { "id": "1002", "price": "16000", "name": "ideapad", "image": "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805" }
];

function listItems() {
    return itemList;
}

function verifyItem(id) {
    if (itemList.find(x => x.id === id) === undefined) {
        return false;
    }
    else { return true; }
}

module.exports.itemList = itemList;
module.exports.listItems = listItems;
module.exports.verifyItem = verifyItem;