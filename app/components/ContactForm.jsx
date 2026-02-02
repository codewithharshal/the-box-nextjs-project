export default function ContactForm() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
      id="contact"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center mb-3 ">
        <h2 className="text-4xl font-bold text-accent mb-6">
          What can we do for you?
        </h2>
        <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
          We are ready to work on a project of any complexity, whether it's
          commercial or residential.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <form className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full border border-gray-200 px-6 py-4 rounded-lg text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full border border-gray-200 px-6 py-4 rounded-lg text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select className="w-full border border-gray-200 px-6 py-4 rounded-lg text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700">
              <option>Reason for Contacting *</option>
              <option>Construction</option>
              <option>Renovation</option>
              <option>Consultation</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-200 px-6 py-4 rounded-lg text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
            />
          </div>

          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border border-gray-200 px-6 py-4 rounded-lg text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
          ></textarea>

          <div className="text-sm text-gray-500 text-left">
            * indicates required field
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-primary text-white px-12 py-4 uppercase tracking-wider text-sm font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
