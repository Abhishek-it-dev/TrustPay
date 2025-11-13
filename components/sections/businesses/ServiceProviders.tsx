

export const serviceProvidersConfig = {
  title: "Service Providers",
  useCase:
    "Deferred payments, project milestones, and recurring contracts.",
  features: [
    {
      id: 1,
      title: "Milestone-Based Payments",
      description:
        "Phased payments linked to deliverables, routed through escrow.",
    },
    {
      id: 2,
      title: "Subscription & Retainer Models",
      description:
        "Automate recurring billing and ensure on-time receipts.",
    },
    {
      id: 3,
      title: "Payment Assurance for New Clients",
      description:
        "Trade confidently, even with new customers.",
    },
    {
      id: 4,
      title: "Transparent Communication",
      description:
        "Real-time status for both provider and client.",
    },
  ],
  note: "Service providers use AssuredPay to automate billing, secure milestone payments, and maintain transparent client relationships.",
};

const ServiceProviders = () => {
  const { title, useCase, features, note } = serviceProvidersConfig;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-6">
          {/* Left Content */}
          <div className="lg:w-[50%] bg-white rounded-3xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              {title}
            </h3>

            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-blue-800">Use Case:</span>{" "}
              {useCase}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {features.map((feature) => (
                <li key={feature.id}>
                  <span className="font-semibold">{feature.title}:</span>{" "}
                  {feature.description}
                </li>
              ))}
            
            </ul>

            <p className="italic text-[#1E3A8A] mt-4">
              {note}
            </p>
          </div>

          {/*  Image Box */}
          <div className="lg:w-[45%] flex justify-center">
            <div
              className="relative bg-gray-200 rounded-3xl w-[35rem] h-60 flex items-end justify-end shadow-sm"
              style={{
                backgroundImage:
                  "url('https://placehold.co/400x400?text=Service+Provider')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Blue Icon  */}
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <i className="bi bi-person-video2 text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;