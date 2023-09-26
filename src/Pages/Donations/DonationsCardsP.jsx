import { Link } from "react-router-dom";

const DonationsCardsP = ({ donation }) => {
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
      <div style={{ backgroundColor: card_bg }} className="rounded-lg flex">
        <div className="w-1/3">
          <img className="rounded-l-lg w-full h-full" src={picture} alt="" />
        </div>

        <div className="pl-6">
          <button
            style={{ backgroundColor: category_bg, color: text_button_bg }}
            className="mt-6 mb-2 text-sm px-3 py-1 font-medium rounded-sm"
          >
            {category}
          </button>
          <h1 className="text-[#0B0B0B] font-semibold text-2xl mb-2">{title}</h1>
          <p style={{color: text_button_bg }} className=" text-base font-semibold mb-6">${price}</p>
          <button className="btn text-white border-none px-4 py-2 mb-6 font-semibold" style={{ backgroundColor: text_button_bg }} >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationsCardsP;
