import React from "react";

const FAQs = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        
        <h3 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] text-center mb-10">
          FAQs on Assured Receivables
        </h3>

        
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 max-w-3xl mx-auto p-8 space-y-6">
          {/* FAQ 1 */}
          <div>
            <p className="font-semibold text-[#1E3A8A] mb-2">
              How are my receivables assured?
            </p>
            <p className="text-gray-700 text-sm">
              Each receivable is escrow-backed, approved by buyer or platform,
              and digitally documented.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <p className="font-semibold text-[#1E3A8A] mb-2">
              Can I use assured receivables for future payments?
            </p>
            <p className="text-gray-700 text-sm">
              Yes, you can fund onward payments, orders, or operations using
              upcoming inflows.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <p className="font-semibold text-[#1E3A8A] mb-2">
              Will this reduce my bank interest costs?
            </p>
            <p className="text-gray-700 text-sm">
              Absolutely. With secure receivables, you avoid high-cost loans or
              overdraft.
            </p>
          </div>

          {/* FAQ 4 */}
          <div>
            <p className="font-semibold text-[#1E3A8A] mb-2">
              Is Assured Receivables suitable for seasonal businesses?
            </p>
            <p className="text-gray-700 text-sm">
              Yes. Predictable cash flow helps you manage peaks and off-seasons
              easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;