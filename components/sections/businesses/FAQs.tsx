'use'

const FAQs = () => {
    const faqData = [
  {
    question: "Can I use AssuredPay for advance payments to suppliers?",
    answer: "Yes. Escrow ensures funds are held securely and released on delivery, reducing supplier risk."
  },
  {
    question: "How does AssuredPay reduce my collection cost?",
    answer: "Automated tracking, reminders, and secure settlements mean fewer manual follow-ups and lower admin overhead."
  },
  {
    question: "Is AssuredPay suitable for seasonal businesses?",
    answer: "Yes, it offers flexibility to manage variable payment cycles efficiently."
  }
];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#3343a1] mb-12">
          Frequently Asked Use Cases
        </h2>

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto space-y-8">

          <div>
            {faqData.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-primary mb-2">{faq.question}</h3>
              <p className="text-muted">{faq.answer}</p>
            </div>
          ))}
            
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default FAQs; 