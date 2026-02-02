import { FaFacebook, FaLinkedin, FaTwitter, FaBox } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4 text-accent">
              <p><span className="font-bold text-primary">ADDRESS:</span> 6391 Elgin St. Celina, Delaware 10299</p>
              <p><span className="font-bold text-primary">PHONE:</span> +84 1102 2703</p>
              <p><span className="font-bold text-primary">EMAIL:</span> hello@thebox.com</p>
            </div>
            
            <div className="flex items-center gap-2 text-primary text-2xl font-bold italic">
              <FaBox className="text-3xl" />
              TheBox
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-bold text-primary tracking-wide text-sm">NEWSLETTER:</h4>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email here" 
                  className="border border-gray-300 px-4 py-2 rounded text-sm w-full md:w-64 focus:outline-none focus:border-primary"
                />
                <button type="submit" className="bg-secondary text-white px-6 py-2 rounded text-sm font-bold uppercase hover:bg-opacity-90 transition">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-primary tracking-wide text-sm">SOCIAL:</h4>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-primary text-2xl"><FaFacebook /></a>
                <a href="#" className="text-accent hover:text-primary text-2xl"><FaLinkedin /></a>
                <a href="#" className="text-accent hover:text-primary text-2xl"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary text-white py-4 text-center text-sm font-light">
        TheBox Company © 2022. All Rights Reserved
      </div>
    </footer>
  );
}
