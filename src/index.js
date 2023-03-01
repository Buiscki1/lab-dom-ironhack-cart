// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = document.querySelector('input').value;
  const subtotal = product.querySelector(".subtotal span");
  let actualPrice = price.innerText;
  let updatedSubtotal = actualPrice*quantity; 
  subtotal.innerText = updatedSubtotal;
  return  updatedSubtotal;
}

function calculateAll() {
  // ITERATION 2
  const singleProduct = document.getElementsByClassName('.product')[0];
  updateSubtotal(singleProduct);
  // ITERATION 3
  //... your code goes here
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

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

