import React from "react";
import { MapPin, Calendar, Folder, ArrowRight } from "lucide-react";

const BillCards = ({ bill }) => {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-[#2841C5] group-hover:text-[#1f31a1] transition-colors">
        {bill.title}
      </h3>

      {/* Info */}
      <div className="space-y-2 text-gray-600 text-sm">
        <p className="flex items-center gap-2">
          <Folder size={18} className="text-[#2841C5]" />
          <span className="font-medium">Category:</span> {bill.category}
        </p>

        <p className="flex items-center gap-2">
          <MapPin size={18} className="text-[#2841C5]" />
          <span className="font-medium">Location:</span> {bill.location}
        </p>

        <p className="flex items-center gap-2">
          <Calendar size={18} className="text-[#2841C5]" />
          <span className="font-medium">Date:</span> {bill.date}
        </p>
      </div>

      {/* Button */}
      <button
       
        className="mt-5 w-full flex items-center justify-center gap-2 bg-[#2841C5] hover:bg-[#1f31a1] text-white font-semibold py-2.5 rounded-lg transition-all duration-300 cursor pointer active:translate-x-1"
      >
        See Details
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 cursor-pointer" />
      </button>
    </div>
  );
};

export default BillCards;
