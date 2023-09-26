import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
  } = donation;
  return (
    <div>
      <Link to={`/donation/${id}`}>
      <div className={`card w-80 shadow-xl`}>
        <figure>
          <img className="w-full h-48" src={picture} alt="pictures" />
        </figure>
        <div className="">
          <button style={{backgroundColor:category_bg}} className="text-[#0052FF]  text-sm font-medium px-3 rounded-sm mt-5 ml-4">
            {category}
          </button>
          <h2 className="card-title text-[#0052FF] text-xl font-semibold my-5 ml-4">
            {title}
          </h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default DonationsCard;
