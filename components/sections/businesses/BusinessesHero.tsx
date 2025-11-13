

const BusinessesHero = () => {
  // const ctaLinks = [
  //   {
  //     href: "#get-started",
  //     label: "Get Started",
  //     className:
  //       "bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white hover:text-primary",
  //   },
  //   {
  //     href: "#book-demo",
  //     label: "Book a Demo",
  //     className:
  //       "bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white hover:text-primary",
  //   },
    
  // ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1E3A8A] to-[#4338CA] text-white py-32 lg:py-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 relative z-10">
       
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-4xl text-white lg:text-5xl font-bold">
            AssuredPay for Every Kind of Business
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Modern Indian businesses have diverse needs—but all need reliable
            payments, better working capital, and digital trust. AssuredPay
            provides customized payment assurance and receivable management
            solutions for manufacturers, traders, distributors, service
            providers, importers, and eCommerce.
          </p>

          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
          {ctaLinks.map((link) => (
          <a key={link.href} href={link.href} className={link.className}>
            {link.label}
          </a>
        ))}
          </div> */}
        </div>

        {/* Image Placeholder Box */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div className="bg-gray-300 rounded-3xl w-[20rem] h-64 flex items-center justify-center text-gray-700 font-medium shadow-md">
            Business Infographic
          </div>
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

export default BusinessesHero;