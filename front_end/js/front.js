function addToCart(id) {
    let url = "http://localhost:3000/api/additem/" + id;
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => alert("Item added ", result.name))
        .catch(error => console.log(error));
}

function unimplemented() {
    alert("not implemented yet :(");
}

function a5() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        //headers: headers
    };

    fetch("http://localhost:3000/api/cartitems", requestOptions)
        .then(response => response.json())
        .then(result => a6(result))
        .catch(error => console.log('error', error));

    function a6(res) {
        console.log(res);
        let tot = 0;
        let li = "";
        res.forEach(element => {
            li = li.concat("Product: ", element.name, ", Product Price: ", element.price, " LE  \|  ");
            tot += parseInt(element.price);
        });
        document.getElementById("cart").innerHTML = li;
        document.getElementById("tot").innerHTML = "Total price is " + tot + "LE";
    }
}