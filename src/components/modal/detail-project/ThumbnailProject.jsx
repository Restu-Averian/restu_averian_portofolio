import { memo, useState } from "react";

const IMG =
  "https://awsimages.detik.net.id/community/media/visual/2020/09/20/jenis-jenis-kucing-peliharaan-12.jpeg?w=650";

const ThumbnailProject_ = ({ project }) => {
  const images = project?.images ?? [IMG, IMG, IMG];
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="flex flex-col gap-3 p-4 md:w-[45%]">
      {/* Gambar utama (besar) */}
      <div className="overflow-hidden rounded-2xl border-2 border-porto-btn">
        <img
          src={activeImg}
          alt={project?.title}
          width={600}
          height={440}
          loading="eager"
          className="h-full w-full object-cover aspect-4/3"
        />
      </div>

      {/* Row thumbnail kecil (3 gambar) */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveImg(img)}
            className={`
                  overflow-hidden rounded-xl border-2 transition-all
                  ${
                    activeImg === img
                      ? "border-porto-btn opacity-100"
                      : "border-porto-border opacity-60 hover:opacity-90"
                  }
                `}
          >
            <img
              src={img}
              alt={`Preview ${i + 1}`}
              width={160}
              height={110}
              loading="lazy"
              className="h-full w-full object-cover aspect-4/3"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const ThumbnailProject = memo(ThumbnailProject_);
export default ThumbnailProject;
