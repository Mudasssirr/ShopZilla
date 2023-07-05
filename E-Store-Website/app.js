let loader = document.getElementById("loader");
let content = document.getElementById("content")
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => {
        loader.style.display = "none";
        content.style.display = "block";
        let products = document.getElementById("products");
        for (var i = 0; i < json.length; i++) {
            products.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${json[i].image}" class="product-img card-img-top" alt="...">
                        <div class="card-body">
                         <h5 class="card-title">${json[i].title.slice(0,24)}...</h5>
                         <h6 class="card-text">${json[i].description.slice(0,34)}...</h6>
                         <p class="card-price">$${json[i].price}</p>
                         <p class="card-rating">Rating: ${json[i].rating.rate}/5</p>
                        </div>
                    </div>
                    `
        }
    })
    .catch(err => console.log(err))

function men(){
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    .then(res => res.json())
    .then(json => {
        loader.style.display = "none";
        content.style.display = "block";
        let products = document.getElementById("products");
        products.innerHTML = "";
        for (var i = 0; i < json.length; i++) {
            products.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${json[i].image}" class="product-img card-img-top" alt="...">
                        <div class="card-body">
                         <h5 class="card-title">${json[i].title.slice(0,24)}...</h5>
                         <h6 class="card-text">${json[i].description.slice(0,34)}...</h6>
                         <p class="card-price">$${json[i].price}</p>
                         <p class="card-rating">Rating: ${json[i].rating.rate}/5</p>
                        </div>
                    </div>
                    `
        }
    })
    .catch(err => console.log(err))
}

function women(){
    fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
    .then(res => res.json())
    .then(json => {
        loader.style.display = "none";
        content.style.display = "block";
        let products = document.getElementById("products");
        products.innerHTML = "";
        for (var i = 0; i < json.length; i++) {
            products.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${json[i].image}" class="product-img card-img-top" alt="...">
                        <div class="card-body">
                         <h5 class="card-title">${json[i].title.slice(0,24)}...</h5>
                         <h6 class="card-text">${json[i].description.slice(0,34)}...</h6>
                         <p class="card-price">$${json[i].price}</p>
                         <p class="card-rating">Rating: ${json[i].rating.rate}/5</p>
                        </div>
                    </div>
                    `
        }
    })
    .catch(err => console.log(err))
}

function jewellery(){
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then(res => res.json())
    .then(json => {
        loader.style.display = "none";
        content.style.display = "block";
        let products = document.getElementById("products");
        products.innerHTML = "";
        for (var i = 0; i < json.length; i++) {
            products.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${json[i].image}" class="product-img card-img-top" alt="...">
                        <div class="card-body">
                         <h5 class="card-title">${json[i].title.slice(0,24)}...</h5>
                         <h6 class="card-text">${json[i].description.slice(0,34)}...</h6>
                         <p class="card-price">$${json[i].price}</p>
                         <p class="card-rating">Rating: ${json[i].rating.rate}/5</p>
                        </div>
                    </div>
                    `
        }
    })
    .catch(err => console.log(err))
}

function electronics(){
    fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then(res => res.json())
    .then(json => {
        loader.style.display = "none";
        content.style.display = "block";
        let products = document.getElementById("products");
        products.innerHTML = "";
        for (var i = 0; i < json.length; i++) {
            products.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${json[i].image}" class="product-img card-img-top" alt="...">
                        <div class="card-body">
                         <h5 class="card-title">${json[i].title.slice(0,24)}...</h5>
                         <h6 class="card-text">${json[i].description.slice(0,34)}...</h6>
                         <p class="card-price">$${json[i].price}</p>
                         <p class="card-rating">Rating: ${json[i].rating.rate}/5</p>
                        </div>
                    </div>
                    `
        }
    })
    .catch(err => console.log(err))
}