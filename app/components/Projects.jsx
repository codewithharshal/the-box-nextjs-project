import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Wildstone Infra Hotel",
      address: "2715 Ash Dr. San Jose, South Dakota",
      category: "Commercial",
      image: "/Project_Images/Projects_Image_1.png",
    },
    {
      title: "Wish Stone Building",
      address: "2972 Westheimer Rd. Santa Ana, Illinois",
      category: "Commercial",
      image: "/Project_Images/Projects_Image_2.png",
    },
    {
      title: "Mr. Parkinston's House",
      address: "3517 W. Gray St. Utica, Pennsylvania",
      category: "Residential",
      image: "/Project_Images/Projects_Image_3.png",
    },
    {
      title: "Oregano Height",
      address: "2464 Royal Ln. Mesa, New Jersey",
      category: "Residential",
      image: "/Project_Images/Projects_Image_4.png",
    },
  ];

  const categories = ["All", "Commercial", "Residential", "Other"];

  return (
    <section className="py-20 container mx-auto px-4" id="projects">
      <h2 className="text-3xl font-bold text-accent mb-12">Projects</h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Categories */}
        <div className="w-full lg:w-1/4">
          <ul className="space-y-4 border-l-2 border-gray-200">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className={`pl-4 text-lg font-bold cursor-pointer transition ${idx === 0 ? "text-primary border-l-2 border-primary -ml-0.5" : "text-gray-400 hover:text-accent"}`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative h-64 bg-gray-200 overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-x-0 bottom-0 bg-primary text-white p-4">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-xs text-gray-300">{project.address}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center  text-white max-w-sm mx-auto p-0">
            <button className="flex-1 py-3 mx-5 flex justify-center hover:bg-opacity-80 transition bg-accent">
              <FaArrowLeft />
              <span className="ml-2 text-xs uppercase">Back</span>
            </button>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="w-2 h-2 rounded-full  bg-accent"></div>
              <div className="w-2 h-2 rounded-full  bg-accent"></div>
              <div className="w-2 h-2 rounded-full  bg-accent"></div>
            </div>

            <button className="flex-1 py-3 flex mx-5 justify-center hover:bg-opacity-80 transition bg-accent">
              <span className="mr-2 text-xs uppercase">Next</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
