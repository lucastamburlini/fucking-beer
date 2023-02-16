export const images = [
  { img: "./images/slider/amstelLogo.png", name: "Amstel" },
  { img: "./images/slider/brahamaLogo.png", name: "Brahama" },
  { img: "./images/slider/budweiserLogo.png", name: "Budweiser" },
  { img: "./images/slider/heinekenLogo.png", name: "Heineken" },
  { img: "./images/slider/paragoniaLogo.png", name: "Patagonia" },
  { img: "./images/slider/quilmesLogo.png", name: "Quilmes" },
  { img: "./images/slider/stellaArtoisLogo.png", name: "Stella Artois" },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
