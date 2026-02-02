import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reputation from "./components/Reputation";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Consultation from "./components/Consultation";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="animate-slide-up">
        <Reputation />
      </div>
      <div className="animate-slide-up">
        <AboutUs />
      </div>
      <div className="animate-slide-up">
        <Services />
      </div>
      <div className="animate-slide-up">
        <Stats />
      </div>
      <div className="animate-slide-up">
        <Consultation />
      </div>
      <div className="animate-slide-up">
        <Projects />
      </div>
      <div className="animate-slide-up">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
