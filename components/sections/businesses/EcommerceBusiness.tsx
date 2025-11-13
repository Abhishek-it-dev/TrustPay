"use client"
import { ShoppingBag } from "lucide-react";


 const ecommerceBusinessConfig = {
  e_title: "eCommerce Businesses",
  useCase: "Delayed settlements and reconciliation challenges.",
  features: [
    {
      title: "Daily Settlement Assurance",
      description: "Every sale is tracked, funds are escrowed—no delays."
    },
    {
      title: "Payment Splitting",
      description: "Instantly distribute commissions, returns, and payouts."
    },
    {
      title: "Integrated Reconciliation",
      description: "Real-time dashboard for sales, settlements, and refunds."
    },
    {
      title: "Trust Badges",
      description: "‘AssuredPay Secured’ badge builds brand trust and buyer confidence."
    }
  ]
};

const EcommerceBusinesses = () => {
   const { e_title, useCase, features } = ecommerceBusinessConfig;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-2 gap-4">
          {/* Left Content */}
          <div className="lg:w-[50%] flex flex-col items-start">
            <h3 className="text-xl font-bold text-primary mb-2">
              {e_title}
            </h3>

            <div className="bg- rounded-lg shadow-sm p-6 border border-gray-100 w-full">
              <p className="text-dark mb-3">
                <span className="font-semibold text-[#3343a1]">{useCase}</span>
              </p>

              <ul className="list-disc list-inside space-y-2 text-muted">
                {features.map((feature, index) => (
                <li key={index}>
                  <span className="font-semibold">{feature.title}:</span> {feature.description}
                </li>
              ))}
              </ul>

              <p className="italic text-[#3343a1] mt-4">
                eCommerce businesses rely on AssuredPay for daily settlement assurance,
                seamless reconciliation, and instant payment splitting—all from one
                digital platform.
              </p>
            </div>
          </div>

          {/* Image Box */}
          <div className="lg:w-[45%] flex item-center justify-center">
            <div
              className="relative bg-[#e9eaec] rounded-3xl w-[35rem] h-[15rem] flex items-end justify-end shadow-sm border border-[#e5e7eb]"
              style={{
                backgroundImage:
                  "url('https://placehold.co/400x400?text=eCommerce')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/*  Icon  */}
              <div className="absolute bottom-4 right-4 bg-[#3343a1] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <ShoppingBag size={20} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EcommerceBusinesses; 