export const customerStoriesConfig = {
  title: "Customer Success Stories",
  stories: [
    {
      id: 1,
      message:
        "With AssuredPay, our receivables are always on time, and our business never faces cash flow issues.",
      author: "Ajay Mehta",
      role: "Textile Manufacturer",
    },
    {
      id: 2,
      message:
        "AssuredPay helped us build trust with new partners and grow our business faster.",
      author: "Priya Bansal",
      role: "Distributor",
    },
    {
      id: 3,
      message:
        "We now focus on growth instead of chasing payments. AssuredPay has simplified everything.",
      author: "Ravi Sharma",
      role: "Electronics Wholesaler",
    },
  ],
};


const CustomerStories = () => {
  const { title, stories } = customerStoriesConfig;
  return (
    <section className="py-16 bg-white" id="customer-stories">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-10">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {/* Card 1 */}
         {stories.map(({ id, message, author, role }) => (
            <div
              key={id}
              className="w-full md:w-[45%] bg-white border rounded-lg shadow-sm p-6 text-center"
            >
              <p className="text-gray-700 italic leading-relaxed mb-3">
                “{message}”
              </p>
              <p className="text-gray-800 font-semibold text-sm">
                {author}, {role}
              </p>
            </div>
          ))}
         
        </div>
      </div>
    </section>
  );
}
export default CustomerStories;