import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-150 bg-gray-100 flex items-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/Images/Hero Image.jpg')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full items-center">
        {/* Main Text */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight ml-4 md:ml-8 lg:ml-16 xl:ml-32">
            Building things <br /> is our mission.
          </h1>
        </div>

        {/* Feature Projects Overlay */}
        <div className="absolute bottom-0 right-0 lg:right-0 bg-primary text-white p-0 flex flex-col w-64 md:w-80 shadow-lg  md:flex">
          <div className="p-8 text-center space-y-4">
            <h3 className="font-bold text-lg">Feature Projects</h3>
            <p className="text-xl font-light leading-snug">
              The National University of Architecture
            </p>
          </div>
          <div className="flex bg-[#233D91]">
            <button className="flex-1 py-4 flex justify-center items-center bg-neutral-800 transition">
              <FaArrowLeft />
              <span className="ml-2 text-sm uppercase tracking-wider">
                Back
              </span>
            </button>
            <button className="flex-1 py-4 flex justify-center items-center bg-neutral-800 transition border-l border-white/10">
              <span className="mr-2 text-sm uppercase tracking-wider">
                Next
              </span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
