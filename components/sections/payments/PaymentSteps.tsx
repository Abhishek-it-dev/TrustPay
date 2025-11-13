
import { FileText, Banknote, ShieldCheck, CheckCircle } from "lucide-react";

const PaymentSteps = () => {
  const steps = [
    {
      icon: <FileText size={26} />,
      title: "1. Transaction Booking",
      desc: "Seller and buyer record the transaction details securely on AssuredPay.",
    },
    {
      icon: <Banknote size={26} />,
      title: "2. Buyer Payment to Escrow",
      desc: "Buyer deposits the payment into a secure escrow account managed by AssuredPay.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "3. Order Fulfillment",
      desc: "Seller delivers goods or services as per agreed terms.",
    },
    {
      icon: <CheckCircle size={26} />,
      title: "4. Payment Release",
      desc: "Upon buyer confirmation, payment is instantly released to the seller.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
 
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          How <span className="text-[#EA580C]">Assured Payment</span> Works
        </h2>
        <p className="text-sm text-gray-500 mb-12">
          The step-by-step journey from transaction booking to on-time payment settlement.
        </p>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-lg shadow-sm w-60 px-6 py-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition"
            >
              <div className="text-[#EA580C] mb-3">{step.icon}</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSteps;