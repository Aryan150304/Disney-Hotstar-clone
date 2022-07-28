// Array of objects
let movies = [{
    name: "falcon and the winter soldier",
    des: " Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience. ",
    image: "images/falcon.webp"
  },
  {
    name: "loki",
    des: " The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame. ",
    image: "images/loki2.webp"
  },
  {
    name: "raya and the last dragon",
    des: " In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon. ",
    image: "images/raya.webp"
  },
  {
    name: "wanda wision",
    des: " Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems. ",
    image: "images/wanda.webp"
  },
  {
    name: "luca",
    des: " On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human. ",
    image: "images/luca.webp"
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;

function callImage() {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  var slide = document.createElement('div');
  var imgElement = document.createElement('img');
  var content = document.createElement('div');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');

  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));

  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  // adding designed classes to the created elements
  imgElement.setAttribute("src", movies[slideIndex].image);
  slideIndex++;
  slide.className = 'slider';
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";
  sliders.push(slide);
  // calculations for slider animation
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
}

for (let i = 0; i < 4; i++) {
  callImage();
};
setInterval(function() {
  callImage();
}, 3000);

//video cards
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
  item.addEventListener('mouseover', () => {
    let video = item.children[1];
    video.play();
  })
  item.addEventListener('mouseleave', () => {
    let video = item.children[1];
    video.pause();
  })
})

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
