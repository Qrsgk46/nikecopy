const jdi = [
  {
    id: 1,
    type: "Running",
    link: 'https://www.nike.com/at/en/running'
  },
  {
    id: 2,
    type: "Football",
    link: 'https://www.nike.com/at/en/footbal'
  },
  {
    id: 3,
    type: "Basketball",
    link: 'https://www.nike.com/at/en/basketball'
  },
  {
    id: 4,
    type: "Training and Gym",
    link: 'https://www.nike.com/at/en/nikewellcollective'
  },
  {
    id: 5,
    type: "Tennis",
    link: 'https://www.nike.com/at/en/tennis'
  },
  {
    id: 6,
    type: "Yoga",
    link: 'https://www.nike.com/at/en/yoga'
  },
  {
    id: 7,
    type: "Skateboarding",
    link: 'https://www.nike.com/at/en/skateboarding'
  },
  {
    id: 8,
    type: "Dance",
    link: 'https://www.nike.com/at/en/dance'
  }
]

let jdiHTML = '';

jdi.forEach((item) => {
  jdiHTML += `
  <div class="jdiGlobal">
    <a href="${item.link}">
    <button class="jdiButton">${item.type}</button>
      <div class="jdi-child">
        <img class="jdiImage" src="jdi-images/jdi${item.id}.jpg">
      </div>
    </div>
    </a>
      
  `;
});

document.querySelector('.jdi-scroll-images').innerHTML = jdiHTML;

document.addEventListener("DOMContentLoaded", function () {
  const jdiScrollImages = document.querySelector(".jdi-scroll-images");
const jdiScrollLength = jdiScrollImages.scrollWidth - jdiScrollImages.clientWidth;
const jdiLeftButton = document.querySelector(".jdi-left");
const jdiRightButton = document.querySelector(".jdi-right");

function jdiCheckScroll() {
  const jdiCurrentScroll = jdiScrollImages.scrollLeft;
  if (jdiCurrentScroll === 0) {
    jdiLeftButton.setAttribute("disabled", "true");
    jdiLeftButton.classList.add('jdi-buttons-hide')
    jdiRightButton.removeAttribute("disabled");
    jdiRightButton.classList.remove('jdi-buttons-hide')
  } else if (jdiScrollImages.scrollLeft + jdiScrollImages.clientWidth >= jdiScrollImages.scrollWidth - 10) {
    jdiRightButton.setAttribute("disabled", "true");
    jdiRightButton.classList.add('jdi-buttons-hide')
    jdiLeftButton.removeAttribute("disabled");
    jdiLeftButton.classList.remove('jdi-buttons-hide')
  } else {
    jdiLeftButton.removeAttribute("disabled");
    jdiLeftButton.classList.remove('jdi-buttons-hide')
    jdiRightButton.removeAttribute("disabled");
    jdiRightButton.classList.remove('jdi-buttons-hide')
  }
}

jdiScrollImages.addEventListener("scroll", jdiCheckScroll);
window.addEventListener("resize", jdiCheckScroll);
jdiCheckScroll();

function jdiLeftScroll() {
  jdiScrollImages.scrollBy({
    left: -475,
    behavior: "smooth"
  });
}

function jdiRightScroll() {
  jdiScrollImages.scrollBy({
    left: 475,
    behavior: "smooth"
  });
}

jdiLeftButton.addEventListener("click", jdiLeftScroll);
jdiRightButton.addEventListener("click", jdiRightScroll);
});