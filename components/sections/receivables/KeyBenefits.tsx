import React from "react";
import {
  ShieldCheck,
  Star,
  CalendarCheck,
  Cpu,
  FileSpreadsheet,
} from "lucide-react";

const KeyBenefits = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-12">
          Key Benefits of Trust Receivables
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Row 1 */}
          <div className="bg-white rounded-xl shadow-sm w-[16rem] h-[7rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <ShieldCheck className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">
              Secure Payments
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm w-[16rem] h-[7rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <Star className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">
              Enhanced Creditworthiness
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm w-[16rem] h-[7rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <CalendarCheck className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">Easy Planning</p>
          </div>

          {/* Row 2 */}
          <div className="bg-white rounded-xl shadow-sm w-[16rem] h-[7rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <Cpu className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">
              Digital Automation
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm w-[16rem] h-[7rem] flex flex-col items-center justify-center hover:shadow-md transition">
            <FileSpreadsheet className="text-[#FF7A00] mb-2" size={26} />
            <p className="text-[#1E3A8A] font-semibold text-sm">
              GST-Compliant Statements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;