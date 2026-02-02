import { FaHeadset, FaTools, FaPencilRuler } from "react-icons/fa";

export default function Reputation() {
  const cards = [
    {
      title: "Best Services",
      icon: <FaHeadset />,
      desc: "Nullam senectus porttitor in eget. Eget rutrum leo interdum."
    },
    {
      title: "Best Teams",
      icon: <FaTools />,
      desc: "Cursus semper tellus vivamus aliquet lacus. Tellus vivamus."
    },
    {
      title: "Best Designs",
      icon: <FaPencilRuler />,
      desc: "Ultricies at ipsum nunc, tristique nam lectus."
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-accent mb-12">Our Reputation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="border border-gray-200 p-8 rounded hover:shadow-lg transition">
            <div className="text-secondary text-4xl mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">{card.title}</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
