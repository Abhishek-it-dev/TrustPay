export const callToActionConfig = {
  title: "Ready to Transform Your MSME Payments?",
  description:
    "Say goodbye to delayed payments and cash flow stress. Join AssuredPay—India’s most trusted MSME payment assurance platform.",
  buttons: [
    {
      id: 1,
      label: "Sign Up Now",
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
    {
      id: 3,
      label: "Contact Us",
      href: "/contact",
      className:
        "bg-transparent border border-white text-white font-semibold px-6 py-2 rounded-3xl hover:bg-white hover:text-primary",
    },
  ],
};


export default function CallToAction() {
  const { title, description, buttons } = callToActionConfig;
  return (
    <section
      className="py-12 text-white"
      id="get-started"
      style={{
        background: "linear-gradient(90deg, #3340a1, #fa8334)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl text-white md:text-3xl font-bold mb-3">
          {title}
        </h2>
        <p className="text-base md:text-lg mb-6 text-gray-100">
          {description}
        </p>
      

        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
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