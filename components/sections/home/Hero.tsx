export const heroConfig = {
  sectionId: "hero",
  title: "Smarter, Trust Payments for MSMEs in India",
  subtitle:
    "Transform the way your business handles receivables and payments. Experience secure, on-time B2B payments, interest-earning fund management, and a trusted business network powered by leading Indian banks.",
  buttons: [
    {
      id: 1,
      label: "Get Started",
      href: "/signup",
      className:
        "bg-transparent bg-white border border-white text-primary font-bold px-6 py-2 shadow-md    rounded-3xl hover:bg-white hover:text-primary focus:outline-none",
    },
    {
      id: 2,
      label: "Book a Demo",
      href: "/book-demo",
      className:
        "bg-transparent border border-white text-white font-bold px-6 py-2 rounded-3xl hover:bg-white hover:text-primary",
    },
  ],
};

const Hero = () => {
  const { title, subtitle, buttons } = heroConfig;
  return (
   <section className="relative  bg-[linear-gradient(135deg,var(--primary),var(--accent)_90%)] text-white py-[100px] pb-[80px] overflow-hidden ">
      <div id="particles-js" className="absolute inset-0 z-0 " />

      <div className="relative z-10 text-center px-4">
       
        <h1 className="font-[700] text-[2.7rem] tracking-[-1px] mb-[16px] fade-in-up text-white">
          {title}
        </h1>

       
        <p className="text-[1.35rem] mb-[32px] fade-in-up-delay ">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="hero-buttons fade-in-up-late flex flex-wrap justify-center gap-[14px]">
          {buttons.map(({ id, label, href, className }) => (
            <a key={id} href={href} className={className}>
              {label}
            </a>
          ))}
          
        </div>
      </div>
    </section>
  );
}
export default Hero;