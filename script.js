//Global Variables

//For List of products
var productList = [];
//For filter by category
var displayFilter = document.getElementById("displayFilter");
//For cart and checkout
var cartList = [];
var checkoutArr = [];

//For currency exchange
var currencyConversion = document.getElementById("currencySelector").value;
var canCoversion = 1.0;
var usConversion = 0.74;
var britConverion = 0.6;

//For details modal
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

//Product Constructor
function product(
  id,
  productName,
  price,
  qty,
  max,
  productCategory,
  shippingCost,
  productReviews,
  productDescription,
  coverImage,
  heroImage
) {
  this.id = id;
  this.productName = productName;
  this.price = function() {
    if (currencyConversion == "CAD") {
      return (price * canCoversion).toFixed(2);
    } else if (currencyConversion == "USD") {
      return (price * usConversion).toFixed(2);
    } else if (currencyConversion == "GBP") {
      return (price * britConverion).toFixed(2);
    }
  };
  this.qty = qty;
  this.max = max;
  this.productCategory = productCategory;
  this.shippingCost = function() {
    if (currencyConversion == "CAD") {
      return (shippingCost * canCoversion).toFixed(2);
    } else if (currencyConversion == "USD") {
      return (shippingCost * usConversion).toFixed(2);
    } else if (currencyConversion == "GBP") {
      return (shippingCost * britConverion).toFixed(2);
    }
  };
  this.productReviews = productReviews;
  this.productDescription = productDescription;
  this.coverImage = coverImage;
  this.heroImage = heroImage;
}
//Create product Objects
var product1 = new product(
  createRandomID(),
  "Resident Evil 4",
  59.99,
  createRandomQTY(),
  createRandomMax(),
  "Action",
  2.99,
  ['really fun!', 'tired of these games'],
  "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village.",
  "https://steamcdn-a.akamaihd.net/steam/apps/2050650/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/2050650/library_hero.jpg"
);

var product2 = new product(
  createRandomID(),
  "The Last Of Us Part 1",
  59.99,
  createRandomQTY(),
  createRandomMax(),
  "Action",
  2.99,
  ['way better than the show', 'to slow for my taste'],
  "Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.",
  "https://steamcdn-a.akamaihd.net/steam/apps/1888930/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/1888930/library_hero.jpg"
);
var product3 = new product(
  createRandomID(),
  "Rust",
  50.49,
  createRandomQTY(),
  createRandomMax(),
  "Survival",
  2.99,
  ['just terrible', 'play with friends!'],
  "The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.",
  "https://steamcdn-a.akamaihd.net/steam/apps/252490/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/252490/library_hero.jpg"
);
var product4 = new product(
  createRandomID(),
  "Dayz",
  59.99,
  createRandomQTY(),
  createRandomMax(),
  "Survival",
  2.99,
  ['Walking simulator', 'hours of fun'],
  "How long can you survive a post-apocalyptic world? A land overrun with an infected zombie population, where you compete with other survivors for limited resources. Will you team up with strangers and stay strong together? Or play as a lone wolf to avoid betrayal?",
  "https://steamcdn-a.akamaihd.net/steam/apps/221100/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/221100/library_hero.jpg"
);
var product5 = new product(
  createRandomID(),
  "Call Of Duty MW 2",
  89.99,
  createRandomQTY(),
  createRandomMax(),
  "Shooter",
  2.99,
  ['another money grab', 'love the classics'],
  "Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.",
  "https://steamcdn-a.akamaihd.net/steam/apps/1938090/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/1938090/library_hero.jpg"
);
var product6 = new product(
  createRandomID(),
  "Counter-Strike: Global Offensive",
  18.99,
  createRandomQTY(),
  createRandomMax(),
  "Shooter",
  2.99,
  ['so lagy', 'my favourite game'],
  "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes.",
  "https://steamcdn-a.akamaihd.net/steam/apps/730/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/730/library_hero.jpg"
);
var product7 = new product(
  createRandomID(),
  "Destiny 2",
  74.99,
  createRandomQTY(),
  createRandomMax(),
  "Shooter",
  2.99,
  ['pew pew', 'gives me a headache'],
  "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere",
  "https://steamcdn-a.akamaihd.net/steam/apps/1085660/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/1085660/library_hero.jpg"
);
var product8 = new product(
  createRandomID(),
  "Sons of the Forest",
  38.99,
  createRandomQTY(),
  createRandomMax(),
  "Survival",
  2.99,
  ['creepy!', 'Love this game'],
  "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.",
  "https://steamcdn-a.akamaihd.net/steam/apps/1326470/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/1326470/library_hero.jpg"
);
var product9 = new product(
  createRandomID(),
  "Grand Theft Auto V",
  29.98,
  createRandomQTY(),
  createRandomMax(),
  "Action",
  2.99,
  ['not for kids', 'non stop fun'],
  "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond.",
  "https://steamcdn-a.akamaihd.net/steam/apps/271590/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/271590/library_hero.jpg"
);
var product10 = new product(
  createRandomID(),
  "Sid Meier's Civilization VI",
  79.99,
  createRandomQTY(),
  createRandomMax(),
  "Builder",
  2.99,
  ['same as the last one', 'very confusing game'],
  "Civilization VI is the newest installment in the award winning Civilization Franchise. Expand your empire, advance your culture and go head-to-head against history’s greatest leaders. Will your civilization stand the test of time?",
  "https://steamcdn-a.akamaihd.net/steam/apps/289070/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/289070/library_hero.jpg"
);
var product11 = new product(
  createRandomID(),
  "RimWorld",
  39.99,
  createRandomQTY(),
  createRandomMax(),
  "Builder",
  2.99,
  ['my computer wont run it', 'love this game'],
  "A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.",
  "https://steamcdn-a.akamaihd.net/steam/apps/294100/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/294100/library_hero.jpg"
);
var product12 = new product(
  createRandomID(),
  "Cities: Skylines",
  37.99,
  createRandomQTY(),
  createRandomMax(),
  "Builder",
  2.99,
  ['really cool features', 'graphics are terrible'],
  "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience.",
  "https://steamcdn-a.akamaihd.net/steam/apps/255710/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/255710/library_hero.jpg"
);
var product13 = new product(
  createRandomID(),
  "Hogwarts Legacy",
  79.99,
  createRandomQTY(),
  createRandomMax(),
  "RPG",
  2.99,
  ['over hyped', 'lots of fun'],
  "Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
  "https://steamcdn-a.akamaihd.net/steam/apps/990080/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/990080/library_hero.jpg"
);
var product14 = new product(
  createRandomID(),
  "ELDEN RING",
  79.99,
  createRandomQTY(),
  createRandomMax(),
  "RPG",
  2.99,
  ['kept me entertained', 'could not put it down'],
  "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
  "https://steamcdn-a.akamaihd.net/steam/apps/1245620/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/1245620/library_hero.jpg"
);
var product15 = new product(
  createRandomID(),
  "DARK SOULS™: REMASTERED",
  53.49,
  createRandomQTY(),
  createRandomMax(),
  "RPG",
  2.99,
  ['it was okay', 'Great game'],
  "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps.",
  "https://steamcdn-a.akamaihd.net/steam/apps/570940/library_600x900_2x.jpg",
  "https://steamcdn-a.akamaihd.net/steam/apps/570940/library_hero.jpg"
);

//Helper Functions

//To create random Id Number
function createRandomID() {
  return (
    Math.floor(Math.random() * 100) *
    Math.floor(Math.random() * 100) *
    Math.floor(Math.random() * 100)
  );
}
//To create random quantities
function createRandomQTY() {
  return Math.floor(Math.random() * 100) + 1;
}
//To create random max values
function createRandomMax() {
  return Math.floor(Math.random() * 10) + 1;
}
//To open details modal
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
//To close details modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
//To change currency image
function convertCurrency() {
  currencyConversion = document.getElementById("currencySelector").value;
  flagImage = document.getElementsByClassName("currencyFlag");

  if (currencyConversion == "CAD") {
    document.getElementById("currencyFlag").src = "./Images/canadian.png";
  } else if (currencyConversion == "USD") {
    document.getElementById("currencyFlag").src = "./Images/american.png";
  } else if (currencyConversion == "GBP") {
    document.getElementById("currencyFlag").src = "./Images/british.png";
  }

  displayOnLoad();
}
//To create reviews
function reviewCreation(event) {
  var NUM = event.currentTarget.dataset.productIndex;

  var enterReview = prompt("What did you think of this game?");

  productList[NUM].productReviews.push(enterReview);
}
//To add item to cart
function addItem(event) {
  var NUM = event.currentTarget.dataset.cartIndex;
  var addAmount = document.getElementById("input" + NUM).value;
  if (addAmount <= productList[NUM].qty) {
    if (addAmount <= productList[NUM].max) {
      for (i = 0; i < addAmount; i++) {
        cartList.push(productList[NUM]);
        productList[NUM].max--;
        productList[NUM].qty--;
      }
      displayOnLoad();
    } else {
      alert(
        "Sorry, Only " + productList[NUM].max + " copies allowed per customer"
      );
    }
  } else {
    alert(
      "Sorry, we only have " +
        productList[NUM].qty +
        " copies in stock. Please try again."
    );
  }
}
//To remove item from cart
function removeItem(event) {
  var NUM = event.currentTarget.dataset.cartIndex;

  for (i = 0; i < productList.length; i++) {
    if (cartList[NUM].id === productList[i].id) {
      productList[i].max++;
      productList[i].qty++;
    }
  }
  cartList.splice(NUM, 1);
  displayOnLoad();
}
//To view product details
function viewDetails(event) {
  var NUM = event.currentTarget.dataset.cartIndex;
  modal.innerHTML = "";

  overlay.addEventListener("click", closeModal);

  var modalId = document.createElement("h2");
  modalId.innerHTML = "Game ID: " + cartList[NUM].id;
  var modalName = document.createElement("h2");
  modalName.innerHTML = "Title: " + cartList[NUM].productName;
  var modalPrice = document.createElement("h2");
  modalPrice.innerHTML = " Price: $" + cartList[NUM].price();
  var modalCategory = document.createElement("h2");
  modalPrice.innerHTML = "Game Tags: " + cartList[NUM].productCategory;
  var modalShipping = document.createElement("h2");
  modalShipping.innerHTML =
    "Cost of Shipping per Item: $" + cartList[NUM].shippingCost();

  if (cartList[NUM].productReviews.length >= 0) {
    var modalArray = document.createElement("article");
    for (i = 0; i < cartList[NUM].productReviews.length; i++) {
      var modalReview = document.createElement("h3");
      modalReview.innerHTML =
        "Reviewed by User : " + cartList[NUM].productReviews[i];
      modalArray.appendChild(modalReview);
    }
  }

  var modalImage = document.createElement("img");
  modalImage.src = cartList[NUM].coverImage;

  var modalClose = document.createElement("button");
  modalClose.innerHTML = "X";
  modalClose.addEventListener("click", closeModal);

  modal.appendChild(modalId);
  modal.appendChild(modalName);
  modal.appendChild(modalPrice);
  modal.appendChild(modalCategory);
  modal.appendChild(modalShipping);
  modal.appendChild(modalArray);

 

  modal.appendChild(modalArray);
  modal.appendChild(modalImage);
  modal.appendChild(modalClose);

  //     "Current Reviews: " +
  //     cartList[NUM].productReviews +
  //     "\n" +
  //     "Cost Of Shipping: $" +
  //
  // );
}
//Functions called on load and page updates
function displayOnLoad() {
  //Call funcitons to display
  displayCategory();
  displayDate();
  displayHero();
  displayStore(productList);
  displayCart();
  displayCost();
}
//To filter games by category
function displayCategory() {
  //Populate Store

  productList = [
    product1,
    product3,
    product5,
    product7,
    product9,
    product11,
    product13,
    product15,
    product2,
    product4,
    product14,
    product12,
    product6,
    product10,
    product8
  ];
  //Display based on category
  if (displayFilter.value != "All") {
    function isMatch(product) {
      if (displayFilter.value == product.productCategory) {
        return true;
      }
    }
    productList = productList.filter(isMatch);
  }
}
//To display date on nav bar
function displayDate() {
  //Display Date and Time
  var showDate = document.getElementById("dateArea");
  
  showDate.innerHTML = new Date();
}
//To display random game in hero section
function displayHero() {
  //Create random game display for hero section

  var heroDisplay = document.getElementById("hero-section");
  heroDisplay.innerHTML = "";

  //Create Elements for hero section
  var heroName = document.createElement("h2");
  var heroPrice = document.createElement("h3");
  var heroType = document.createElement("h4");
  var heroDesc = document.createElement("p");
  var heroBackground = document.createElement("img");

  var getIndex = Math.floor(Math.random() * productList.length);
  var item = productList[getIndex];

  heroName.innerHTML = item.productName;
  heroPrice.innerHTML = "Now only $" + item.price();
  heroType.innerHTML = "Category: " + item.productCategory;
  heroDesc.innerHTML = item.productDescription;
  heroBackground.src = item.heroImage;

  heroDisplay.appendChild(heroName);
  heroDisplay.appendChild(heroDesc);
  heroDisplay.appendChild(heroPrice);
  heroDisplay.appendChild(heroType);
  heroDisplay.appendChild(heroBackground);
}
//To display all products in store
function displayStore(product) {
  var storeDisplay = document.getElementById("game-list");
  storeDisplay.innerHTML = "";

  for (index = 0; index < productList.length; index++) {
    product = productList[index];

    //Create Elements for Store Display
    var productCard = document.createElement("article");

    var productInfo = document.createElement("div");
    productInfo.classList = "product-info";
    var addProduct = document.createElement("div");
    addProduct.classList = "add-cart";
    var ImageSection = document.createElement("div");

    var productId = document.createElement("h5");
    var productName = document.createElement("h2");
    var productDesc = document.createElement("p");
    var productPrice = document.createElement("h4");
    var productQty = document.createElement("h5");
    var productMax = document.createElement("h5");
    var productImage = document.createElement("img");

    var createReview = document.createElement("button");
    createReview.id = "create-review";
    var addToCart = document.createElement("button");
    var addAmount = document.createElement("input");

    //Update card
    productImage.src = product.coverImage;
    productName.innerHTML = product.productName;
    productId.innerHTML = "Item ID # " + product.id;
    productDesc.innerHTML = product.productDescription;
    productPrice.innerHTML = "Available for $" + product.price();
    productQty.innerHTML = "Only " + product.qty + " Available";
    productMax.innerHTML = "Max of " + product.max + " Per Order";

    createReview.innerHTML = "Leave a Review";
    createReview.dataset.productIndex = index;
    createReview.addEventListener("click", reviewCreation, false);
    addToCart.innerHTML = "Add To Cart";
    addToCart.dataset.cartIndex = index;
    addToCart.addEventListener("click", addItem, false);
    addAmount.type = "number";
    addAmount.value = "0";
    addAmount.setAttribute("id", "input" + index);

    //Push elements to HTML
    productInfo.appendChild(productName);
    productInfo.appendChild(productId);
    productInfo.appendChild(productDesc);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productQty);
    productInfo.appendChild(productMax);

    addProduct.appendChild(createReview);
    addProduct.appendChild(addToCart);
    addProduct.appendChild(addAmount);

    ImageSection.appendChild(productImage);

    //Complete push to section
    productCard.appendChild(ImageSection);
    productCard.appendChild(productInfo);
    productCard.appendChild(addProduct);

    storeDisplay.appendChild(productCard);
  }
}
//To display all items in cart
function displayCart() {
  var cartDisplay = document.getElementById("user-cart");
  cartDisplay.innerHTML = "Cart Is Empty";
  var cartProductDisplay = document.createElement("ul");

  for (index = 0; index < cartList.length; index++) {
    cartProduct = cartList[index];

    //Create Elements for Cart
    var cartCard = document.createElement("li");
    cartCard.setAttribute("id", "cartItem" + index);
    var cartID = document.createElement("h3");
    var cartName = document.createElement("h2");
    var cartPrice = document.createElement("h2");

    var removeFromCart = document.createElement("button");
    var viewAllDetails = document.createElement("button");

    //Update Cart Cards
    cartID.innerHTML = "Game ID: " + cartProduct.id;
    cartName.innerHTML = "Game Title: " + cartProduct.productName;

    cartPrice.innerHTML = "Price: $" + cartProduct.price();

    removeFromCart.innerHTML = "Remove";
    removeFromCart.id = "remove-item";
    removeFromCart.dataset.cartIndex = index;
    removeFromCart.addEventListener("click", removeItem, false);

    viewAllDetails.innerHTML = "View Details";
    viewAllDetails.id = "view-details";
    viewAllDetails.dataset.cartIndex = index;
    viewAllDetails.addEventListener("click", viewDetails, false);
    viewAllDetails.addEventListener("click", openModal);

    //Push to HTML
    cartCard.appendChild(cartID);
    cartCard.appendChild(cartName);
    cartCard.appendChild(cartPrice);
    cartCard.appendChild(viewAllDetails);
    cartCard.appendChild(removeFromCart);

    cartDisplay.innerHTML = "";

    cartProductDisplay.appendChild(cartCard);
    cartDisplay.appendChild(cartProductDisplay);

    var carSub = document.createElement("h3");
  }
}
//To display all costs of items in cart
function displayCost() {
  var costDisplay = document.getElementById("cart-total");
  costDisplay.innerHTML = "";
  checkoutArr = [];

  for (index = 0; index < cartList.length; index++) {
    //Display each item prices
    var costCard = document.createElement("div");
    cartProduct = cartList[index];

    var subName = document.createElement("h2");
    var subPrice = document.createElement("h3");
    var subShipping = document.createElement("h3");
    var subTotal = document.createElement("h3");
    subTotal.id = "item-subtotal";

    subName.innerHTML = "Item: " + cartProduct.productName;
    subPrice.innerHTML = "Price: $" + cartProduct.price();
    subShipping.innerHTML = "Shipping: $" + cartProduct.shippingCost();

    var priceToNum = cartProduct.price();
    priceToNum = priceToNum * 1;

    var shipToNum = cartProduct.shippingCost();
    shipToNum = shipToNum * 1;
    subTotal.innerHTML = "Total: $" + (priceToNum + shipToNum).toFixed(2);

    var createSub = cartProduct.price();
    checkoutArr.push(createSub);

    costCard.appendChild(subName);
    costCard.appendChild(subPrice);
    costCard.appendChild(subShipping);
    costCard.appendChild(subTotal);

    costDisplay.appendChild(costCard);

    var checkoutComplete = true;
  }

  if (checkoutComplete == true) {
    //Display Total prices
    var totalCard = document.createElement("article");

    var totalPrice = document.createElement("h3");
    var totalShipping = document.createElement("h3");
    var totalSub = document.createElement("h3");

    var getShipping = (parseInt(cartList.length) *
      cartProduct.shippingCost()).toFixed(2);
    getShipping = getShipping * 1;

    var addArray = (checkoutArr = []) => {
      let sum = 0;
      for (let j = 0; j < checkoutArr.length; j++) {
        const el = checkoutArr[j];
        sum += +el;
      }
      return sum.toFixed(2);
    };

    var subValue = addArray(checkoutArr);
    subValue = subValue * 1;

    totalPrice.innerHTML = "Total Price: $" + subValue;
    totalShipping.innerHTML = "Estimated Shipping Cost: $" + getShipping;
    totalSub.innerHTML = "Subtotal: $" + (subValue + getShipping).toFixed(2);

    totalCard.appendChild(totalPrice);
    totalCard.appendChild(totalShipping);
    totalCard.appendChild(totalSub);

    costDisplay.appendChild(totalCard);

    //Display tax
    var displayTax = document.createElement("article");

    var taxValue = document.createElement("h3");

    taxValue.innerHTML =
      "Tax: $" + ((subValue + getShipping) * 0.13).toFixed(2);

    displayTax.appendChild(taxValue);
    costDisplay.appendChild(displayTax);

    //Display Final Price
    var displayTotal = document.createElement("article");

    var totalValue = document.createElement("h2");

    if (currencyConversion == "CAD") {
      totalValue.innerHTML =
        "Total Cost: $" +
        (subValue + getShipping + (subValue + getShipping) * 0.13).toFixed(2) +
        " CAD";
    } else if (currencyConversion == "USD") {
      totalValue.innerHTML =
        "Total Cost: $" +
        (subValue + getShipping + (subValue + getShipping) * 0.13).toFixed(2) +
        " USD";
    } else if (currencyConversion == "GBP") {
      totalValue.innerHTML =
        "Total Cost: $" +
        (subValue + getShipping + (subValue + getShipping) * 0.13).toFixed(2) +
        " GBP";
    }

    displayTotal.appendChild(totalValue);
    costDisplay.appendChild(displayTotal);
  }
}
