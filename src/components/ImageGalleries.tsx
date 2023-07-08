import { FC } from "react";
import ImageCard from "./ImageCard";
import { galleryItems } from "../assets/utlity";
interface galleryPros {
    fullName:string;
     position:string;
     image:string
}
const ImageGalleries: FC<galleryPros> = () => {
  return (
    <div>
      <div>
        <p>Team Members</p>
        <h1>Our Master Chefs</h1>
      </div>
      {galleryItems?.map((item, index) => {
        return <ImageCard key={index} item={item} />;
      })}
    </div>
  );
};

export default ImageGalleries;
