const portfolioModules = import.meta.glob("../portfolio/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}", {
  eager: true,
  import: "default",
});

const photoMetadata = {
  "DSC04221.jpg": {
    title: "DSC04221",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04243.jpg": {
    title: "DSC04243",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04395.jpg": {
    title: "DSC04395",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04396.jpg": {
    title: "DSC04396",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04416.jpg": {
    title: "DSC04416",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04420.jpg": {
    title: "DSC04420",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04436.jpg": {
    title: "DSC04436",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04437.jpg": {
    title: "DSC04437",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04746.jpg": {
    title: "DSC04746",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC04787.jpg": {
    title: "DSC04787",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC05013.jpg": {
    title: "DSC05013",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC05186.jpg": {
    title: "DSC05186",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC05282.jpg": {
    title: "DSC05282",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC05303.jpg": {
    title: "DSC05303",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC05348.jpg": {
    title: "DSC05348",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
  "DSC05384.jpg": {
    title: "DSC05384",
    description: "Add a description for this portfolio photo.",
    postedDate: "Date not set",
  },
};

export const photographyPhotos = Object.entries(portfolioModules)
  .map(([modulePath, src], index) => {
    const filename = modulePath.split("/").pop();
    const fallbackTitle = filename ? filename.replace(/\.[^.]+$/, "") : `Photo ${index + 1}`;
    const metadata = (filename && photoMetadata[filename]) || {};

    return {
      id: index + 1,
      src,
      title: metadata.title || fallbackTitle,
      description: metadata.description || "Add a description for this portfolio photo.",
      postedDate: metadata.postedDate || "Date not set",
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));
