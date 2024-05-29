var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescriptionInput = document.getElementById('productDescription');
var allProduct;
if (localStorage.getItem("all product") == null) {
    allProduct = [];
}
else {
    allProduct = JSON.parse(localStorage.getItem("all product"));
    displayProduct()
}

function addProduct() {
    var oneProduct = {
        pName: productNameInput.value,
        pPrice: productPriceInput.value,
        pCat: productCategoryInput.value,
        pDesc: productDescriptionInput.value
    }
    allProduct.push(oneProduct);

    localStorage.setItem("all product", JSON.stringify(allProduct));

    displayProduct()
    //clearInput()



}

function displayProduct() {
    box = ``;
    for (var i = 0; i < allProduct.length; i++) {
        box +=
            `<tr>
        <td>${i}</td>
        <td>${allProduct[i].pName}</td>
        <td>${allProduct[i].pPrice}</td>
        <td>${allProduct[i].pCat}</td>
        <td>${allProduct[i].pDesc}</td>
        <td><button onclick = "retriveProduct(${i})" class="btn btn-outline-warning">Update</button></td>
        <td><button onclick = "deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById('body').innerHTML = box;
}

function clearInput() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
}

function deleteProduct(i) {
    allProduct.splice(i, 1);
    localStorage.setItem("all product", JSON.stringify(allProduct));
    displayProduct();
}

function retriveProduct(i) {
    productNameInput.value = allProduct[i].pName
    productPriceInput.value = allProduct[i].pPrice
    productCategoryInput.value = allProduct[i].pCat
    productDescriptionInput.value = allProduct[i].pDesc
    document.getElementById("change").innerHTML = `<button onclick="updateProduct(${i})" class="btn btn-outline-warning mb-3">Update Product</button>`
}

function updateProduct(i) {
    allProduct[i].pName = productNameInput.value;
    allProduct[i].pPrice = productPriceInput.value;
    allProduct[i].pCat = productCategoryInput.value;
    allProduct[i].pDesc = productDescriptionInput.value;
    document.getElementById("change").innerHTML = `<button onclick="addProduct()" class="btn btn-outline-primary mb-3">Add Product</button>`
    localStorage.setItem("all product", JSON.stringify(allProduct));
    displayProduct();
    clearInput()
}

function searchProduct(search) {


    box = ``;
    for (var i = 0; i < allProduct.length; i++) {
        if (allProduct[i].pName.toLowerCase().includes(search.toLowerCase())) 
        {
            box += `<tr>
            <td>${i}</td>
            <td>${allProduct[i].pName}</td>
            <td>${allProduct[i].pPrice}</td>
            <td>${allProduct[i].pCat}</td>
            <td>${allProduct[i].pDesc}</td>
            <td><button onclick = "retriveProduct(${i})" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick = "deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
            </tr>`
        }
        document.getElementById('body').innerHTML = box;
    }
}