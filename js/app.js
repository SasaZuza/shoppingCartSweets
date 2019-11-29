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
        // Getting the image index when clicking on it
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);

        // Creating object for adding data that is selected to cart
        const item = {};

        // Adding properties - in this case images to cart as template string
        item.img = `img-cart${partPath}`;

        // Adding items name to the cart
        let name =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[0].textContent;
        // Adding this variable as property for 'item object'
        item.name = name;

        // Adding items price to the cart
        let price =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[1].textContent;
        // Adding this variable as property for 'item object'
        item.price = price;

        console.log(item);
      }
    });
  });
})();
