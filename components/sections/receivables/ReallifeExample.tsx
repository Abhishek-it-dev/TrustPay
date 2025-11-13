import React from "react";
import { User } from "lucide-react";

const RealLifeExample = () => {
  return (
    <section className="bg-[#f5f6fb] py-20">
      <div className="container mx-auto px-6 lg:px-20">
        
        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] text-center mb-12">
          Real-Life Example
        </h2>

        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
         
          <div className="bg-white w-40 h-40 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
            <User className="text-[#1E3A8A]" size={34} strokeWidth={2.2} />
          </div>

         
          <div className="bg-white rounded-xl shadow-sm px-8 py-6 max-w-2xl text-gray-700 leading-relaxed">
            <p className="text-blue-700 mb-3">
              “Earlier, my working capital was always stuck in unpaid invoices.
              Now, I use AssuredPay’s Assured Receivables to run my factory
              without any loans or overdraft. I’ve saved lakhs in interest costs
              and grown my business by 30% in a year.”
            </p>
            <p className="text-[#1E3A8A] font-semibold text-sm">
              — Manoj Kumar, Auto Parts Manufacturer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealLifeExample;