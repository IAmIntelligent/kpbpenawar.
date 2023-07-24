import { FC } from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GrDownload } from "react-icons/gr";
import { Link } from "react-router-dom";
// import { GrServices } from "react-icons/gr";

// interface Icon {
//   [index: number]: JSX.Element;
// }

export interface ImageCardProps {
  fullName: string;
  position: string;
  image: string;
  styles: string;
  title: string;
  group: string;
  icon: string[];
  download: boolean;
}

const ImageCard: FC<ImageCardProps> = ({
  fullName,
  position,
  image,
  styles,
  title,
  group,
  icon,
  download,
}) => {
  console.log(icon);
  return (
    <div>
      {/* card 2 */}
      <div className={`card  shadow-xl ${group} `}>
        <figure className={group && `relative  overflow-hidden `}>
          <img src={image} alt="Shoes" className={styles} />
          <div
            className={`${
              group &&
              " m-5 absolute inset-0 opacity  group-hover:bg-yellow-500/70 transition-transform duration-300 translate-y-full group-hover:translate-y-0 "
            } `}
          ></div>
        </figure>
        {(title || fullName) && (
          <div className="flex flex-col items-center gap-3 py-3 lg:-py-5 ">
            {title && <p> {title}</p>}
            {fullName && <h2 className="card-title  ">{fullName}</h2>}
            <h4>{position}</h4>

            {icon.length > 0 && (
              <p className="flex gap-3">
                <Link to="">
                  <BsInstagram />
                </Link>
                <Link to="">
                  <BsTwitter />
                </Link>
                <Link to="">
                  <BsFacebook />
                </Link>
              </p>
            )}

            {download && (
                <GrDownload className="  lg:text-2xl cursor-pointer  shadow-2xl" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
