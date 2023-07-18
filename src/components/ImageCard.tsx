import { FC } from "react";


export interface ImageCardProps {
  fullName: string;
  position: string;
  image: string;
  styles: string;
  title: string;
  group: string;
}

const ImageCard: FC<ImageCardProps> = (
  { fullName, position, image, styles, title, group }
) => {
  // console.log(fullName, position, image, index);
  return (
    <div>
      {/* card 2 */}
      <div className={`card bg-base-100  shadow-xl ${group} `}>
        <figure className={group && `relative rounded-full overflow-hidden `}>
        
          <img src={image} alt="Shoes" className={styles} />
          <div
            className={`${
              group &&
              " m-5 absolute inset-0 opacity  group-hover:bg-yellow-500/70 transition-transform duration-300 translate-y-full group-hover:translate-y-0 "
            } `}
          ></div>
        </figure>
        <p> {title && title}</p>
        <div className="">
          <h2 className="card-title text-white">{fullName}</h2>
          <h4>{position}</h4>
          <p>Social Icons</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
