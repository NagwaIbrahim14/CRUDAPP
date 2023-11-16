var productNameInput=document.getElementById('productNameInput');
var productPriceInput=document.getElementById('productPriceInput');
var productCategoryInput=document.getElementById('productCategoryInput');
var productDesInput=document.getElementById('productDesInput');
var productContainer=[];


if(localStorage.getItem('products') !=null){
    productContainer=JSON.parse(localStorage.getItem('products'));
    displayProducts();
}

function addProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDesInput.value
    }
    productContainer.push(product);
    localStorage.setItem('products',JSON.stringify(productContainer));

    //clearForm();

    displayProducts();
    console.log(productContainer);
}

function clearForm() {
    productNameInput.value="";
    price:productPriceInput.value="";
    productCategoryInput.value="";
    productDesInput.value=""
}
function displayProducts(){
    var cartoona=``;
    for(var i=0; i<productContainer.length;i++){
        cartoona+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button></td>
        <td><button class="btn btn-outline-warning">Update</button></td>
      </tr>
        `
    }
    document.getElementById("tableBody").innerHTML=cartoona;
}


// array of objects   ===JSON javascript object notation
// var productContainer = [
// {name: 'toshiba', price: '8000', category: 'mobile', desc: 'good'},
// {name: 'oppo', price: '8000', category: 'mobile', desc: 'good'},
// {name: 'samsung', price: '8000', category: 'mobile', desc: 'good'},
// {name: 'realme', price: '8000', category: 'mobile', desc: 'good'}]


//localStorage
// localStorage.setItem("username","nagwa");
// localStorage.setItem("email","nagwa@gmail.com");
// alert(localStorage.getItem("username"));
// localStorage.removeItem("username"); //بتمسح عنصر 
// localStorage.clear(); //بتمسح كله
// console.log(localStorage.length); 

//sessionStorage

// sessionStorage.setItem("academy","routr");

//delete function
function deleteProduct(itemIndex){
    productContainer.splice(itemIndex,1);
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProducts()
}

function searchProduct(term){
    var cartoona=``;
    for(var i=0;i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
            cartoona+=`<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].desc}</td>
            <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button></td>
            <td><button class="btn btn-outline-warning">Update</button></td>
          </tr>
            `
        }
        document.getElementById('tableBody').innerHTML =cartoona;
    }
}

// searchProduct('o');


console.log(productContainer);

//includes   true ? false
// var type="Samsung";
// var term='SAM';
// console.log(type.includes(term));
// console.log(type.toLowerCase());
// console.log(type.toUpperCase());
// console.log(type.toLowerCase().includes(term.toLowerCase()));
