import { FC } from "react";
import { ImageCard } from "../paths";
import { activityGalleries,  } from "../assets/utlity";
interface galleryPros {
  fullName: string;
  position: string;
  image: string;
}
const ImageGalleries: FC<galleryPros> = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Filtered Galleries</h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-center my-10">
       
        {activityGalleries?.map(({ title, image }, index) => (
          <ImageCard
            key={index}
            fullName={""}
            position={""}
            image={image}
            title={title}
            styles={`w-[220px]  h-[220px] md:h-[300px] md:w-[300px] object-contain rounded-[1px]`}
            group={""} icon={[]}          />
        ))}
      </div>
    </div>
  );
};

export default ImageGalleries;
