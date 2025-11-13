export const faqsConfig = {
  sectionId: "faqs",
  title: "Frequently Asked Questions",
  faqs: [
    {
      id: 1,
      question: "What is TrustPay?",
      answer:
        "TrustPay is a digital platform offering guaranteed B2B payments and receivables designed for Indian MSMEs.",
    },
    {
      id: 2,
      question: "How does the escrow account work?",
      answer:
        "Your payments are held securely in a dedicated escrow account managed by our partner banks and released only upon transaction completion.",
    },
    {
      id: 3,
      question: "Who can use TrustPay?",
      answer:
        "Manufacturers, traders, distributors, wholesalers, exporters, importers, and service providers can all use TrustPay to secure and automate their payments.",
    },
    {
      id: 4,
      question: "Is TrustPay compliant with Indian regulations?",
      answer:
        "Yes, TrustPay operates under RBI-compliant escrow structures and works with regulated financial institutions.",
    },
  ],
};

const FAQs = () => {
  const { title, faqs } = faqsConfig;
  return (
    <section className="py-16 bg-gray-50" id="faqs">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
          {title}
        </h2>

        <div className="space-y-4">
          {faqs.map(({ id, question, answer }) => (
            <div key={id} className="bg-white p-5 rounded-md shadow-sm">
              <strong className="block text-gray-800 mb-2">{question}</strong>
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>

        {/* Read More Link */}
        <div className="text-center mt-6">
          <a
            href="/faqs"
            className="text-blue-600 font-medium hover:underline"
          >
            Read More FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
export default FAQs;