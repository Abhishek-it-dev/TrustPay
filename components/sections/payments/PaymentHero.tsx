

const PaymentHero = () => {
  return (
    <section
      className="relative overflow-hidden text-white  py-40 lg:py-40"
      style={{
        background:
          "linear-gradient(120deg, #312E81 0%, #4F46E5 60%, #F97316 130%)",
      }}
    >
      <div className="container mx-auto px-2 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-lg text-left">
          <h1 className="text-3xl lg:text-4xl text-white font-bold mb-2">
            Trust Payment
          </h1>
          <p className="text-sm text-gray-200 mb-4">
            Never Worry About Delayed Payments Again
          </p>
          <p className="text-gray-100 text-sm leading-relaxed mb-6">
            Say goodbye to payment delays! Trust Payment by TrustPay ensures
            MSMEs get paid on time and in full through secure, escrow-backed
            transactions. Discover how payment assurance transforms business
            growth and cash flow for Indian SMEs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-1">
            <a
              href="#"
              className="bg-transparent bg-organge-500 border border-white text-white font-bold px-6 py-2 shadow-md    rounded-3xl hover:bg-white hover:text-primary transition-colors duration-300 focus:outline-non"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-[#1E3A8A] transition"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/*  Image Container */}
        <div className="bg-gray-200 rounded-3xl w-[32rem] h-[24rem] flex items-center justify-center text-gray-600 text-xs shadow-sm">
          Trust Payment
        </div>
      </div>

       {/* Bottom divider  */}
      <div className="absolute bottom-6 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 83"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[83px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#edeff5ff"
            d="M0,30L1440,0L1440,83L0,83Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PaymentHero;