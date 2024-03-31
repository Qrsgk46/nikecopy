const lntg = [
  {
    id: 1,
    title: 'Coming Soon: Air Max DN',
    link: 'https://www.nike.com/at/en/w/mens-air-max-plus-shoes-ahvdnznik1zy7ok'
  },
  {
    id: 2,
    title: 'Running Gear',
    link: 'https://www.nike.com/at/en/w/running-collection-4wwp6'
  },
  {
    id: 3,
    title: 'Fitness Essentials',
    link: 'https://www.nike.com/at/en/w/training-gym-58jto'
  },
  {
    id: 4,
    title: 'Nike Style By V2K Run',
    link: 'https://www.nike.com/w?q=Nike%20V2K%20Run&vst=Nike%20V2K%20Run'
  },
  {
    id: 5,
    title: 'Best Sellers',
    link: 'https://www.nike.com/w/best-76m50'
  }
]

let lntgHTML = '';

lntg.forEach((item) => {
  lntgHTML += `
  <div class="lntgGlobal">
    <a class='lntgGlobal1' href="${item.link}">
    <div class="hello">
      <img class="lntgImage" src="interactive-images/lng${item.id}.png">
    </div>
      <p class="title-two">${item.title}</p>
  </div>
    </a>
  `;
});

document.querySelector('.js-scroll-images').innerHTML = lntgHTML;

document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".scroll-images");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      leftButton.classList.add('buttons-hide')
      rightButton.removeAttribute("disabled");
      rightButton.classList.remove('buttons-hide')
    } else if (scrollImages.scrollLeft + scrollImages.clientWidth >= scrollImages.scrollWidth - 10) {
      rightButton.setAttribute("disabled", "true");
      rightButton.classList.add('buttons-hide')
      leftButton.removeAttribute("disabled");
      leftButton.classList.remove('buttons-hide')
    } else {
      leftButton.removeAttribute("disabled");
      leftButton.classList.remove('buttons-hide')
      rightButton.removeAttribute("disabled");
      rightButton.classList.remove('buttons-hide')
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollImages.scrollBy({
      left: -475,
      behavior: "smooth"
    });
    console.log(1);
  }

  function rightScroll() {
    scrollImages.scrollBy({
      left: 475,
      behavior: "smooth"
    });
    console.log(2);
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});