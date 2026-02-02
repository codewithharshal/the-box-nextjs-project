export default function AboutUs() {
  return (
    <section className="py-20 relative container mx-auto px-4" id="about">
      <div className="flex flex-col lg:flex-row items-center justify-center relative">
        {/* Image */}
        <div className="w-full lg:w-[60%] h-125">
          <img
            src="/Images/About Us image.png"
            alt="About founder"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Content Card Overlay */}
        <div className="w-full lg:w-[40%] bg-primary text-white p-12 shadow-xl lg:-ml-20 rounded  z-10">
          <h2 className="text-3xl font-bold mb-8">About us</h2>
          <div className="space-y-6 text-sm font-light leading-relaxed">
            <p>
              For more than 30 years we have been delivering world-class
              construction and we've built many lasting relationships along the
              way.
            </p>
            <p>
              We've matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
          </div>
          <button className="mt-8 bg-white text-primary px-6 py-3 rounded font-bold text-sm hover:bg-gray-100 transition shadow">
            More on Our History
          </button>
        </div>
      </div>
    </section>
  );
}
