const products = [
    { name: "• CREMA AMERICANA", description: "Crema de leche y leche.", type: "Cremas" },
    { name: "• MASCARPONE CON FRUTOS DEL BOSQUE", description: "Leche y queso crema mascarpone veteado con salsa de frutos del bosque.", type: "Cremas" },
    { name: "• TRAMONTANA", description: "Crema tipo americana con dulce de leche natural y mini-galletitas cubiertas en chocolate.", type: "Cremas" },
    { name: "• MENTA GRANIZADA", description: "Crema, leche y menta, con fino granizado de chocolate.", type: "Cremas" },
    { name: "• COOKIES & DULCE DE LECHE", description: "Crema tipo americana con dulce de leche natural y galletitas.", type: "Cremas" },
    { name: "• GRANIZADO DE CHOCOLATE", description: "Crema, leche y suave sabor a licor, con fino granizado de chocolate.", type: "Cremas" },
    { name: "• NUCREM", description: "Crema a base de maní con Nucrem.", type: "Cremas" },
    { name: "• VERAMENTE NERO", description: "Chocolate amargo realizado con un chocolate belga 96% de cacao.", type: "Chocolates" },
    { name: "• CHOCOLATE", description: "Realizado con finas coberturas de chocolate.", type: "Chocolates" },
    { name: "• CHOCOLATE ITALIANO", description: "Chocolate amargo, con pedacitos de chocolate.", type: "Chocolates" },
    { name: "• MOUSSE DE CHOCOLATE", description: "Chocolate suave y delicada textura.", type: "Chocolates" },
    { name: "• DULCE DE LECHE Y PUNTO", description: "Helado de dulce de leche con dulce de leche natural.", type: "Dulces de Leche" },
    { name: "• DULCE DE LECHE BOMBON", description: "Dulce de leche natural y bomboncitos de chocolate rellenos con dulce de leche.", type: "Dulces de Leche" },
    { name: "• DULCE DE LECHE", description: "Helado de dulce de leche.", type: "Dulces de Leche" },
    { name: "• DULCE CUCURUCCINO", description: "Suave dulce de leche combinado con queso crema, dulce de leche natural y trocitos de cookies de chocolate.", type: "Dulces de Leche" },
    { name: "• DULCE DE LECHE GRANIZADO", description: "Con granizado de chocolate.", type: "Dulces de Leche" },
    { name: "• BANANA SPLIT", description: "Crema, leche, fruta banana, fino granizado de chocolate y dulce de leche natural.", type: "Frutas a la Crema" },
    { name: "• BANANA A LA CREMA", description: "Crema, leche y fruta bananas.", type: "Frutas a la Crema" },
    { name: "• FRUTILLA A LA CREMA", description: "Crema, leche, y frutillas naturales.", type: "Frutas a la Crema" },
    { name: "• CEREZA A LA CREMA", description: "Crema, leche y cerezas al marrasquino.", type: "Frutas a la Crema" },
    { name: "• MOUSSE DE LIMÓN", description: "Crema a base de leche y jugo de limón natural.", type: "Frutas a la Crema" },
    { name: "", description: "", type: "Frutas a la Crema" },
    { name: "", description: "", type: "" },
    { name: "", description: "", type: "" },
    { name: "", description: "", type: "" },
    { name: "", description: "", type: "" },
    { name: "", description: "", type: "" },
    { name: "", description: "", type: "" },
    { name: "", description: "", type: "" },
    { name: "", description: "", type: "" },
    { name: "", description: "", type: "" },
  ];
  
  const productList = document.querySelector(".product-list");

 function displayProducts(products){

    productList.innerHTML = ''

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  

    // create HTML elements for product
    const productContainer = document.createElement("div");
    productContainer.className = 'container'
    const productName = document.createElement("h3");
    const productDescription = document.createElement("p");
  
    // set content of HTML elements
    productName.textContent = product.name;
    productDescription.textContent = product.description;
  
    // add HTML elements to product container
    productContainer.appendChild(productName);
    productContainer.appendChild(productDescription);
  
    // add product container to product list
    productList.appendChild(productContainer);
  }
}

// select all the filter buttons
const filterButtons = document.querySelectorAll("#filter-buttons");

// add event listener to each button
filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const type = button.dataset.type;
    console.log(type)
    const filteredProducts = products.filter(function(product) {
      return product.type === type;
    });
    if(type){
      displayProducts(filteredProducts);
}else{
    displayProducts(products)
}
  });
});
   
  displayProducts(products);
