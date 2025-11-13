
import { BarChart3 } from "lucide-react";

const ReceivablesHero = () => {
  return (
    <section
      className="relative overflow-hidden text-white py-28 lg:py-36"
      style={{
        background: "linear-gradient(120deg, #3c53a5ff 0%, #b842bcff 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-5">
          <h1 className="text-4xl text-white lg:text-5xl font-bold">
            Trust Receivables – Secure, Predictable Cash Flow for MSMEs
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Get paid, always on time.{" "}
            <span className="font-semibold">Trust Receivables</span> by
            TrustPay helps Indian MSMEs secure incoming payments, reduce
            working capital needs, and save money on interest. Experience the
            next generation of payment assurance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start pt-2">
            <a href="#how-it-works">
              <button className="bg-transparent  bg-white border border-white text-primary font-bold px-6 py-2 shadow-md    rounded-3xl hover:bg-white hover:text-primary focus:outline-non">
                How It Works
              </button>
            </a>
            <a href="#growth-stories">
              <button className="border border-white hover:bg-white hover:text-blue-800 font-semibold px-6 py-2  rounded-full min-w-[130px] transition">
                See Growth Stories
              </button>
            </a>
          </div>
        </div>

      
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div className="relative bg-white rounded-3xl w-[32rem] h-[24rem] shadow-lg flex justify-center">
            <BarChart3
              size={40}
              className="absolute top-4 text-gray-500 opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Bottom divider  */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path fill="#edeff5" d="M0,30L1440,0L1440,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ReceivablesHero;