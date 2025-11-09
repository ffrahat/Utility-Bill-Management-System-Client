import React from "react";
import MyContainar from "../../Layouts/MyContainar";
import BillCards from "../BillCards/BillCards";

const RecentBills = () => {
  

  // 🔹 Dummy bills data (temporary JSON)
  const bills = [
    {
      _id: 1,
      title: "Electricity Bill - October",
      category: "Utilities",
      location: "Dhaka",
      date: "2025-10-25",
    },
    {
      _id: 2,
      title: "Water Bill - October",
      category: "Utilities",
      location: "Chattogram",
      date: "2025-10-24",
    },
    {
      _id: 3,
      title: "Internet Bill - November",
      category: "Services",
      location: "Sylhet",
      date: "2025-11-01",
    },
    {
      _id: 4,
      title: "Gas Bill - October",
      category: "Utilities",
      location: "Khulna",
      date: "2025-10-20",
    },
    {
      _id: 5,
      title: "Phone Bill - November",
      category: "Communication",
      location: "Rajshahi",
      date: "2025-11-02",
    },
    {
      _id: 6,
      title: "Maintenance Fee",
      category: "Building",
      location: "Barishal",
      date: "2025-10-30",
    },
  ];

  // 🔹 Handle "See Details" click
 

  return (
      <div className="">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center ">
          <span className="text-[#2841C5]">Recent</span> Bills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bills.map(bill=> <BillCards  bill={bill} key={bill._id}/>)}
        </div>
      </div>
  );
};

export default RecentBills;
