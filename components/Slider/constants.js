export const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 4000,
  arrows: true,
  dots: false,
  centerMode: true,
  centerPadding: "28%",
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        centerPadding: "20%",
      },
    },
    {
      breakpoint: 1600,
      settings: {
        centerPadding: "20%",
      },
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: "15%",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "7%",
      },
    },
    {
      breakpoint: 576,
      settings: {
        centerPadding: "5%",
      },
    },
  ],
};
