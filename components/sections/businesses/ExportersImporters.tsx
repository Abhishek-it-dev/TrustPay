'use client'
import { Globe } from "lucide-react";

const ExportersImporters = () => {
  const useCases = [
    {
      title: "Global Payment Assurance",
      desc: "Cross-border payments routed via Indian escrow.",
    },
    {
      title: "Regulatory Compliance",
      desc: "Indian and global standards for all transactions.",
    },
    {
      title: "Faster Access to Funds",
      desc: "Access receivables for advance funding needs.",
    },
    {
      title: "Multi-Currency Support",
      desc: "Track payment status and currency conversions easily.",
    },
  ];
  return (
    <section className="py-16 bg-[#f5f7fa]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-3 gap-5">
          {/*Image Box */}
          <div className="lg:w-[45%] flex justify-end">
            <div
              className="relative bg-[#e9eaec] rounded-3xl w-[35rem] h-[15rem] flex items-end justify-end shadow-sm border border-[#e5e7eb]"
              style={{
                backgroundImage:
                  "url('https://placehold.co/400x400?text=Exporter+Importer')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/*  Icon v */}
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <Globe size={20} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-[50%] flex flex-col items-start">
            {/* Heading */}
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              Exporters & Importers
            </h3>

           
            <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100 w-full">
              <p className="text-gray-700 mb-3">
                <span className="font-semibold text-blue-800">Use Case:</span>{" "}
                International payment cycles, compliance, and currency risk.
              </p>

                 <ul className="list-disc list-inside space-y-2 text-gray-700">
          {useCases.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.title}:</span> {item.desc}
            </li>
          ))}
        </ul>

              

              <p className="italic text-[#1E3A8A] mt-4">
                Exporters and importers choose TrustPay for compliant, secure
                escrow payments and faster access to cross-border funds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportersImporters;