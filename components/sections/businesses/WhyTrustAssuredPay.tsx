
import { Landmark, BarChart3, PiggyBank, FileCheck2, Unlock } from "lucide-react";

const WhyTrustAssuredPay = () => {
    const trustPoints = [
    {
      icon: <Landmark size={18} />,
      title: "Bank-Integrated Escrow",
      desc: "Payments secured with leading Indian banks.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Real-Time Transparency",
      desc: "Live dashboard of all payments, receivables, and interest earned.",
    },
    {
      icon: <PiggyBank size={18} />,
      title: "Interest-Earning Idle Funds",
      desc: "Maximize every rupee between invoicing and payout.",
    },
    {
      icon: <PiggyBank size={18} />,
      title: "Digital KYC & Compliance",
      desc: "Maximize every rupee between invoicing and payout.",
    },
    {
      icon: <FileCheck2 size={18} />,
      title: "Interest-Earning Idle Funds",
      desc: " GST, TDS, and cross-border ready onboarding.",
    },
  ];

  return (
    <section className="py-20 bg-[#f9f9fb] flex justify-center">
      <div className="w-full max-w-5xl rounded-3xl bg-gradient-to-r from-[#3343a1] to-[#6b4ccf] text-white px-8 py-12 shadow-md">
        
        <h2 className="text-2xl text-white lg:text-3xl font-bold text-center mb-8">
          Why Businesses Trust AssuredPay
        </h2>
          
     
        <ul className="space-y-4 text-sm lg:text-base">

            {trustPoints.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="bg-[#f38334] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            {item.icon}
          </div>
          <p>
            <span className="font-semibold">{item.title}:</span> {item.desc}
          </p>
        </li>
      ))}

         
        </ul>
      </div>
    </section>
  );
};

export default WhyTrustAssuredPay; 