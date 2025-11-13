const partnersConfig = {
  title: "Integrated with Leading Banks & Technology Partners",
  partners: [
    { name: "ICICI Bank" },
    { name: "HDFC Bank" },
    { name: "Axis Bank" },
    { name: "Tech Partner" },
    { name: "Affiliate Network" },
  ],
};

export default function Partners() {
  const { title, partners } = partnersConfig;
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-8 ">
          {title}
        </h3>
        {/* Partners list */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="w-32 h-16 flex items-center justify-center bg-gray-200 rounded-md shadow-sm  text-sm font-medium hover-up"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
