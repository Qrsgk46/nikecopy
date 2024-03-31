let resultJson = localStorage.getItem('result');
let result = JSON.parse(resultJson);

const nikeCartpop = [
  {
    id: 1,
    Name: 'Nike Dunk Low',
    Type: "Women's Shoes",
    Price: 11999
  },
  {
    id: 2,
    Name: 'Nike Air Force 1 LE',
    Type: "Older Kids' Shoes",
    Price: 9499
  },
  {
    id: 3,
    Name: 'Nike Dunk Low',
    Type: "Women's Shoes",
    Price: 11999
  },
  {
    id: 4,
    Name: "Nike Air Force 1 '07 Next Nature",
    Type: "Women's Shoes",
    Price: 11999
  },
  {
    id: 5,
    Name: 'Nike Dunk Low',
    Type: "Men's Shoes",
    Price: 12999,
  },
  {
    id: 6,
    Name: 'Nike Dunk Low Retro SE',
    Type: "Men's Shoes",
    Price: 12999
  },
  {
    id: 7,
    Name: 'Nike Dunk Low',
    Type: "Women's Shoes",
    Price: 11999
  },
  {
    id: 8,
    Name: 'Nike Mercurial Superfly 9 Academy',
    Type: "Multi-Ground High-Top Football Boot",
    Price: 9499
  },
  {
    id: 9,
    Name: "Nike Air Force 1 '07",
    Type: "Men's Shoes",
    Price: 11999
  },
  {
    id: 10,
    Name: 'Nike Air Force 1',
    Type: "Older Kids' Shoes",
    Price: 9999
  }
]

let nikeCartpopHTML = '';

nikeCartpop.forEach((nikeCartItem) => {

  nikeCartpopHTML += `
  
  <div>
      <div class="cart-nike" style='display:grid;'>
      <img class="cart-nike-image" src="nike-images/nike${nikeCartItem.id}.png">
      <button class='cartadd2cart-button'
      data-product-idd='${nikeCartItem.id}'
      data-product-Namee='${nikeCartItem.Name}'
      data-product-typee='${nikeCartItem.Type}'
      data-product-pricee='${nikeCartItem.Price}'
      data-product-colourss='${nikeCartItem.Colours}'
      data-product-quantityy='${nikeCartItem.Quantity}'
      data-product-sizee='${nikeCartItem.size}'
      >
      Add to Cart
      </button>
      </div>
      <a class="cart-nike-text-one">${nikeCartItem.Name}</a><br>
      <p class="cart-nike-text-two">${nikeCartItem.Type}</p>
      <p class="cart-nike-text-three">€${nikeCartItem.Price / 100}</p>
  </div>

  `;
});

document.querySelector('.nikeCartscroll-images').innerHTML = nikeCartpopHTML;

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cartadd2cart-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productIdd = button.dataset.productIdd

      let result = [];
      try {
        result = JSON.parse(localStorage.getItem('result'));
      } catch (error) {
        console.error('Error passing localStorage data:', error);
      }

      const existingItem = result.find((resultItem) =>  resultItem.Id === productIdd);

      if(existingItem) {
        existingItem.quantity++;
      }else {
        result.push({
        Id: button.dataset.productIdd,
        name: button.dataset.productNamee,
        type: button.dataset.productTypee,
        price: button.dataset.productPricee,
        colours: button.dataset.productColourss,
        size: 38.5,
        quantity: 1
        })
      }
      localStorage.setItem('result', JSON.stringify(result));
      location.reload();
    });
  });
});

let resultHTML = '';

result.forEach((resultItem) => {

  resultHTML += `
  
  <div style="display: flex;">
  
          <div style="padding-right: 16px;">
            <img style="height: 164px; width: 164px;" src="nike-images/nike${resultItem.Id}.png">
          </div>
    
          <div style="display: grid;">
  
          <a style="font-weight: 500; line-height: 1.6;">${resultItem.name}<br> 
          <p style="color: #707070; font-size: 16px;
          font-weight: 400; margin: 0; padding: 0; margin-bottom: -15px; ">
            ${resultItem.type}<br> ${resultItem.colours}</p>
          </a>
  
      <div>
  
        <label style="color: #707070; font-weight: 400;" for="size">Size</label>
  
        <select class="size" name="sizes" id='sizeSelector'>
          <option value="38.5">38.5</option>
          <option value="40">40</option>
          <option value="40.5">40.5</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="42.5">42.5</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="44.5">44.5</option>
          <option value="45">45</option>
          <option value="45.5">45.5</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="47.5">47.5</option>
          <option value="49.5">49.5</option>
        </select>
  
        <label style="color: #707070; font-weight: 400;" for="quantity">Quantity</label>
  
        <select class="quantity" name="sizes" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        
      </div>
            
          <div>
            <button class="trash-button"
            data-product-id='${resultItem.Id}'>
              <img style="height: 24px;" src="images/delete.png">
            </button>
              
            </div>
            
          </div>
  
          <div style="position: absolute; right: 0; font-size: 16px; font-weight: 500;">
            <p>€${resultItem.price / 100}</p>
          </div>
  
        </div>
  
        <p style="padding-top: 12px; font-weight: 500;">Free Pick-Up</p>

  `;
});

window.addEventListener('DOMContentLoaded', () => {

  const storedResultJson = localStorage.getItem('result');
  if (storedResultJson) {
    result = JSON.parse(storedResultJson);
  } else {
    result = []; // Initialize with an empty array
  }

  const selectSizes = document.querySelectorAll('.size');

  selectSizes.forEach((selectSize, index) => {
    // Ensure result[index] exists and has a size property
    if (result[index] && result[index].hasOwnProperty('size')) {
      result[index].size = result[index].size || 38.5; // Set initial value or default
    } else {
      console.error("Error: result object missing size property at index", index);
    }

    selectSize.addEventListener('change', () => {
      if (result[index]) { // Check if the item exists in result
        result[index].size = selectSize.value;
        location.reload();
      }
      
      
      localStorage.setItem('result', JSON.stringify(result));
      updatedResultHTML()
    });
  });

  const selectQuantities = document.querySelectorAll('.quantity');

  selectQuantities.forEach((selectQuantity, index) => {
    // Ensure result[index] exists and has a quantity property
    if (result[index] && result[index].hasOwnProperty('quantity')) {
      result[index].quantity = result[index].quantity || 1; // Set initial value or default
    } else {
      console.error("Error: result object missing quantity property at index", index);
    }

    selectQuantity.addEventListener('change', () => {
      if (result[index]) { // Check if the item exists in result
        result[index].quantity = selectQuantity.value;
        location.reload();
      }
      
      
      localStorage.setItem('result', JSON.stringify(result));
      updatedResultHTML()
    });
  });
});

window.addEventListener('DOMContentLoaded', updatedResultHTML())


function updatedResultHTML() {
  resultHTML = ''

  result.forEach((resultItem) => {

    resultHTML += `
    
    <div style="display: flex;">
    
            <div style="padding-right: 16px;">
              <img style="height: 164px; width: 164px;" src="nike-images/nike${resultItem.Id}.png">
            </div>
      
            <div style="display: grid;">
    
            <a style="font-weight: 500; line-height: 1.6;">${resultItem.name}<br> 
            <p style="color: #707070; font-size: 16px;
            font-weight: 400; margin: 0; padding: 0; margin-bottom: -15px; ">
              ${resultItem.type}<br> ${resultItem.colours}</p>
            </a>
    
        <div>
    
          <label style="color: #707070; font-weight: 400;" for="size">Size</label>
    
          <select class="size" name="sizes" id='sizeSelector'>
            <option value='${resultItem.size}'>${resultItem.size}</option>
            <option value="38.5">38.5</option>
            <option value="40">40</option>
            <option value="40.5">40.5</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="42.5">42.5</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="44.5">44.5</option>
            <option value="45">45</option>
            <option value="45.5">45.5</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="47.5">47.5</option>
            <option value="49.5">49.5</option>
          </select>
    
          <label style="color: #707070; font-weight: 400;" for="quantity">Quantity</label>
    
          <select class="quantity" name="sizes" >
          <option value='${resultItem.quantity}'>${resultItem.quantity}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          
        </div>
              
            <div>
              <button class="trash-button"
              data-product-id='${resultItem.Id}'>
                <img style="height: 24px;" src="images/delete.png">
              </button>
                
              </div>
              
            </div>
    
            <div style="position: absolute; right: 0; font-size: 16px; font-weight: 500;">
              <p>€${resultItem.price / 100}</p>
            </div>
    
          </div>
    
          <p style="padding-top: 12px; font-weight: 500;">Free Pick-Up</p>
  
    `;  
  });
  localStorage.setItem('result', JSON.stringify(result));
};

document.querySelector('.cart-item-div').innerHTML = resultHTML;

document.querySelectorAll('.trash-button').forEach((button) => {
button.addEventListener('click', () => {
  const productId = button.dataset.productId;
  removeFromCart(productId);
  location.reload();
  console.log(result);
});
});

function removeFromCart(productId) {
  const newResult = result.filter(resultItem => resultItem.Id !== productId);
  result = newResult;

  // Update localStorage with the modified result
  localStorage.setItem('result', JSON.stringify(result));

  window.updatedResult = result;
};

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

function calculateTotalValue(objArray) {
  let total = 0;
  for (let i = 0; i < objArray.length; i++) {
      total += Number(objArray[i].price) * Number(objArray[i].quantity);
  }
  return total / 100;
}

const totalValue = calculateTotalValue(result);
console.log(totalValue);


document.getElementById('subtotal').textContent = `€${totalValue}`
document.getElementById('total').textContent = `€${totalValue}`

document.addEventListener("DOMContentLoaded", function () {
  const nikeCartscrollImages = document.querySelector(".nikeCartscroll-images");
  const nikeCartscrollLength = nikeCartscrollImages.scrollWidth - nikeCartscrollImages.clientWidth;
  const nikeCartleftButton = document.querySelector(".nikeCartleft");
  const nikeCartrightButton = document.querySelector(".nikeCartright");

  function nikeCartcheckScroll() {
    const nikeCartcurrentScroll = nikeCartscrollImages.scrollLeft;
    if (nikeCartcurrentScroll === 0) {
      nikeCartleftButton.setAttribute("disabled", "true");
      nikeCartrightButton.removeAttribute("disabled");
    } else if (nikeCartcurrentScroll === nikeCartscrollLength) {
      nikeCartrightButton.setAttribute("disabled", "true");
      nikeCartleftButton.removeAttribute("disabled");
    } else {
      nikeCartleftButton.removeAttribute("disabled");
      nikeCartrightButton.removeAttribute("disabled");
    }
  }

  nikeCartscrollImages.addEventListener("scroll", nikeCartcheckScroll);
  window.addEventListener("resize", nikeCartcheckScroll);
  nikeCartcheckScroll();

  function nikeCartleftScroll() {
    nikeCartscrollImages.scrollBy({
      left: -478,
      behavior: "smooth"
    });
  }

  function nikeCartrightScroll() {
    nikeCartscrollImages.scrollBy({
      left: 478,
      behavior: "smooth"
    });
  }

  nikeCartleftButton.addEventListener("click", nikeCartleftScroll);
  nikeCartrightButton.addEventListener("click", nikeCartrightScroll);
});

function calculateTotalQuantity(objArray) {
  let quantity = 0;
  for (let i = 0; i < objArray.length; i++) {
    quantity += Number(objArray[i].quantity);
  }
  return quantity;
}

const totalQuantity = calculateTotalQuantity(result);


document.querySelector('.bag-quantity').textContent = totalQuantity;