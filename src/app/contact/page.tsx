import Link from "next/link";

export default function Contact() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          <Link className="font-display-lg text-headline-md text-primary hover:text-secondary transition-colors" href="/">
            Swatchata Cafe
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/">Home</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/our-menu">Menu</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/our-story">Our Story</Link>
            <Link className="text-secondary font-bold border-b-2 border-secondary font-body-md text-body-md transition-colors" href="/contact">Contact</Link>
          </div>
          <a href="https://www.swiggy.com/menu/1383296?source=sharing" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md scale-95 active:opacity-80 transition-transform hidden md:block">
            Order Now
          </a>
        </div>
      </nav>

      <main className="pt-[104px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Hero Section */}
        <header className="relative text-center mb-20 pt-8 lg:pt-16">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/10 to-transparent rounded-3xl blur-3xl opacity-50"></div>
          <h1 className="font-display-lg text-5xl md:text-7xl text-primary mb-6">Contact Swatchata Cafe</h1>
          <p className="font-body-md text-xl text-on-surface-variant max-w-2xl mx-auto">
            We'd love to hear from you. Visit us, call us, or send us a message.
          </p>
        </header>


        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Information Card */}
          <div className="glass-card rounded-3xl p-10 border border-outline-variant/30 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            {/* Background accent */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10 pointer-events-none"></div>

            <h2 className="font-display-lg text-4xl text-primary mb-12">Get in Touch</h2>
            <div className="space-y-10">
              
              <div className="group flex items-start gap-6 transition-all hover:translate-x-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors shadow-inner">
                   <span className="material-symbols-outlined text-secondary text-3xl">call</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-label-md text-sm text-on-surface-variant uppercase tracking-wider mb-2">Phone & WhatsApp</h3>
                  <a href="https://wa.me/919182284695" target="_blank" rel="noopener noreferrer" className="font-body-md text-2xl text-on-surface hover:text-secondary transition-colors inline-block">+91-9182284695</a>
                </div>
              </div>

              <div className="group flex items-start gap-6 transition-all hover:translate-x-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors shadow-inner">
                   <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-label-md text-sm text-on-surface-variant uppercase tracking-wider mb-2">Email</h3>
                  <a href="mailto:swatchatacafemillethouse2026@gmail.com" className="font-body-md text-xl text-on-surface break-all hover:text-secondary transition-colors inline-block">swatchatacafemillethouse2026<wbr/>@gmail.com</a>
                </div>
              </div>

              <div className="group flex items-start gap-6 transition-all hover:translate-x-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors shadow-inner">
                   <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-label-md text-sm text-on-surface-variant uppercase tracking-wider mb-2">Address</h3>
                  <p className="font-body-md text-xl text-on-surface">Hyderabad, Telangana<br/><span className="text-on-surface-variant text-base">(Full address pending)</span></p>
                </div>
              </div>

              <div className="group flex items-start gap-6 transition-all hover:translate-x-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors shadow-inner">
                   <span className="material-symbols-outlined text-secondary text-3xl">schedule</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-label-md text-sm text-on-surface-variant uppercase tracking-wider mb-2">Business Hours</h3>
                  <p className="font-body-md text-xl text-on-surface">Morning: 6:00 AM - 12:00 PM<br/>Evening: 6:00 PM - 11:00 PM</p>
                </div>
              </div>

              <div className="group flex items-start gap-6 transition-all hover:translate-x-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors shadow-inner">
                   <span className="material-symbols-outlined text-secondary text-3xl">photo_camera</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-label-md text-sm text-on-surface-variant uppercase tracking-wider mb-2">Instagram</h3>
                  <a href="https://www.instagram.com/swatchatha.cafe?igsh=OTRlZjVsaG12cW04" target="_blank" rel="noopener noreferrer" className="font-body-md text-xl text-on-surface hover:text-secondary transition-colors inline-block">@swatchatha.cafe</a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-container rounded-3xl p-10 border border-outline-variant shadow-2xl relative overflow-hidden">
             {/* Decorative gradient */}
             <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>

             <h2 className="font-display-lg text-4xl text-primary mb-10">Send a Message</h2>
             <form className="space-y-6">
                <div>
                   <label htmlFor="name" className="block font-label-md text-sm text-on-surface-variant mb-2 uppercase tracking-wider">Name</label>
                   <input type="text" id="name" placeholder="Your Name" className="w-full bg-surface/50 border border-outline-variant rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md" />
                </div>
                <div>
                   <label htmlFor="phone" className="block font-label-md text-sm text-on-surface-variant mb-2 uppercase tracking-wider">Phone Number</label>
                   <input type="tel" id="phone" placeholder="Your Phone Number" className="w-full bg-surface/50 border border-outline-variant rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md" />
                </div>
                <div>
                   <label htmlFor="email" className="block font-label-md text-sm text-on-surface-variant mb-2 uppercase tracking-wider">Email</label>
                   <input type="email" id="email" placeholder="Your Email" className="w-full bg-surface/50 border border-outline-variant rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md" />
                </div>
                <div>
                   <label htmlFor="message" className="block font-label-md text-sm text-on-surface-variant mb-2 uppercase tracking-wider">Message</label>
                   <textarea id="message" rows={5} placeholder="How can we help you?" className="w-full bg-surface/50 border border-outline-variant rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-secondary text-on-secondary py-5 rounded-xl font-label-md text-lg uppercase tracking-widest hover:bg-secondary-fixed hover:scale-[1.02] transition-all font-bold shadow-[0_0_20px_rgba(233,195,73,0.3)] mt-4">
                   Submit Message
                </button>
             </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl h-[450px] relative bg-surface-container flex items-center justify-center group">
            <iframe 
                src="https://www.google.com/maps?q=17.4109061,78.4907914&z=17&hl=en&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919182284695" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-white/20">
         <span className="material-symbols-outlined text-3xl">chat</span>
      </a>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container border-t border-outline-variant/30 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-gutter max-w-container-max mx-auto text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <div className="font-display-lg text-headline-sm text-primary mb-4">Swatchata Cafe</div>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
              © 2024 Swatchata Cafe. Rooted in Tradition, Nourishing Your Soul. Clean - Healthy - Calm - Daily Food Place.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Links</h4>
            <a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:text-secondary transition-all" href="/our-story">Our Story</a>
            <a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:text-secondary transition-all" href="/our-menu">Menu</a>
          </div>
          <div className="flex flex-col gap-4 mt-8 md:mt-0">
            <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Legal</h4>
            <a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:text-secondary transition-all" href="/">Privacy Policy</a>
            <a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:text-secondary transition-all" href="/">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
