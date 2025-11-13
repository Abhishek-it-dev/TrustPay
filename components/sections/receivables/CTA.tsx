import React from "react";

const CTA = () => {
  return (
    <section
      className="relative overflow-hidden text-white py-12 text-center rounded-t-3xl"
      style={{
        background:
          "linear-gradient(90deg, #312E81 0%, #9333EA 50%, #F97316 100%)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
        
        <h2 className="text-xl text-white lg:text-2xl font-semibold mb-3">
          Start Saving on Working Capital Today
        </h2>

        
        <p className="text-sm lg:text-base mb-6 opacity-90">
          Reduce your working capital needs, save on bank interest, and grow
          your MSME with Assured Receivables.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-3xl hover:bg-white hover:text-primary"
          >
            Get Started
          </a> 
          <a
            href="#"
            className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-[#1E3A8A] transition"
          >
            Book a Demo
          </a>
          <a
            href="#"
            className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-[#1E3A8A] transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;