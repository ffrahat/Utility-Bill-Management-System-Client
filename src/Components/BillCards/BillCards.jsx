import React from "react";
import { MapPin, Calendar, Folder, ArrowRight, DollarSign } from "lucide-react";
import { Link } from "react-router";

const BillCards = ({ bill }) => {
  const date = new Date(bill.created_at);

  const month = date.toLocaleString("en-US", { month: "long" });

  // এখন UI-friendly format এ রূপান্তর করবো:
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border border-gray-100 rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-[#2841C5] group-hover:text-[#1f31a1] transition-colors">
        {bill.title} - {month}
      </h3>

      {bill.image &&
            <div className="w-full h-[100px] mb-3">
              <img className="h-full " src={bill.image} alt="" />
            </div>
          }

      {/* Info */}
      <div
        className={`space-y-2 text-gray-600 text-sm ${
          bill.amount ? "xl:flex items-center justify-between" : ""
        }`}
      >
        <div className="space-y-2">
          
          <p className="flex items-center gap-2">
            <Folder size={18} className="text-[#2841C5]" />
            <span className="font-medium">Category:</span> {bill.category}
          </p>

          {bill.amount && (
            <p className="flex items-center gap-2">
              <DollarSign size={18} className="text-[#2841C5]" />
              <span className="font-medium">Amount:</span> {bill?.amount}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <MapPin size={18} className="text-[#2841C5]" />
            <span className="font-medium">Location:</span> {bill.location}
          </p>

          {bill.amount ? (
            <p
              className={`${
                bill?.amount ? "hidden md:flex" : ""
              }  items-center gap-2`}
            >
              <Calendar size={18} className="text-[#2841C5]" />
              <span className="font-medium">Date:</span> {formattedDate}
            </p>
          ) : (
            <p className="flex items-center gap-2">
              <Calendar size={18} className="text-[#2841C5]" />
              <span className="font-medium">Date:</span> {formattedDate}
            </p>
          )}
        </div>
      </div>

      {/* Button */}
      <Link to={`/bill-details/${bill._id}`}>
          <button className="mt-5 w-full flex items-center justify-center gap-2 bg-[#2841C5] hover:bg-[#1f31a1] text-white font-semibold py-2.5 rounded-lg transition-all duration-300 cursor pointer active:translate-x-1">
        See Details
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform duration-300 cursor-pointer"
        />
      </button>
      </Link>
    </div>
  );
};

export default BillCards;
