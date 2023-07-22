
interface TextCardProps {
  key:number
  category:string,
  description:string,
  headerPosition:string,
  icon:React.ElementType
}

const TextCard: React.FC<TextCardProps> = ({ category, description }) => {
  return (
    <div>
      {/* card1 */}
      {/* {icon &&   <GrServices/> } */}
      <div className="card rounded-none w-[300px] bg-[#171d2d]/70 h-[300px] text-primary-content hover:bg-[#fea116]">

        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
