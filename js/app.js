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

        // Adding new variable for price without a dollar sign
        let finalPrice = price.slice(1).trim();
        // Adding this variable as property for 'item object'
        item.price = finalPrice;

        // Creating a div element to add some items to the cart
        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );

        // Creating template literal for the item added to the cart
        cartItem.innerHTML = `
          <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
          <div class="item-text">

            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
          </div>
          <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
          </a>
        </div>
        `;

        // Selecting a cart
        const cart = document.getElementById("cart");
        // Variable for total in the cart
        const total = document.querySelector(".cart-total-container");

        // This is method to insert data into cart that are selected
        cart.insertBefore(cartItem, total);
        alert("Item is added to the cart");

        // Using the function for showing total value for the items added to the cart
        showTotals();
      }
    });
  });

  // Creating the function for showing total value for the items added to the cart
  function showTotals() {
    // First we create an empty array to store data for totals
    const total = [];
    // Selecting price for the items
    const items = document.querySelectorAll(".cart-item-price");

    // Loop through the items and pushing items to that empty array
    items.forEach(function(item) {
      total.push(parseFloat(item.textContent));
    });

    // Showing total spent money in the cart
    // Using reduce function - first param is start value and second is looping item
    const totalMoney = total.reduce(function(total, item) {
      total += item;
      return total;
    }, 0);
    // Solving the many decimals problem
    const finalMoney = totalMoney.toFixed(2);

    // Adding total data into cart total and displaying it
    document.getElementById("cart-total").textContent = finalMoney;
    document.querySelector(".item-total").textContent = finalMoney;
    document.getElementById("item-count").textContent = total.length;
  }
})();
