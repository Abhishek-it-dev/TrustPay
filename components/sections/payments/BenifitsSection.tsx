
import {
  ShieldCheck,
  Clock,
  TrendingUp,
  Handshake,
  BarChart3,
  Smile,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Guaranteed Payment Security",
      desc: "Every transaction is escrow-backed, ensuring sellers get paid without risk.",
    },
    {
      icon: <Clock size={28} />,
      title: "On-Time Payment Assurance",
      desc: "No more delays — payments are auto-released once delivery is confirmed.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Improved Cash Flow",
      desc: "Predictable payments help MSMEs plan growth and manage working capital better.",
    },
    {
      icon: <Handshake size={28} />,
      title: "Trust Between Buyer & Seller",
      desc: "TrustPay builds confidence through transparent, milestone-based payments.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Real-Time Tracking",
      desc: "Monitor transaction status, escrow updates, and releases in one dashboard.",
    },
    {
      icon: <Smile size={28} />,
      title: "Peace of Mind",
      desc: "No chasing payments or disputes — focus on business, not collections.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-12">
          Unique <span className="text-[#EA580C]">Benefits</span> of Trust Payment
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] border border-gray-100 rounded-lg shadow-sm px-6 py-8 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="text-[#EA580C] mb-3">{benefit.icon}</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;