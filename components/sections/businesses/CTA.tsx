
const ctaConfig = {
  title: "Get Started: Tailored Solutions for Every MSME",
  description:
    "Whether you make, move, serve, or sell — AssuredPay is built for your business model. Get in touch to see a demo, or sign up and start transforming your payments today.",
  buttons: [
    {
      id: 1,
      label: "Get Started",
      href: "#get-started",
      className:
        "bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-3xl hover:bg-white hover:text-primary",
    },
    {
      id: 2,
      label: "Book a Demo",
      href: "#book-demo",
      className:
        "bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-3xl hover:bg-white hover:text-primary",
    },
    {
      id: 3,
      label: "Contact Us",
      href: "#contact",
      className:
        "bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-3xl hover:bg-white hover:text-primary",
    },
  ],
};

const CTA = () => {
  const { title, description, buttons } = ctaConfig;
  return (
    <section className="py-12 bg-gradient-to-r from-[#3343a1] to-[#f38334] text-center rounded-t-3xl">
      <div className="container mx-auto px-6 lg:px-12">
       
        <h2 className="text-2xl text-white lg:text-3xl font-bold mb-3">
          {title}
        </h2>

        
        <p className="text-sm lg:text-base text-white/90 mb-8 max-w-3xl mx-auto">
         {description}
        </p>

        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {buttons.map(({ id, label, href, className }) => (
            <a key={id} href={href} className={className}>
              {label}
            </a>
          ))}
         
        </div>
      </div>
    </section>
  );
};

export default CTA;
