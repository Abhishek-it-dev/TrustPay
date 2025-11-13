export const designedForMsmesConfig = {
  sectionId: "designed-for-msmes",
  titleLeft: "Designed for Indian MSMEs",
  descriptionLeft:
    "TrustPay is built specifically for the unique needs of Indian MSMEs—whether you are a manufacturer, trader, wholesaler, distributor, exporter, importer, service provider, or eCommerce business. Our bank-integrated platform ensures compliance, security, and seamless fund management for all.",
  titleRight: "Why TrustPay is Different",
  features: [
    {
      id: 1,
      title: "Bank-Grade Security",
      description:
        "Escrow accounts and settlements via leading Indian banks ensure the safety of your business funds.",
    },
    {
      id: 2,
      title: "RBI Compliance",
      description:
        "Fully adheres to Indian banking and fintech regulations for peace of mind.",
    },
    {
      id: 3,
      title: "Trusted Assurance",
      description:
        "All transactions are authorized and overseen by an RBI-regulated escrow trustee.",
    },
    {
      id: 4,
      title: "Seamless Integration",
      description:
        "Easily connect with your existing invoicing and ERP systems.",
    },
  ],
};


const DesignedForMsmes=()=> {
  const { titleLeft, descriptionLeft, titleRight, features } = designedForMsmesConfig;
  return (
    <section className="py-16 bg-white" id="designed-for-msmes">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
             {titleLeft}
            </h2>
            <p className="text-gray-700 leading-relaxed">
             {descriptionLeft}
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
             {titleRight}
            </h2>
            <ul className="space-y-3 text-gray-700">
              
                  
                {features.map(({ id, title, description }) => (
              <li key={id}>
                <b>{title}:</b> {description}
              </li>
            ))}
                
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DesignedForMsmes;