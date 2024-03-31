const soiList = [
  {id:1,
  link: 'https://www.nike.com/at/en/w/dunk-shoes-90aohzy7ok' 
  },
  {id:2,
  link: 'https://www.nike.com/at/en/w/air-max-plus-shoes-ahvdnzy7ok' },
  {id:3,
  link: 'https://www.nike.com/at/en/w/pegasus-running-37v7jz8nexh'},
  {id:4,
  link: 'https://www.nike.com/at/en/w/p-6000-2kwlr'},
  {id:5,    
  link: 'https://www.nike.com/at/en/w/air-force-1-shoes-5sj3yzy7ok'},
  {id:6,
  link: 'https://www.nike.com/at/en/w/air-force-1-shoes-5sj3yzy7ok'},
  {id:7,
  link: 'https://www.nike.com/at/en/w/air-max-1-shoes-8p4egzy7ok'},
  {id:8,
  link: 'https://www.nike.com/at/en/w/nike-invincible-nlos'},
  {id:9,
  link: 'https://www.nike.com/at/en/w/metcon-shoes-3yxqszy7ok'},
  {id:10,
  link: 'https://www.nike.com/at/en/w/jordan-1-aj85g'},
];

let newHTML;

soiList.forEach((soi) => {
newHTML += `
  <a href="${soi.link}">
  <div class="card">
    <img class="soi-image" src=soi-images/soi${soi.id}.jpeg>
  </div>
  </a>
`;
});

let soiListDiv = document.querySelector("#soiListDiv")
soiListDiv.innerHTML = newHTML;

function removeUndefinedText() {
  const soiListDiv = document.getElementById("soiListDiv");

  if (soiListDiv) {
      let innerHTML = soiListDiv.innerHTML;

      innerHTML = innerHTML.replace(/undefined/g, '');

      soiListDiv.innerHTML = innerHTML;
  }
}

removeUndefinedText();

$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoPlay: false,
        items: 10,
        center: true,
        nav: true,
        margin: 80,
        smartSpeed: 380,
        dots: false,
        loop: true,
        startPosition: 0, // Index of the item with id:1 in the carousel (0-indexed)
        navText: [
            "<img class='setupImage' src='images/arrow-left.png'>",
            "<img class='setupImage2' src='images/arrow-right.png'>"
        ],
        responsive: {
            0: { items: 1 },
            303: { items: 1.1, margin: 30 },
            379: { items: 1, margin: -68 },
            506: { items: 1, margin: -195 },
            607: { items: 2, margin: 10 },
            759: { items: 2.5, margin: 10 },
            868: { items: 2.86, margin: 30 },
            1010: { items: 3.2, margin: -20 },
            1215: { items: 3.9, margin: 10 },
            1381: { items: 4.7 },
            1519: { items: 4.8, margin: 0 },
            1687: { items: 5, margin: -110 },
            1898: { items: 5, margin: -320 },
            2024: { margin: 310, },
            3037: { items: 5, margin: -1450 },
            4556: { items: 5, margin: -1400 },
            6075: { items: 5, margin: -2900 }
        }
    });

});
