
const nikepop = [
  {
    id: 1,
    Name: 'Nike Dunk Low',
    Type: "Women's Shoes",
    Price: 11999,
    Colours: 'White/Grey',
  },
  {
    id: 2,
    Name: 'Nike Air Force 1 LE',
    Type: "Older Kids' Shoes",
    Price: 9499,
    Colours: 'White',
  },
  {
    id: 3,
    Name: 'Nike Dunk Low',
    Type: "Women's Shoes",
    Price: 10999,
    Colours: 'White/Brown/Blue',
  },
  {
    id: 4,
    Name: "Nike Air Force 1 '07 Next Nature",
    Type: "Women's Shoes",
    Price: 13999,
    Colours: 'White',
  },
  {
    id: 5,
    Name: 'Nike Dunk Low',
    Type: "Men's Shoes",
    Price: 12999,
    Colours: 'White/Green',
  },
  {
    id: 6,
    Name: 'Nike Dunk Low Retro SE',
    Type: "Men's Shoes",
    Price: 10999,
    Colours: 'White/Grey',
  },
  {
    id: 7,
    Name: 'Nike Dunk Low',
    Type: "Women's Shoes",
    Price: 12999,
    Colours: 'White/Light Blue/Blue',
  },
  {
    id: 8,
    Name: 'Nike Mercurial Superfly 9 Academy',
    Type: "Multi-Ground High-Top Football Boot",
    Price: 9499,
    Colours: 'Yellow/Black/White',
  },
  {
    id: 9,
    Name: "Nike Air Force 1 '07",
    Type: "Men's Shoes",
    Price: 11999,
    Colours: 'Black',
  },
  {
    id: 10,
    Name: 'Nike Air Force 1',
    Type: "Older Kids' Shoes",
    Price: 9999,
    Colours: 'White/Black',
  }
]

let nikepopHTML = '';

nikepop.forEach((nikeItem) => {

  nikepopHTML += `
  
    <div class="NikeGlobal">
      <div style='display: grid;' class="child">
        <img class="nike-image" src="nike-images/nike${nikeItem.id}.png">
        <button class='add2cart-button' 
        data-product-id='${nikeItem.id}'
        data-product-Name='${nikeItem.Name}'
        data-product-type='${nikeItem.Type}'
        data-product-price='${nikeItem.Price}'
        data-product-colours='${nikeItem.Colours}'
        data-product-quantity='${nikeItem.Quantity}'
        data-product-size='${nikeItem.size}'
        >
        Add to Cart
        </button>
      </div>
        <p class="nike-description-name">${nikeItem.Name}</p>
        <p class="nike-description">${nikeItem.Type}
        </p>
        <p class="nike-description-price">€${nikeItem.Price / 100}</p>
    </div>
  `;
});

document.querySelector('.nike-scroll-images').innerHTML = nikepopHTML;

let result;

window.addEventListener('mousemove', () => {
  const storedResultJson = localStorage.getItem('result');

  if (storedResultJson) {
    result = JSON.parse(storedResultJson);
  } else {
    result = [];
  }
});

document.body.addEventListener('click', () => {
  // Refresh the stored result from localStorage
  const storedResultJson = localStorage.getItem('result');
  if (storedResultJson) {
      result = JSON.parse(storedResultJson);
  } else {
      result = [];
  }
  // Log the refreshed result
  console.log(result);
});

document.querySelectorAll('.add2cart-button').forEach((button) => {

  button.addEventListener('click', () => {
    location.reload();
    const productId = button.dataset.productId;

    let result = [];
    try {
      result = JSON.parse(localStorage.getItem("result"));
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }

    const existingItem = result.find((resultItem) => resultItem.Id === productId);

    if(existingItem) {
      existingItem.quantity++;
    }else {
      result.push({
        Id: button.dataset.productId,
        name: button.dataset.productName,
        type: button.dataset.productType,
        price: button.dataset.productPrice,
        colours: button.dataset.productColours,
        size: 38.5,
        quantity: 1
      });
    }

    localStorage.setItem("result", JSON.stringify(result));
    console.log(result);
  });
});


window.addEventListener('click', () => {
  result = [];
})




document.addEventListener("DOMContentLoaded", function () {
  const nikeScrollImages = document.querySelector(".nike-scroll-images");
  const nikeScrollLength = nikeScrollImages.scrollWidth - nikeScrollImages.clientWidth;
  const nikeLeftButton = document.querySelector(".nike-left");
  const nikeRightButton = document.querySelector(".nike-right");

  function nikeCheckScroll() {
    const nikeCurrentScroll = nikeScrollImages.scrollLeft;
    if (nikeCurrentScroll === 0) {
      nikeLeftButton.setAttribute("disabled", "true");
      nikeLeftButton.classList.add('nike-buttons-hide')
      nikeRightButton.removeAttribute("disabled");
      nikeRightButton.classList.remove('nike-buttons-hide')
    } else if (nikeScrollImages.scrollLeft + nikeScrollImages.clientWidth >= nikeScrollImages.scrollWidth - 10) {
      nikeRightButton.setAttribute("disabled", "true");
      nikeRightButton.classList.add('nike-buttons-hide')
      nikeLeftButton.removeAttribute("disabled");
      nikeLeftButton.classList.remove('nike-buttons-hide')
    } else {
      nikeLeftButton.removeAttribute("disabled");
      nikeLeftButton.classList.remove('nike-buttons-hide')
      nikeRightButton.removeAttribute("disabled");
      nikeRightButton.classList.remove('nike-buttons-hide')
    }
  }

  nikeScrollImages.addEventListener("scroll", nikeCheckScroll);
  window.addEventListener("resize", nikeCheckScroll);
  nikeCheckScroll();

  function nikeLeftScroll() {
    nikeScrollImages.scrollBy({
      left: -478,
      behavior: "smooth"
    });
  }

  function nikeRightScroll() {
    nikeScrollImages.scrollBy({
      left: 478,
      behavior: "smooth"
    });
    console.log(nikeScrollImages.scrollLeft);
  }

  nikeLeftButton.addEventListener("click", nikeLeftScroll);
  nikeRightButton.addEventListener("click", nikeRightScroll);
});

document.querySelectorAll('.add2cart-button').forEach((link) => {

  link.addEventListener('click', () => {
    link.innerHTML = "Item Added";

    setTimeout(function() {
      link.classList.add('add2cart-button-added');
      
        
      }, 500);
      
      
  
      // After 3 seconds, revert the button text back to "Hello"
      setTimeout(function() {
        link.classList.remove('add2cart-button-added');
          link.innerHTML = 'Add to Cart';
          
        },  1200);
      
  
  });

});

  function calculateTotalQuantity(objArray) {
    let quantity = 0;
    for (let i = 0; i < objArray.length; i++) {
      quantity += Number(objArray[i].quantity);
    }
    return quantity;
  };

window.addEventListener('DOMContentLoaded', () => {
  const storedResultJson = localStorage.getItem('result');
  let result = [];
  if (storedResultJson) {
    result = JSON.parse(storedResultJson);
  }
  const totalQuantity = calculateTotalQuantity(result);
  document.querySelector('.bag-quantity').textContent = totalQuantity;
});