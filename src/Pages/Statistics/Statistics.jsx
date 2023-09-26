import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const Statistics = () => {
  const donations = useLoaderData();

//   const data = [
//     { name: "Remaining Donation", value: 67 },
//     { name: "Your Donated", value: 33 },
//   ];

//   const donationItems = JSON.parse(localStorage.getItem("donations"));
//   const donatedItems = donationItems.length;
//   const totalDonationItems = donations.length;
//   const donatedItemsInPercent = (
//     (donatedItems / totalDonationItems) *
//     100
//   ).toFixed(2);
//   const remainingDonationPercent = (100 - donatedItemsInPercent).toFixed(2);
//   console.log(donatedItemsInPercent, remainingDonationPercent);

//   data[0]["value"] = parseFloat(donatedItemsInPercent);
//   data[1]["value"] = parseFloat(remainingDonationPercent);
//   console.log(typeof(data[0]["value"]));

      const [donatedItemsInPercent, setDonatedItemsInPercent] = useState(0);
      const [remainingDonationPercent, setRemainingDonationPercent] = useState(12);

    const data = [
      { name: "Remaining Donation", value: 67 },
      { name: "Your Donated", value: 33 },
    ];

    useEffect(() => {
      const donationItems = JSON.parse(localStorage.getItem("donations"));
      const donatedItems = donationItems.length;
      const totalDonationItems = donations.length;
      const donatedItemsInPercent = (
        (donatedItems / totalDonationItems) *
        100
      ).toFixed(2);
      const remainingDonationPercent = (100 - donatedItemsInPercent).toFixed(2);

      setDonatedItemsInPercent(donatedItemsInPercent);
      setRemainingDonationPercent(remainingDonationPercent);
    }, [donations]);

      data[0]['value']=parseFloat(donatedItemsInPercent);
      data[1]['value']=parseFloat(remainingDonationPercent);
    //   console.log(typeof(data[0]['value']));

  return (
    <div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
