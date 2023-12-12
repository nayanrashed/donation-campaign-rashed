import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationCard from './DonationCard';

const Donation = () => {
    const donations = useLoaderData();
    const {id}=useParams();

    const [donation,setDonation]=useState({});

    useEffect(()=>{
        const findDonation = donations?.find(donation=>donation.id==id)
        setDonation(findDonation)
    },[id,donations])
    return (
        <div className='px-3'>
            <DonationCard donation={donation}></DonationCard>
        </div>
    );
};

export default Donation;