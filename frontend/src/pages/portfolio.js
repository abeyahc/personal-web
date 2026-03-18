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
  { src: portfolioImages["./portfolio/DSC05398.jpg"], width: 2000, height: 996, description: "on the way to Lake Tahoe", title: "2/28/26"},
  { src: portfolioImages["./portfolio/DSC05457.jpg"], width: 1271, height: 2000, description: "Lake Tahoe with Friends", title: "2/28/26"},
  { src: portfolioImages["./portfolio/DSC05611.jpg"], width: 2000, height: 1333, description: "pismo beach"},
  { src: portfolioImages["./portfolio/DSC05683.jpg"], width: 1333, height: 2000, description: "cute bird at pismo beach"},
  { src: portfolioImages["./portfolio/_25_00225.jpg"], width: 1600, height: 2400 ,title: "film", description: "botanical garden in seattle"},
  { src: portfolioImages["./portfolio/26A_00151.jpg"], width: 1600, height: 2400, description: "red panda at atascadero zoo!!", title: "film",},

];

export default [...photos].reverse();
