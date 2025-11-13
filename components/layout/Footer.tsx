"use client"
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-16 border-t border-border">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-sm">
        {/* Left side links */}
        <div className="flex flex-wrap items-center gap-4 mb-3 md:mb-0">
          <a href="#about" className="hover:underline hover:text-white font-semibold">
            About
          </a>
          <a href="#pricing" className="hover:underline hover:text-white font-semibold">
            Pricing
          </a>
          <a href="#resources" className="hover:underline hover:text-white font-semibold">
            Resources
          </a>
          <a href="#contact" className="hover:underline   hover:text-white font-semibold">
            Contact
          </a>
        </div>

        {/* Right side links */}
        <div className="flex flex-wrap items-center gap-4 mb-3 md:mb-0">
          <a href="#privacy" className="hover:underline hover:text-white font-semibold">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline hover:text-white font-semibold">
            Terms of Service
          </a>
          <a href="#legal" className="hover:underline  hover:text-white font-semibold">
            Legal
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs font-bold text-gray-200 mt-4">
        © {new Date().getFullYear()} AssuredPay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;