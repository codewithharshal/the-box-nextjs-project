import {
  FaBuilding,
  FaPaintRoller,
  FaDraftingCompass,
  FaTools,
  FaCity,
  FaBolt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Construction", icon: <FaBuilding />, active: false },
    { title: "Renovation", icon: <FaPaintRoller />, active: true },
    { title: "Consultation", icon: <FaDraftingCompass />, active: false },
    { title: "Repair Services", icon: <FaTools />, active: true },
    { title: "Architecture", icon: <FaCity />, active: false },
    { title: "Electric", icon: <FaBolt />, active: true },
  ];

  return (
    <section className="py-20 bg-gray-50 bg-opacity-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-accent mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 rounded shadow-sm hover:shadow-md transition cursor-pointer min-h-50 border ${
                service.active ?
                  "bg-primary text-white border-primary"
                : "bg-white text-primary border-transparent hover:border-primary"
              }`}
            >
              <div
                className={`text-4xl mb-4 ${!service.active && "text-primary"}`}
              >
                {service.icon}
              </div>
              <div className="h-0.5 w-10 bg-gray-300 mb-4 opacity-50"></div>
              <h3
                className={`font-bold ${service.active ? "text-white" : "text-accent"}`}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
