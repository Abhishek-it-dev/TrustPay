
export const manufacturersTradersConfig = {
  title: "Manufacturers & Traders",
  useCase:
    "Payment delays from distributors and buyers disrupt production and lock up capital.",
  features: [
    {
      id: 1,
      title: "Guaranteed Receivables",
      description: "Every supply invoice becomes a confirmed receivable in escrow.",
    },
    {
      id: 2,
      title: "Automated Payments",
      description: "No chasing buyers—payments auto-settle on delivery confirmation.",
    },
    {
      id: 3,
      title: "Interest-Earning Funds",
      description: "Idle payment amounts earn interest until disbursal.",
    },
    {
      id: 4,
      title: "Cash Flow Planning",
      description: "Real-time dashboard enables precise financial planning.",
    },
  ],
  note: "Manufacturers and traders use TrustPay to guarantee payments, automate collections, and optimize working capital through secure digital workflows.",
};

const ManufacturersTraders = () => {
   const { title, useCase, features, note } = manufacturersTradersConfig;
  return (
  <section className="py-16 bg-white">
  <div className="container mx-auto px-2 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Content */}
      <div className="lg:w-1/2 order-2 lg:order-1">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
           {title}
          </h3>

          <div className="space-y-4 text-gray-700">
            
            <p>
              <span className="font-semibold text-blue-800">Use Case:</span>{" "}
              {useCase}
            </p>

            <ul className="list-disc list-inside space-y-2">
              {features.map((feature) => (
                <li key={feature.id}>
                  <span className="font-semibold">{feature.title}:</span>{" "}
                  {feature.description}
                </li>
              ))}
              </ul>

            <p className="italic text-gray-600">
             {note}
            </p>
          </div>
        </div>
      </div>

      {/* Right Placeholder Box */}
      <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
        <div className="bg-[#e9eaec] rounded-3xl w-[35rem] h-60 flex items-center justify-center text-gray-700 font-medium shadow-sm border border-[#e5e7eb]">
          Manufacturer Trader Image
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default ManufacturersTraders;