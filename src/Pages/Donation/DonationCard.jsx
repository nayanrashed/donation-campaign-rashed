const DonationCard = ({ donation }) => {
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

  const handleAddToDonationList = () => {
    const addedToDonationList = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (!donationItems) {
      addedToDonationList.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedToDonationList));
      alert("Product Added");
    } else {
      const isExists = donationItems.find((donation) => donation.id == id);
      if (!isExists) {
        addedToDonationList.push(...donationItems, donation);
        localStorage.setItem("donations", JSON.stringify(addedToDonationList));
        alert("Product Added");
      }else{
        alert('Already Added')
      }
    }
  };

  return (
    <div>
      <div className="relative">
        <img className="w-full h-[80vh]" src={picture} alt="" />
        <div className="bg-black bg-opacity-40 py-12 pl-12 absolute bottom-0 w-full">
          <button onClick={handleAddToDonationList} className="btn btn-primary">
            Donate ${price}
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold my-5 ml-4>{title}">{title}</h1>
        <p className=" text-xl font-normal">{description}</p>
      </div>
    </div>
  );
};

export default DonationCard;
