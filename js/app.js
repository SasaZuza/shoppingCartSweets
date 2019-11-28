// Show Cart function - immediately evoked functions
(function() {
  // Selecting elements of cart by id
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  // Adding event listener for 'cartInfo'
  cartInfo.addEventListener("click", function() {
    // By clicking on this button this is how we show items added to the chart
    cart.classList.toggle("show-cart");
  });
})();

// Add items to the cart function - immediately evoked functions
(function() {
  // Selecting elements
  const cartBtn = document.querySelectorAll(".store-item-icon");

  // Looping through all items and adding chart icon
  cartBtn.forEach(function(btn) {
    // By clicking on 'btn'
    btn.addEventListener("click", function(event) {
      // This is how we activate chart clicking only on store icon
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        // Adding full path of the product image in variable
        let fullPath = event.target.parentElement.previousElementSibling.src;
      }
    });
  });
})();
