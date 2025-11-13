const FAQSection = () => {
  const faqs = [
    {
      question: "Is there a risk of payment default?",
      answer:
        "No. Funds are secured in escrow and released only upon delivery confirmation.",
    },
    {
      question: "Will buyers agree to use Trust Payment?",
      answer:
        "Yes! It’s in everyone’s interest — buyers build trust and sellers gain assurance, strengthening partnerships.",
    },
    {
      question: "How fast is settlement?",
      answer: "Typically instant, as soon as both parties confirm completion.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-10">
          FAQs about <span className="text-[#EA580C]">Trust Payment</span>
        </h2>

        {/* Cards */}
        <div className="bg-white shadow-md border border-gray-100 rounded-lg max-w-3xl mx-auto px-12 py-10 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="font-semibold text-gray-800 text-base mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
