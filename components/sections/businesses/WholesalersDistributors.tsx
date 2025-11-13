
const wholesalersDistributorsConfig = {
  title: "Wholesalers & Distributors",
  useCase:
    "High volume, thin margins, and delayed payments from retailers and to suppliers.",
  features: [
    {
      id: 1,
      title: "Instant Receivable Confirmation",
      description: "Upload invoices, see Trust payments and status.",
    },
    {
      id: 2,
      title: "Bridge Payment Gaps",
      description: "Use Pre-Claim (coming soon) to access receivables early.",
    },
    {
      id: 3,
      title: "Reduce Risk",
      description: "Only transact with verified partners on TrustPay.",
    },
    {
      id: 4,
      title: "Audit-Ready Reports",
      description: "Automated GST statements and reconciliation.",
    },
  ],
  note: "Wholesalers and distributors can use TrustPay to bridge cash flow gaps, ensure timely supplier payments, and strengthen retailer relationships.",
};

const WholesalersDistributors = () => {
  const { title, useCase, features, note } = wholesalersDistributorsConfig;
  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-6">
          {/*  Image Box */}
          <div className="lg:w-[45%] flex justify-center">
            <div
              className="relative bg-gray-200 rounded-3xl w-[35rem] h-60 flex items-end justify-end shadow-sm"
              style={{
                backgroundImage:
                  "url('https://placehold.co/400x400?text=Wholesalers+Distributors')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Blue Icon  */}
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <i className="bi bi-box-seam text-lg"></i>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-[50%] bg-white rounded-3xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-orange-600 mb-3">
              {title}
            </h3>

            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-blue-800">Use Case:</span>{" "}
              {useCase}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
               {features.map(({ id, title, description }) => (
              <li key={id}>
                <span className="font-semibold">{title}: </span>
                {description}
              </li>
            ))}
              
            </ul>

            <p className="italic text-[#1E3A8A] mt-4">
             {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesalersDistributors;