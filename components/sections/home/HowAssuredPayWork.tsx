import {
  Building2,
  HandCoins,
  ShieldCheck,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export const howTrustPayWorksConfig = {
  sectionId: "how-it-works",
  title: "How TrustPay Works",
  stepsTitle: "Steps list",
  steps: [
    {
      id: 1,
      title: "Register your Business",
      description: "Quick digital onboarding and KYC verification.",
    },
    {
      id: 2,
      title: "Add Buyers and Suppliers",
      description: "Create your trusted network and invite partners to join TrustPay.",
    },
    {
      id: 3,
      title: "Trust Transactions Process",
      description: "Payments are routed through TrustPay’s escrow for guaranteed settlement.",
    },
    {
      id: 4,
      title: "Track and Manage",
      description: "Real-time visibility of receivables, payables, and escrow balances.",
    },
  ],
};

const HowTrustPayWorks = () => {
  const { title, steps } = howTrustPayWorksConfig;
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
         {title}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/*  Steps list */}
          <ol className="list-decimal list-inside space-y-4 text-gray-700 max-w-lg shadow-sm border rounded-lg p-6 bg-white">
            
              
              {steps.map(({ id, title, description }) => (
                <li key={id}>
                  <strong>{title}:</strong> {description}
                </li>
              ))}
             
         
            
          </ol>

          {/* Note: uncomment it when Imgage is available::Right side - Workflow image */}
          {/* <div className="flex justify-center md:w-1/2">
            <Image
              src="/assets/img/illustrations/workflow.png"
              alt="TrustPay Workflow"
              width={400}
              height={400}
              className="rounded-md"
            />
            </div> */}
          {/*NOTE: remove this when image are availalbe .This is Temporary for better UX: Right side - Flow diagram */}
          <div className="flex flex-col items-center space-y-1 md:w-1/2 p-4 border rounded-lg shadow-sm">
            <div className="flex flex-col items-center">
              <Building2 className="text-orange-500 mb-2" size={40} />
              <p className="font-semibold text-gray-700">Supplier</p>
            </div>

            <ArrowDown className="text-blue-600" size={30} />

            <div className="flex flex-col items-center">
              <ShieldCheck className="text-orange-500 mb-2" size={40} />
              <p className="font-semibold text-gray-700">TrustPay (Escrow)</p>
            </div>

            <ArrowUp className="text-blue-600" size={30} />

            <div className="flex flex-col items-center">
              <HandCoins className="text-orange-500 mb-2" size={40} />
              <p className="font-semibold text-gray-700">Buyer</p>
            </div>
          </div>
        </div>

        
        <div className="text-center mt-6">
          <a
            href="/how-it-works"
            className="inline-block bg-blue-600 text-white font-semibold text-white px-8 py-3 rounded-full shadow-md hover:bg-white transition"
          >
            See How TrustPay Works
          </a>
          <p className="mt-2 text-gray-600 text-[1rem]">
            Learn the detailed step-by-step process and discover how
            <br className="hidden md:block" />
            TrustPay can simplify payments for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
export default HowTrustPayWorks;