// ITERATION 1

function updateSubtotalFunction(product) {
  console.log("Calculating subtotal, yey!");
  //Use product.querry for everything, so that it selects the children of the product thats being passed in
  let price = product.querySelector(".price span");
  let quantity = parseFloat(product.querySelector(".quantity input").value);
  let subtotal = product.querySelector(".subtotal span");
  //use parse float to convert to a number
  let actualPrice = parseFloat(price.innerText);
  let subtotalValue  = actualPrice * quantity;
  subtotal.innerText = `${Math.round(subtotalValue  * 100) / 100}`;
  return subtotalValue;
}

function calculateAll() {
  // Select all the product rows in the table
  const products = document.querySelectorAll(".product");

  // Loop through each product row and update its subtotal
  let total = 0;

  products.forEach((product) => {
    const subtotal = updateSubtotalFunction(product);
    total += subtotal;
  })
  document.querySelector("#total-value span").innerText = Math.round(total * 100) / 100;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

const calculatePricesBtn = document.getElementById("calculate");
calculatePricesBtn.addEventListener("click", calculateAll);

