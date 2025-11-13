
const ComparisonTable = () => {
  const rows = [
    {
      label: "Follow-ups",
      traditional: "Manual follow-ups",
      Trust: "Zero follow-ups, auto payment release",
    },
    {
      label: "Delayed Payments",
      traditional: "Risk of delays",
      Trust: "On-time payment guarantee",
    },
    {
      label: "Cheque/Default Risk",
      traditional: "High risk",
      Trust: "No cheque or default risk",
    },
    {
      label: "Cash Flow",
      traditional: "Unpredictable",
      Trust: "Predictable and trusted",
    },
    {
      label: "Cost of Collections",
      traditional: "High, manual",
      Trust: "Minimal, digital process",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Why <span className="text-[#EA580C]">Trust Payment</span> is Better Than Traditional Methods
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-[#F3F4F6] text-gray-700 text-sm">
                <th className="py-3 px-4 text-left font-semibold"> </th>
                <th className="py-3 px-4 text-left font-semibold">
                  Traditional Methods
                </th>
                <th className="py-3 px-4 text-left font-semibold bg-[#EA580C] text-white rounded-tr-lg rounded-tl-lg">
                  Trust Payment by TrustPay
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 text-sm text-gray-700"
                >
                  <td className="py-3 px-4 font-medium">{row.label}</td>
                  <td className="py-3 px-4">{row.traditional}</td>
                  <td className="py-3 px-4 text-[#15803D] font-medium">
                    {row.Trust}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;