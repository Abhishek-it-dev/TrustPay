

import { TrendingDown, DollarSign, AlertTriangle, Users } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#EA580C] mb-6">
            Why Payment Delays Hurt Indian MSMEs
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <TrendingDown className="text-[#EA580C] mt-1" size={18} />
              <span>
                <strong>Lost Growth Opportunities:</strong> Waiting for
                receivables means missing out on new orders or expansion.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign className="text-[#EA580C] mt-1" size={18} />
              <span>
                <strong>Working Capital Crunch:</strong> Blocked money forces
                MSMEs to borrow at high cost.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="text-[#EA580C] mt-1" size={18} />
              <span>
                <strong>Operational Stress:</strong> Unpredictable payments make
                daily expenses stressful.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="text-[#EA580C] mt-1" size={18} />
              <span>
                <strong>Strained Relationships:</strong> Chasing payments
                damages trust with buyers and partners.
              </span>
            </li>
          </ul>
           <div className="text-blue-800 font-medium mt-6  ">
              Despite digitalization, the majority of MSMEs still struggle with
              delayed B2B payments—hurting long-term growth and peace of mind.
            </div>
        </div>
       

        {/* Image  */}
        <div className="bg-gray-200 rounded-lg w-[32rem] h-[24rem] flex items-center justify-center text-gray-600 text-xs shadow-sm">
          Payment Flow Image
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;