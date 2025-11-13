const CustomerStory = () => {
  return (
    <section className="bg-white py-16 ap-testimonial-section">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Image */}
        <div className="bg-gray-200 rounded-lg w-72 h-48 flex items-center justify-center text-gray-600 text-xs shadow-sm">
          Customer Business Image
        </div>

        {/* Right Testimonial */}
        <div className="bg-white border border-gray-100 shadow-md rounded-lg px-6 py-6 max-w-md text-gray-700">
          <p className="italic text-sm mb-3">
            “Earlier, I spent half my month following up on payments. With
            Trust Payment, my funds are released instantly, and I never lose
            sleep over receivables again.”
          </p>
          <p className="text-gray-600 not-italic font-medium text-sm">
            — Praveen Arora, Electronics Trader
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerStory;