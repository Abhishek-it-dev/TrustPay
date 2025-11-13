import React from "react";
import { Wallet, Landmark, BarChart3 } from "lucide-react";

const WorkingCapitalInterestSaving = () => {
  return (
    <section className="bg-[#f5f6fb] py-20 text-center">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-10">
          How Trust Receivables Help MSMEs Save on Working Capital & Interest
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 justify-items-center mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm w-[18rem] h-[10rem] flex flex-col items-center justify-center px-4 hover:shadow-md transition">
            <Wallet className="text-[#FF7A00] mb-2" size={28} />
            <p className="text-[#1E3A8A] font-semibold mb-1">
              Zero-Cost Working Capital
            </p>
            <p className="text-[#1E293B] text-sm">
              Fund operations or payroll—no loans or overdraft needed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm w-[18rem] h-[10rem] flex flex-col items-center justify-center px-4 hover:shadow-md transition">
            <Landmark className="text-[#FF7A00] mb-2" size={28} />
            <p className="text-[#1E3A8A] font-semibold mb-1">
              No More High-Interest Loans
            </p>
            <p className="text-[#1E293B] text-sm">
              Operate on your own money, not costly bank finance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm w-[18rem] h-[10rem] flex flex-col items-center justify-center px-4 hover:shadow-md transition">
            <BarChart3 className="text-[#FF7A00] mb-2" size={28} />
            <p className="text-[#1E3A8A] font-semibold mb-1">
              Seamless Business Growth
            </p>
            <p className="text-[#1E293B] text-sm">
              Predictable receivables unlock bigger orders and expansion.
            </p>
          </div>
        </div>

        {/*  Note */}
        <p className="text-[#FF7A00] text-md font-medium">
          Leverage Receivables for Pre-Claim: <span className="text-[#1E3A8A]">Coming soon!</span> Get instant liquidity using upcoming Trust receivables.
        </p>
      </div>
    </section>
  );
};

export default WorkingCapitalInterestSaving;