const nms = [
  {
    id: 1,
    textOne: 'Member Product',
    textTwo: "Your Exclusive Access",
    button: 'Shop',
    link: 'https://www.nike.com/at/en/membership/member-product'
  },
  {
    id: 2,
    textOne: 'Member Rewards',
    textTwo: "How We Say Thank You",
    button: 'Celebrate',
    link: 'https://www.nike.com/at/en/membership/member-rewards'
  },
  {
    id: 3,
    textOne: 'Sport & Wellness',
    textTwo: "Movement Where You're At",
    button: 'Move',
    link: 'https://www.nike.com/at/en/membership/sport-wellness-apps'
  },
  {
    id: 4,
    textOne: 'Nike By You',
    textTwo: "Your Customisation Service",
    button: 'Customise',
    link: 'https://www.nike.com/at/en/nike-by-you'
  },
  {
    id: 5,
    textOne: 'Nike Apps',
    textTwo: "Be At Your Best",
    button: 'Nike App',
    buttonTwo: 'SNKRS',
    link: 'https://www.nike.com/gb/nike-app?referrer=singular_click_id%3D1fe0ec06-2078-444d-9051-779b090b97c4',
    linkTwo: 'https://www.nike.com/at/en/launch?referrer=singular_click_id%3D22109206-8eaf-4ba3-a25e-dbc277c1e183'
  },
  {
    id: 6,
    textTwo: "More of Membership",
    button: 'Explore',
    link: 'https://www.nike.com/at/en/membership'
  }
];

let nmHTML = '';
let nmStyle = '';
const nmStyleElement = document.createElement('style');
let leftDistance = 60;

nms.forEach((nmItem) => {

  if(nmItem.id === 5){
    nmHTML += `
  
    <a class='nm-child5a' href='${nmItem.link}'>
  <div class="nm-child${nmItem.id}">
    <img class="nm-Image" src="nm-images/nm${nmItem.id}.png">
  </div>

  <div class="nm-child-baby${nmItem.id}">
    <p class="nm-child-baby-text-one">${nmItem.textOne}</p>
    <p class="nm-child-baby-text-two">${nmItem.textTwo}</p>
    <a href='${nmItem.link}'>
    <button class="nm-child-baby-button">
    ${nmItem.button}
    </button>
    </a>
    
    <a href='${nmItem.linkTwo}'>
    <button class="nm-child-baby-button">
    ${nmItem.button}
    </button>
    </a>
    
  </div>
  </a>

  `;
  } else if(nmItem.id === 6){
    nmHTML += `
  
    <a href='${nmItem.link}'>
    <div class="nm-child${nmItem.id}">
    <img class="nm-Image" src="nm-images/nm${nmItem.id}.png">
  </div>

  <div class="nm-child-baby${nmItem.id}">
    <p class="nm-child-baby-text-two">${nmItem.textTwo}</p>
    <button class="nm-child-baby-button">
    ${nmItem.button}
    </button>
  </div>
    </a>

  `;
  } else{
    nmHTML += `
  
    <a href='${nmItem.link}'>
  <div class="nm-child${nmItem.id}">
    <img class="nm-Image" src="nm-images/nm${nmItem.id}.png">
  </div>

  <div class="nm-child-baby${nmItem.id}">
    <p class="nm-child-baby-text-one">${nmItem.textOne}</p>
    <p class="nm-child-baby-text-two">${nmItem.textTwo}</p>
    <button class="nm-child-baby-button">
    ${nmItem.button}
    </button>
  </div>
  </a>

  `;
  }

  if(nmItem.id >= 7){
    nmStyle += `
  .nm-child${nmItem.id}{
  margin-right: 10px
  }
  .nm-child-baby${nmItem.id}{
    position: absolute;
    left: ${leftDistance + 20}px; 
    bottom: 84px;
  }
  `;
  } else{
    nmStyle += `
  .nm-child${nmItem.id}{
  margin-right: 10px
  }
  .nm-child-baby${nmItem.id}{
    position: absolute;
    left: ${leftDistance}px; 
    bottom: 84px;
  }
  `;
  }

  leftDistance += 470;

});

document.querySelector('.nm-scroll-images').innerHTML = nmHTML;
nmStyleElement.textContent = nmStyle;

document.head.appendChild(nmStyleElement);

document.addEventListener("DOMContentLoaded", function () {
  const nmScrollImages = document.querySelector(".nm-scroll-images");
  const nmScrollLength = nmScrollImages.scrollWidth - nmScrollImages.clientWidth;
  const nmLeftButton = document.querySelector(".nm-left");
  const nmRightButton = document.querySelector(".nm-right");

  function nmCheckScroll() {
    const nmCurrentScroll = nmScrollImages.scrollLeft;
    if (nmCurrentScroll === 0) {
      nmLeftButton.setAttribute("disabled", "true");
      nmLeftButton.classList.add('nm-buttons-hide')
      nmRightButton.removeAttribute("disabled");
      nmRightButton.classList.remove('nm-buttons-hide')
    } else if (nmScrollImages.scrollLeft + nmScrollImages.clientWidth >= nmScrollImages.scrollWidth - 10) {
      nmRightButton.setAttribute("disabled", "true");
      nmRightButton.classList.add('nm-buttons-hide')
      nmLeftButton.removeAttribute("disabled");
      nmLeftButton.classList.remove('nm-buttons-hide')
    } else {
      nmLeftButton.removeAttribute("disabled");
      nmLeftButton.classList.remove('nm-buttons-hide')
      nmRightButton.removeAttribute("disabled");
      nmRightButton.classList.remove('nm-buttons-hide')
    }
  }

  nmScrollImages.addEventListener("scroll", nmCheckScroll);
  window.addEventListener("resize", nmCheckScroll);
  nmCheckScroll();

  function nmLeftScroll() {
    nmScrollImages.scrollBy({
      left: -465,
      behavior: "smooth"
    });
  }

  function nmRightScroll() {
    nmScrollImages.scrollBy({
      left: 465,
      behavior: "smooth"
    });
  }

  nmLeftButton.addEventListener("click", nmLeftScroll);
  nmRightButton.addEventListener("click", nmRightScroll);
});