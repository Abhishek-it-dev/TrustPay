import React from "react";
import { Pencil, Percent, BarChart3, FolderX } from "lucide-react";

const TraditionalReceivables = () => {
  return (
    <section className="bg-[#f5f6fb] py-24">
      <div className="container mx-auto px-6 lg:px-20 text-center space-y-12">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-12">
          The Problem with Traditional Receivables
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 justify-items-center">
         
          <div className="bg-white border border-[#d9e0f0] rounded-xl shadow-sm w-[14rem] h-[8rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <Pencil className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">
              Unpredictable Payments
            </p>
          </div>

         
          <div className="bg-white border border-[#d9e0f0] rounded-xl shadow-sm w-[14rem] h-[8rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <Pencil className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">Manual Tracking</p>
          </div>

          
          <div className="bg-white border border-[#d9e0f0] rounded-xl shadow-sm w-[14rem] h-[8rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <Percent className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">Expensive Credit</p>
          </div>

          
          <div className="bg-white border border-[#d9e0f0] rounded-xl shadow-sm w-[14rem] h-[8rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <BarChart3 className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">Lost Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalReceivables;