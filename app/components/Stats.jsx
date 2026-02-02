import {
  FaRegHandshake,
  FaTrophy,
  FaProjectDiagram,
  FaUserTie,
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      number: "123",
      label: "Projects Completed",
      icon: <FaProjectDiagram />,
      color: "text-accent",
    },
    {
      number: "84",
      label: "Happy Clients",
      icon: <FaRegHandshake />,
      color: "text-accent",
    },
    {
      number: "37",
      label: "Awards Win",
      icon: <FaTrophy />,
      color: "text-accent",
    },
    {
      number: "30",
      label: "Years in Business",
      icon: <FaUserTie />,
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Stats Cards (Left) */}
        <div className="w-full lg:w-1/2 relative min-h-100">
          {/* We'll use a relative placement for simplicity, mimicking the scattered look */}
          <div className="grid grid-cols-2 gap-8 relative z-10">
            {/* Card 1 */}
            {stats.map((stat, index) => (
              <div
                className="bg-white shadow-xl p-6 w-48 -mt-4 ml-8 relative z-20"
                key={index}
              >
                {stat.icon}
                <div className="text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="h-4 w-1 bg-secondary"></div> {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Content (Right) */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-5xl font-bold text-primary mb-8 leading-tight">
            30 Years <br /> Experience
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded font-bold shadow hover:bg-blue-900 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
