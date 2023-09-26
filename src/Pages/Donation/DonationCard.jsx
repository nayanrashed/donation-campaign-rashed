import swal from "sweetalert";


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
  } = donation || {};

  const handleAddToDonationList = () => {
    const addedToDonationList = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (!donationItems) {
      addedToDonationList.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedToDonationList));
      swal("Good job!", "Donation Successful", "success");
    } else {
      const isExists = donationItems.find((donation) => donation.id == id);
      if (!isExists) {
        addedToDonationList.push(...donationItems, donation);
        localStorage.setItem("donations", JSON.stringify(addedToDonationList));
        swal("Good job!", "Donation Successful", "success");
      }else{
        swal("Already Donated")
      }
    }
  };

  return (
    <div>
      <div className="relative">
        <img className="w-full h-[80vh]" src={picture} alt="" />
        <div className="bg-black bg-opacity-40 py-6 pl-6 lg:py-10 lg:pl-10 absolute bottom-0 w-full">
          <button className="btn text-white border-none" style={{ backgroundColor: text_button_bg }} onClick={handleAddToDonationList} >
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
