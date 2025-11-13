const CTA = () => {
  return (
    <section
      className="py-12 px-6 text-center text-white rounded-t-lg"
      style={{
        background:
          "linear-gradient(90deg, #1E3A8A 0%, #EA580C 100%)",
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-xl text-white lg:text-2xl font-bold mb-2">
          Ready to Stop Worrying About Payments?
        </h2>
        <p className="text-sm text-gray-100 mb-6">
          Let TrustPay’s Trust Payment feature transform your MSME’s growth
          and bring peace of mind.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/signup.html"
            className="bg-[#EA580C] hover:bg-[#c94a0a] text-white rounded-3xl font-medium text-sm px-6 py-2 rounded-md transition"
          >
            Get Started
          </a>
          <a
            href="/contact.html"
            className="border border-white text-white hover:bg-white rounded-3xl hover:text-[#EA580C] font-medium text-sm px-6 py-2 rounded-md transition"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;