let itemList = [
    { "id": "1000", "price": "22000", "name": "Dell xps", "image": "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805" },
    { "id": "1001", "price": "12600", "name": "Lenovo think pad", "image": "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805" },
    { "id": "1002", "price": "16000", "name": "Lenovo idea pad", "image": "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805" },
    { "id": "2003", "price": "4000", "name": "Nokia 9", "image": "https://media.istockphoto.com/photos/man-hand-holding-iphone-11-picture-id1202957583" }
]


function verifyItem(id) {
    if (itemList.find(x => x.id === id) === undefined) {
        return false
    }
    else { return true }
}

module.exports.itemList = itemList
module.exports.verifyItem = verifyItem