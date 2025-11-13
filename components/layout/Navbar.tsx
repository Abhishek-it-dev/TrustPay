"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Solutions", href: "#solutions" },
    { name: "Businesses", href: "/businesses" },
    {name:"Payments", href:"/payments"},
    { name: "Receivables", href: "/receivables" },
    // { name: "Contact", href: "#contact" },
    // { name: "Company", href: "#company" },
    // { name: "Pricing", href: "#pricing" },
    // { name: "Support", href: "#support" },
    // { name: "Legal", href: "#legal" },
  ];

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("drawer-open");
    } else {
      document.body.style.overflow = original;
      document.body.classList.remove("drawer-open");
    }
    return () => {
      document.body.style.overflow = original;
      document.body.classList.remove("drawer-open");
    };
  }, [isMobileMenuOpen]);

  // Centralized navigation handler
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 fixed duration-300 ${
          isScrolled
            ? "bg-white shadow-md backdrop-blur-sm"
            : "bg-white "
        }`}
      >
        <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <Image
              src="/"
              alt="TrustPay logo"
              width={90}
              height={40}
              priority
              className="h-auto w-auto"
            /> */}
            <span className="text-primary font-bold text-xl lg:text-2xl tracking-wide">
              TrustPay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-4 text-text font-bold">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="bg-white border-2 border-primary text-primary font-bold px-6 py-2 rounded-3xl hover:bg-primary hover:text-white transition-colors duration-300">
                Sign In
              </button>
              <button className="bg-primary border-2 border-primary text-white font-bold px-6 py-2 rounded-3xl shadow-md hover:bg-white hover:text-primary transition-colors duration-300">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-base text-text hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-lg text-text font-medium transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.href)}
            className="hover:text-primary fornt-bold transition-colors"
          >
            {item.name}
          </button>
        ))}

        <div className="flex flex-col gap-3 mt-6">
          <button className="!px-5 !py-2 !rounded-full !border-2 !border-[#f97316] !text-[#f97316] !font-semibold !bg-transparent hover:!bg-[#f97316] hover:!text-white !transition-colors !duration-300">
            Sign In
          </button>
          <button className="!px-5 !py-2 !rounded-full !bg-[#f97316] !text-white !font-semibold !border-2 !border-[#f97316] hover:!bg-white hover:!text-[#f97316] !transition-colors !duration-300 ml-3">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
