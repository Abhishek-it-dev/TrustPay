

import {
  PhoneCall,
  FileText,
  Percent,
  Users,
  MonitorSmartphone,
} from "lucide-react";

const MSMETriedTools = () => {
  const tools = [
    { icon: <PhoneCall size={22} />, label: "Follow-Ups" },
    { icon: <FileText size={22} />, label: "Payment Terms" },
    { icon: <Percent size={22} />, label: "Post-Dated Cheques" },
    { icon: <Users size={22} />, label: "Third-Party Collections" },
    { icon: <MonitorSmartphone size={22} />, label: "Digital Invoicing Apps" },
  ];

  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h3 className="text-gray-800 text-sm mb-8">
          What’s missing? A solution that doesn’t just remind or track payments —
          but actually assures you get paid, on time.
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg px-6 py-4 w-40 flex flex-col items-center justify-center text-[#EA580C] hover:shadow-md transition"
            >
              <div className="mb-2">{tool.icon}</div>
              <p className="text-gray-700 text-sm font-medium">
                {tool.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MSMETriedTools;