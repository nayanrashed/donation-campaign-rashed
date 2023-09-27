import { useEffect, useState } from "react";
import DonationsCardsP from "./DonationsCardsP";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (donationItems) {
      setDonations(donationItems);
    } else {
      setNoFound("(No data Found)");
    }
  }, []);

  return (
    <div className="px-3">
      {noFound ? (
        <div className="p-10">
          <p className="text-center text-4xl text-lime-600 font-semibold">Please Donate</p>
          <p className=" text-center">{noFound}</p>
        </div>
      ) : (
        <div className="mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {isShow
              ? donations.map((donation) => (
                  <DonationsCardsP
                    donation={donation}
                    key={donation.id}
                  ></DonationsCardsP>
                ))
              : donations
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationsCardsP
                      donation={donation}
                      key={donation.id}
                    ></DonationsCardsP>
                  ))}
          </div>
          <div className="flex justify-center m-3">
            {donations.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn btn-primary"
              >
                {isShow ? "See Less" : "See More"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donations;
