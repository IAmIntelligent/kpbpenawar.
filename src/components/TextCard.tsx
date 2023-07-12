import { cardTextProps } from "../pages//Home";

const TextCard: React.FC<cardTextProps> = ({ category, description }) => {
  return (
    <div>
      {/* card1 */}
      <div className="card rounded-none w-[300px] h-[300px] text-primary-content hover:bg-[#fea116]">
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
