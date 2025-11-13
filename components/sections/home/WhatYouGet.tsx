import {
  ShieldCheck,
  CreditCard,
  DollarSign,
  Gauge,
  Zap,
  Users,
} from "lucide-react";

const whatYouGetConfig = {
  title: "What Do You Get with TrustPay",
  items: [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Trust Receivables",
      description:
        "Get paid, guaranteed. Your incoming payments are verified and secured, so you never miss a due.",
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Trust Payments",
      description:
        "Provide confidence to your suppliers and business partners by making payments through TrustPay.",
    },
    {
      id: 3,
      icon: DollarSign,
      title: "Idle Fund Utilization",
      description:
        "Don’t let your funds sit idle. Earn interest on payments waiting to be disbursed—your money always works for you.",
    },
    {
      id: 4,
      icon: Gauge,
      title: "Real-Time Flow Dashboard",
      description:
        "Our intuitive dashboard shows you everything—receivables, payments, interest earned, and more.",
    },
    {
      id: 5,
      icon: Zap,
      title: "Pay-Relay Control System",
      description:
        "Automate and control your payment flows with smart triggers that ensure timely and accurate transfers.",
    },
    {
      id: 6,
      icon: Users,
      title: "Growth Insights",
      description:
        "Gain actionable insights into your cash flow and payment trends to make smarter business decisions.",
    },
  ],
};

export default function WhatYouGet() {
  const { title, items } = whatYouGetConfig;
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          {title}
        </h2>
        {/* Card */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="group p-6 border rounded-lg text-center shadow-sm hover:shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1 bg-surf"
            >
              <Icon
                className="mx-auto mb-4 text-accent group-hover:text-blue-600 transition-colors duration-300"
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
