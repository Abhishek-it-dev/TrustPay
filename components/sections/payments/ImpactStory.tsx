

const ImpactStory = () => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-10">
          {/* Left Image */}
          <div className="bg-gray-200 rounded-lg w-72 h-48 flex items-center justify-center text-gray-600 text-xs shadow-sm">
            Business Owner Sleeping
          </div>

          {/* Right Text */}
          <div className="max-w-lg text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-[#EA580C] mb-3">
              Real Impact: Sleep “Chain Ki Neend”
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              With AssuredPay’s Assured Payment feature, MSME owners can finally
              sleep peacefully — no more late-night worries about collections,
              payroll, or vendor payments.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              You focus on your next order, growth, and innovation.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              We make sure you get paid, every time.
            </p>
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-lg max-w-xl mx-auto px-6 py-6 text-sm text-gray-700 italic text-center">
          “Earlier, I spent half my month following up on payments. With Assured
          Payment, my funds are released instantly, and I never lose sleep over
          receivables again.”
          <p className="text-gray-600 not-italic font-medium mt-3">
            — Praveen Arora, Electronics Trader
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactStory;