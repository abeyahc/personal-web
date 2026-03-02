const portfolioImages = import.meta.glob("./portfolio/*.jpg", {
  eager: true,
  import: "default",
});

const photos = [
  { src: portfolioImages["./portfolio/DSC04221.jpg"], width: 1690, height: 2000 },
  { src: portfolioImages["./portfolio/DSC04243.jpg"], width: 1333, height: 2000 },
  { src: portfolioImages["./portfolio/DSC04395.jpg"], width: 1333, height: 2000 },
  { src: portfolioImages["./portfolio/DSC04396.jpg"], width: 1333, height: 2000 },
  { src: portfolioImages["./portfolio/DSC04416.jpg"], width: 1333, height: 2000 },
  { src: portfolioImages["./portfolio/DSC04420.jpg"], width: 2000, height: 1333 },
  { src: portfolioImages["./portfolio/DSC04436.jpg"], width: 2000, height: 1333 },
  { src: portfolioImages["./portfolio/DSC04437.jpg"], width: 2000, height: 1333 },
  { src: portfolioImages["./portfolio/DSC04746.jpg"], width: 1333, height: 2000 },
  { src: portfolioImages["./portfolio/DSC04787.jpg"], width: 2000, height: 1333 },
  { src: portfolioImages["./portfolio/DSC05013.jpg"], width: 2000, height: 2000 },
  { src: portfolioImages["./portfolio/DSC05186.jpg"], width: 2000, height: 1333 },
  { src: portfolioImages["./portfolio/DSC05282.jpg"], width: 1509, height: 2000 },
  { src: portfolioImages["./portfolio/DSC05303.jpg"], width: 1652, height: 2000 },
  { src: portfolioImages["./portfolio/DSC05348.jpg"], width: 2000, height: 2000 },
  { src: portfolioImages["./portfolio/DSC05384.jpg"], width: 1333, height: 2000 },
];

export default photos;
