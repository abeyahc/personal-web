import { useState } from "react";
import Navbar from "../components/NavBar";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import photos from "./portfolio.js";

export default function Photography() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="photography-content p-[20px]">
        <MasonryPhotoAlbum
          photos={photos}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Captions]}
        />
      </div>

      <style>{`
        .photography-content {
          margin-left: 0;
        }
        @media (min-width: 1024px) {
          .photography-content {
            margin-left: 300px;
          }
        }
      `}</style>
    </div>
  );
}