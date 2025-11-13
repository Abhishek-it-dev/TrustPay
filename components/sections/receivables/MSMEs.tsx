import React from "react";
import { Wallet, RefreshCw, Percent ,AlertTriangle} from "lucide-react";
const MSMEsSection = () => {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 gap-2">
        {/* Image Placeholder */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-md w-[32rem] h-[24rem] flex items-center justify-center text-gray-400 font-medium">
            MSMEs 
          </div>
        </div>

        {/* Right Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <AlertTriangle className="text-[#FF7A00]" size={22} />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">
              Why MSMEs Struggle With Receivables
            </h2>
          </div>

        <ul className="text-[#1E293B] text-base space-y-4 font-medium">
  <li className="flex items-start gap-3">
    <Wallet className="text-[#1E3A8A] mt-1 flex-shrink-0" size={18} />
    <p className="text-[#1E293B]">
      <span className="font-semibold text-[#1E3A8A]">
        Blocked Working Capital:
      </span>{" "}
      Receivables stuck for weeks or months force you to borrow at high interest.
    </p>
  </li>

  <li className="flex items-start gap-3">
    <RefreshCw className="text-[#1E3A8A] mt-1 flex-shrink-0" size={18} />
    <p className="text-[#1E293B]">
      <span className="font-semibold text-[#1E3A8A]">Cash Flow Gaps:</span>{" "}
      Delayed payments mean delayed payroll, inventory, and new orders.
    </p>
  </li>

  <li className="flex items-start gap-3">
    <Percent className="text-[#1E3A8A] mt-1 flex-shrink-0" size={18} />
    <p className="text-[#1E293B]">
      <span className="font-semibold text-[#1E3A8A]">High Cost of Finance:</span>{" "}
      Loans to fill payment gaps cut into profits.
    </p>
  </li>
</ul>
        </div>
      </div>
    </section>
  );
};

export default MSMEsSection;