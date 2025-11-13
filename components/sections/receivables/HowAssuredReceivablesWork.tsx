import React from "react";
import {
  CheckCircle,
  BarChart3,
  CreditCard,
  Bell,
  FileText,
  Gauge,
} from "lucide-react";

const HowAssuredReceivablesWork = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-8">
            Assured Receivables by AssuredPay: How It Works
          </h2>

          <ul className="space-y-5 text-[#1E293B] text-base">
            <li className="flex items-start gap-1">
              <CheckCircle className="text-[#FF7A00] mt-1 flex-shrink-0" size={20} />
              <p>
                <span className="font-semibold text-[#1E3A8A]">
                  Verified Receivable:
                </span>{" "}
                Every payment is checked and approved as “Assured Receivable” — no risk of delay or default.
              </p>
            </li>

            <li className="flex items-start gap-1">
              <BarChart3 className="text-[#FF7A00] mt-1 flex-shrink-0" size={20} />
              <p>
                <span className="font-semibold text-[#1E3A8A]">
                  Real-Time Dashboard:
                </span>{" "}
                Instantly view all upcoming assured payments and their status.
              </p>
            </li>

            <li className="flex items-start gap-1">
              <CreditCard className="text-[#FF7A00] mt-1 flex-shrink-0" size={20} />
              <p>
                <span className="font-semibold text-[#1E3A8A]">
                  Use Receivables for Transactions:
                </span>{" "}
                Fund purchases or payments without a loan.
              </p>
            </li>

            <li className="flex items-start gap-1">
              <Bell className="text-[#FF7A00] mt-1 flex-shrink-0" size={20} />
              <p>
                <span className="font-semibold text-[#1E3A8A]">
                  Automatic Alerts:
                </span>{" "}
                Notifications on payment due, settlement, and more.
              </p>
            </li>

            <li className="flex items-start gap-1">
              <FileText className="text-[#FF7A00] mt-1 flex-shrink-0" size={20} />
              <p>
                <span className="font-semibold text-[#1E3A8A]">
                  Digital Audit Trail:
                </span>{" "}
                Every receivable documented for compliance and planning.
              </p>
            </li>
          </ul>
        </div>


        {/* Image  */}
         <div className="lg:w-1/2 flex justify-center">
  <div className="bg-[#f8f9fc] rounded-3xl shadow-md w-[32rem] h-[24rem] flex flex-col items-center text-gray-400 font-medium relative">
    <Gauge
      className="text-[#1E3A8A] absolute top-6"
      size={42}
      strokeWidth={2.5}
    />
    <div className="flex flex-1 items-center justify-center">
      Dashboard Preview
    </div>
  </div>
</div>

      
      </div>
    </section>
  );
};

export default HowAssuredReceivablesWork;