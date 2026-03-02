const portfolioImages = import.meta.glob("./portfolio/*.jpg", {
  eager: true,
  import: "default",
});

const photos = [
  { src: portfolioImages["./portfolio/DSC04221.jpg"], width: 1690, height: 2000, description: "a photo of Ivana :)" },
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
  { src: portfolioImages["./portfolio/__9_00253.jpg"], width: 2000, height: 1333, title: "film", description: "climbing trip at Yosemite"  },
  { src: portfolioImages["./portfolio/_12_00256.jpg"], width: 2000, height: 1333, title: "film", description: "climbing trip at Yosemite"  },
  { src: portfolioImages["./portfolio/_26_00270.jpg"], width: 2000, height: 1333, title: "film", description: "climbing trip at Bishop"  },
  { src: portfolioImages["./portfolio/abstract1.jpg"], width: 1333, height: 2000 },
  { src: portfolioImages["./portfolio/abstract2.jpg"], width: 2000, height: 2000 },
  { src: portfolioImages["./portfolio/shadow4.jpg"], width: 2000, height: 1333 },
];

export default photos;
