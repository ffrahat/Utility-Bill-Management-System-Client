import React from "react";
import { ArrowRight } from "lucide-react";
import MyContainar from "../Layouts/MyContainar";
import BillCards from "../Components/BillCards/BillCards";
import billBanner from "../assets/bill-banner.png"

// 🔹 Fake bills data
const fakeBills = [
  {
    _id: "652a1bf9e5f8e23b84a1c7b1",
    title: "Electricity Bill",
    category: "Electricity",
    location: "Dhaka",
    amount: 1250,
    created_at: "2025-09-05T10:15:00Z",
    image: "https://via.placeholder.com/100x100?text=Electricity",
    description:
      "This bill covers household electricity usage for the month of September 2025. It includes energy consumed by lighting, fans, and other electrical appliances within the residential area. Late payment may result in additional service charges.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7b2",
    title: "Gas Bill",
    category: "Gas",
    location: "Chittagong",
    amount: 780,
    created_at: "2025-09-12T12:00:00Z",
    image: "https://via.placeholder.com/100x100?text=Gas",
    description:
      "The gas bill includes the total monthly gas consumption used for cooking and heating. Charges are calculated based on meter readings and standard residential gas tariffs applicable in Chittagong city.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7b3",
    title: "Water Bill",
    category: "Water",
    location: "Khulna",
    amount: 520,
    created_at: "2025-09-18T09:30:00Z",
    image: "https://via.placeholder.com/100x100?text=Water",
    description:
      "This water bill represents household water usage for September. The charges include supply, purification, and maintenance costs for the residential water connection managed by the local authority.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7b4",
    title: "Internet Bill",
    category: "Internet",
    location: "Sylhet",
    amount: 1550,
    created_at: "2025-09-25T14:10:00Z",
    image: "https://via.placeholder.com/100x100?text=Internet",
    description:
      "Monthly payment for high-speed fiber-optic internet service provided by the ISP in Sylhet. The plan covers up to 50 Mbps speed with unlimited data usage and 24/7 customer support.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7b5",
    title: "Electricity Bill",
    category: "Electricity",
    location: "Rajshahi",
    amount: 1320,
    created_at: "2025-10-05T08:45:00Z",
    image: "https://via.placeholder.com/100x100?text=Electricity",
    description:
      "Residential electricity charges for the month of October. Includes usage from air conditioning, lighting, and other home electrical appliances under the Rajshahi power distribution zone.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7b6",
    title: "Gas Bill",
    category: "Gas",
    location: "Dhaka",
    amount: 830,
    created_at: "2025-10-10T11:20:00Z",
    image: "https://via.placeholder.com/100x100?text=Gas",
    description:
      "This bill includes cooking gas consumption for domestic purposes in Dhaka. Tariff rates are determined based on the national gas authority’s monthly rate schedule for October 2025.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7b7",
    title: "Water Bill",
    category: "Water",
    location: "Chittagong",
    amount: 560,
    created_at: "2025-10-18T15:30:00Z",
    image: "https://via.placeholder.com/100x100?text=Water",
    description:
      "Water supply bill for residential apartment including filtration and maintenance costs. The billing cycle runs for the full month of October 2025, with late fee applied after due date.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7b8",
    title: "Internet Bill",
    category: "Internet",
    location: "Khulna",
    amount: 1650,
    created_at: "2025-10-22T16:45:00Z",
    image: "https://via.placeholder.com/100x100?text=Internet",
    description:
      "Payment for monthly internet subscription with premium bandwidth plan. The bill covers service from October 1st to October 31st, 2025, including tax and service maintenance fees.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7b9",
    title: "Electricity Bill",
    category: "Electricity",
    location: "Sylhet",
    amount: 1280,
    created_at: "2025-11-03T09:00:00Z",
    image: "https://via.placeholder.com/100x100?text=Electricity",
    description:
      "Electricity usage bill for November 2025. It includes household energy consumption for all electrical appliances. Consumers are advised to pay within the due date to avoid disconnection.",
  },
  {
    _id: "652a1bf9e5f8e23b84a1c7c0",
    title: "Internet Bill",
    category: "Internet",
    location: "Dhaka",
    amount: 1720,
    created_at: "2025-11-07T18:00:00Z",
    image: "https://via.placeholder.com/100x100?text=Internet",
    description:
      "Monthly high-speed broadband connection bill for November 2025. Includes 100 Mbps internet plan, router maintenance fee, and applicable taxes under Dhaka ISP service area.",
  },
];



const Bills = () => {
  
  

  return (
    <MyContainar>
      <div className="w-full h-[500px] rounded-2xl mb-5 border border-gray-200">
        <img className="h-full w-full object-cover rounded-2xl" src={billBanner} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          fakeBills.map(bill=> <BillCards key={bill._id} bill={bill} />)
        }
      </div>
    </MyContainar>
  );
};

export default Bills;
