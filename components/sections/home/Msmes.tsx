import { Clock, Coins, BarChart3 } from "lucide-react";
export const msmesConfig = {
  sectionId: "msmes",
  title: "Why MSMEs Choose TrustPay",
  description:
    "Running an MSME means dealing with unpredictable payments, manual follow-ups, and cash flow gaps. TrustPay solves these challenges by offering guaranteed receivables, bank-grade security, and transparent fund flows.",
  cards: [
    {
      id: 1,
      icon: Clock,
      title: "No more delayed payments",
      description:
        "Receive payments on time, every time, with our escrow-backed platform.",
      iconColor: "text-orange-500",
    },
    {
      id: 2,
      icon: Coins,
      title: "Earn interest on idle funds",
      description:
        "Your escrow balance earns interest while ensuring payment assurance.",
      iconColor: "text-orange-500",
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Simplify receivables tracking",
      description:
        "Monitor all your payments and invoices in one secure dashboard.",
      iconColor: "text-orange-500",
    },
  ],
};

export function Msmes() {
  const { title, description, cards } = msmesConfig;
  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
          {title}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ id, icon: Icon, title, description, iconColor }) => (
            <div
              key={id}
              className="group p-6 border rounded-lg text-center shadow-sm hover:shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1 bg-surf"
            >
              <Icon
                className={`mx-auto mb-4 ${iconColor} group-hover:text-blue-600 transition-colors duration-300`}
                size={40}
                strokeWidth={1.5}
              />
              <h5 className="text-lg font-semibold mb-2 text-txt">{title}</h5>
              <p className="text-muted text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Msmes;

