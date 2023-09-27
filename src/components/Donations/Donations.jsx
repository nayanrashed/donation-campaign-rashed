import DonationsCard from "./DonationsCard";


const Donations = ({donations}) => {

    return (
        <div className="grid px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-2 py-8">
            {
                donations?.map(donation=><DonationsCard key={donation.id} donation={donation}></DonationsCard>)
            }
        </div>
    );
};

export default Donations;