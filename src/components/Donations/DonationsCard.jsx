import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg } =
    donation||{};
  return (
    <div className="mx-auto my-5">
      <Link to={`/donation/${id}`}>
        <div className="card shadow-xl" style={{ backgroundColor: card_bg }}>
          <figure>
            <img className="w-full h-48" src={picture} alt="pictures" />
          </figure>
          <div className="">
            <button
              style={{ backgroundColor: category_bg, color: text_button_bg }}
              className="  text-sm font-medium px-3 rounded-sm mt-5 ml-4"
            >
              {category}
            </button>
            <h2
              style={{ color: text_button_bg }}
              className="card-title text-xl font-semibold my-5 ml-4"
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCard;
