export default function Consultation() {
  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-neutral-900/80"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white space-y-2">
          <h2 className="text-3xl font-bold">Free consultation with exceptional quality</h2>
          <p className="text-gray-300 font-light text-lg">Just one call away: <span className="underline decoration-secondary">+84 1102 2703</span></p>
        </div>
        
        <button className="border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition font-semibold">
          Get your consultation
        </button>
      </div>
    </section>
  );
}
