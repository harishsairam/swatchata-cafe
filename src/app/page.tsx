import Link from "next/link";

export default function Home() {
  return (
    <>

{/*  TopNavBar  */}
<header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary dark:text-primary-fixed font-body-md fixed top-0 w-full z-50 bg-surface dark:bg-surface-dim shadow-sm flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto left-0 right-0">
<Link className="font-display-lg text-headline-md text-primary dark:text-primary-fixed flex items-center gap-2" href="/">
            Swatchata Cafe
        </Link>
<nav className="hidden md:flex items-center gap-6">
<Link className="text-secondary dark:text-secondary-fixed font-bold border-b-2 border-secondary hover:text-secondary-fixed transition-all duration-300" href="/">Home</Link>
<Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300" href="/our-menu">Menu</Link>
<Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300" href="/our-story">Our Story</Link>
<Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300" href="/">Contact</Link>
</nav>
<a href="https://www.swiggy.com/city/hyderabad/swachata-cafe-ashok-nagar-jawahar-nagar-rest1164878" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-colors scale-95 active:opacity-80 transition-transform">
            Order Now
        </a>
</header>
<main>
  {/* Dynamic Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden pt-20 pb-12">
    <div className="absolute inset-0 z-0">
      <div className="bg-cover bg-center w-full h-full opacity-60" data-alt="Hero image" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCn50jO9lwv8g_zNyA0s8QAoxW1dAFifRlXcYl51lNLpIR0UlWW_8R4VnYVfeNahNYoarRQ2NkAXL_EXAreeUdZ1cjVWR89b-7JBKf0RsJbUX1rBax87bTkn8zL91TFMrvkDc47EVg5WuPDVARLjMs534YaAYCqMTo59ZSt-77TqQm4nxKO_IuTiIpSKBUrmCBXcWmSZwy_b5d1_l__2g03hAjedFo3QVS3tRBMrAkhCabAQnIq_UbmxerYR6BxAgejcNXcHuA5M1U)" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
    </div>
    
    <div className="relative z-10 w-full max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2 text-left space-y-6">
        <div className="inline-flex items-center gap-2 bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-label-md text-sm text-secondary">Artisanal Millet Craft</span>
        </div>
        <h1 className="font-display-lg text-[3.5rem] md:text-[5rem] leading-[1.1] text-primary dark:text-primary-fixed font-bold tracking-tight">
          Nourish Your <br/>
          <span className="text-secondary italic font-light font-headline-md text-[4rem] md:text-[5.5rem]">Soul Daily.</span>
        </h1>
        <p className="font-body-md text-lg text-on-surface-variant max-w-md">
          Experience the gentle energy of traditional wisdom blended with modern well-being. Clean, light, and fully satisfying.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/our-menu" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md uppercase tracking-wider hover:bg-surface-tint transition-all shadow-[0_8px_30px_rgba(184,204,180,0.2)] hover:shadow-[0_8px_30px_rgba(184,204,180,0.4)] hover:-translate-y-1 text-center">
            Explore Menu
          </Link>
          <Link href="/our-story" className="group flex items-center justify-center gap-3 border border-outline-variant text-on-surface px-8 py-4 rounded-full font-label-md uppercase tracking-wider hover:bg-surface-container-high transition-all">
            Our Story 
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
      
      <div className="md:w-1/2 relative hidden md:block">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
         <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-outline-variant/20 shadow-2xl shadow-background">
            <div className="bg-cover bg-center w-full h-full hover:scale-110 transition-transform duration-[10000ms] ease-out" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCD32AHZdGg0jGDs9D4MzkEqu-oryjJhjAQrYVs2NSAOn1IVe7FjEzErYmFAYfYUUVMv9rTtkUUvXakoWB2ysp9LEcO0m5R8JUeoVi505fyRWc6KPGB7YjzO5XRqxD2geiExdo-mfkvVnZ_0bt15hVgaxIQH9sziwRQ0xnPQXai0_gjS2hNVqIzkYJie21WmXb9lJ457V3lpm7xmHCucvvWbxV_CleZ6q2b-CZfsaKCbqkkT4Uqc6Huoa_GheFqtHuDwOd2-kZ61aU)" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-8">
               <div className="backdrop-blur-md bg-surface/40 p-5 rounded-2xl border border-outline-variant/30 w-full flex justify-between items-center transform transition-transform hover:-translate-y-2">
                  <div>
                    <h3 className="text-primary font-headline-sm text-xl mb-1">Rooted in Tradition</h3>
                    <p className="text-on-surface-variant text-sm font-label-md">100% Clean Ingredients</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">eco</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>

  {/* Philosophy Section */}
  <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative border-y border-outline-variant/10">
    <div className="max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 space-y-8">
          <h2 className="font-display-lg text-4xl md:text-5xl text-primary font-bold">
            The <span className="text-secondary italic font-light font-headline-md text-[1.2em]">Swatchata</span> Experience.
          </h2>
          <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
            We believe that daily food should heal, not harm. Our kitchen revives ancient grains like Ragi and Korra through modern culinary techniques, ensuring every bite is a step towards wellness.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
             <div className="space-y-3 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 hover:border-secondary/30 transition-colors">
               <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                 <span className="material-symbols-outlined text-secondary text-3xl">energy_savings_leaf</span>
               </div>
               <h4 className="font-headline-sm text-xl text-primary">Sustained Energy</h4>
               <p className="text-sm text-on-surface-variant leading-relaxed">Low-GI meals that keep you active all day without the crash.</p>
             </div>
             <div className="space-y-3 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 hover:border-secondary/30 transition-colors">
               <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                 <span className="material-symbols-outlined text-secondary text-3xl">favorite</span>
               </div>
               <h4 className="font-headline-sm text-xl text-primary">Gut Friendly</h4>
               <p className="text-sm text-on-surface-variant leading-relaxed">High dietary fiber supports healthy digestion naturally.</p>
             </div>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full grid grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-4 md:space-y-6 pt-12">
            <div className="rounded-3xl overflow-hidden aspect-square border border-outline-variant/20 shadow-lg">
              <div className="bg-cover bg-center w-full h-full hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuC0ukflVuefx_RZwGKjrrZy-2fjBj1-gjzMgEnRPXCI4cKQIT2xy3IZhT45H1h3w_S3MyC00iLT7vbOFp4sWZp3KYGJnFKebUbPxvJWAkK7YASPlxfrmDb6I1lj6xAAvQQGaiNJbWTmYIoT4ot--i51vRj6Z1A5WqFb4DGlSDezh5LCnIz2bIv_A76dQhAvzB4SrT9tk_606Bh5Z_uu6l0pPwCif46WUYSXlm7KJ-rUdeQdKxCjaDF5onZ7e_JpaaeqysK3IeeY1J8)" }}></div>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-outline-variant/20 shadow-lg">
               <div className="bg-cover bg-center w-full h-full hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBuv0EwlvgN5oTcWUqV5GK7YFDibZ4E1f3LkEop2CqLlkEVNoxjanKutntc0PKqKgtEbDNX6oxMA_9fix8KNkUoGvFup9QQ8XEthrM-ZTC3QHTC8Cp0bzpHWUIeLpi-ZENgF7NjnLdTs2Kjy0FRxKhZDzaHRqKW3MEjsnALw0oo82tXhNeJjVpZnjk01vS63wPZemQyDZJ4lcaQyTkI1DC26kJ6hQyBWNeaHeAxtNO34icoN9yb7PhC67ixiFoWgZaNFOle_dCW_N8)" }}></div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
             <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-outline-variant/20 shadow-lg">
               <div className="bg-cover bg-center w-full h-full hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCAqA4vCWgxa0M_SZOKV6Wg4XulY7wVEnqLugjXiVnOZSfCp7jjxlbLSBqEd_0W2xZQCapWqNiKEAICRaGnBoF1VsCGUG9UoNaCrBs47kccqB7jWV_aYFcPxz65OSVeTYWzHhI2v1H40djsaT1zS6tMTveOAoWkygducWZuZ9-MBaU41gevfaennYh77LAormoRNdw1WURpMcEmAp5bTZ_ByfN8xJcnCJVTrYLPtn7YUreQYKG9FO1CScdkJhB0NoFhebw5sleIVw0)" }}></div>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square border border-outline-variant/20 shadow-lg relative group">
              <div className="bg-cover bg-center w-full h-full hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDldCxEx-ksEKOCRqp85D4IpEN9jfT7Ic7BUHE3qm-hBTBzTNCS9TFhoj7lmk2qmuMuMCSx44ZICo8eCwBNgZOBs1xHCHuJhuqus6bt_ZqZtt3gX2_cnH4sRkwVytNcQd2P4gm60eI5NFguI3Lc4k8KUVNfSlOm9YRR-zDCTY7tM3olDs0Sajrx0a3G2ExQrZDTnNqpHBQ0r60puA1HPnK3o5b1i-R_df34C38myO0K2vKzYZlwMcvbjoJ3_f-kDERXYiMY5yh539A)" }}></div>
              <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <Link href="/our-story" className="text-on-primary font-label-md uppercase tracking-widest border border-on-primary px-8 py-3 rounded-full hover:bg-on-primary hover:text-primary transition-colors">Discover</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="bg-cover bg-center w-full h-full opacity-20" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuC_oJhDhPD1CUirePa4AdB039NZmHRO4YFzbxRwjCMcDx90I9-impcl9upbcr-2tPnvQP1VlLHjhAdtd5AK4CDhVydwu9cyjuMZ-mObLe1Kr_Jy6o5rGaYRuo6k9jQ1sfUAIAzp8eLDHC-1t-1fan1067pSvGjU2mXucpYP96vyL9hIizk3gNbHrlIm3R28SybA1EtTQ6DXg6RnI2euglGw6hYKACS9XKbCxRrKhE3QEucUBVbfFJnhQGuN24ECIOFiiVkpZJ-9Z3k)" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/30"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto text-center p-12 md:p-20 rounded-[3rem] border border-secondary/10 bg-surface-container/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
      
      <span className="material-symbols-outlined text-secondary text-6xl mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">spa</span>
      <h2 className="font-display-lg text-4xl md:text-6xl text-primary mb-6">Ready to taste the tradition?</h2>
      <p className="font-body-md text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
        Join us for a daily dose of wellness. Whether you're craving a light breakfast or a comforting bowl, our menu is crafted for you.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <Link href="/our-menu" className="w-full sm:w-auto bg-secondary text-on-secondary px-12 py-5 rounded-full font-label-md text-lg uppercase tracking-wider hover:bg-secondary-fixed transition-all font-bold shadow-[0_0_30px_rgba(233,195,73,0.2)] hover:shadow-[0_0_40px_rgba(233,195,73,0.4)] hover:-translate-y-1">
          View Menu
        </Link>
        <Link href="/" className="w-full sm:w-auto border border-outline-variant text-on-surface px-12 py-5 rounded-full font-label-md text-lg uppercase tracking-wider hover:bg-surface-container-high transition-all">
          Get Directions
        </Link>
      </div>
    </div>
  </section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest dark:bg-tertiary-container text-on-surface dark:text-on-tertiary-container font-body-md w-full py-12 flat no shadows grid grid-cols-1 md:grid-cols-3 gap-gutter px-gutter max-w-container-max mx-auto text-center md:text-left mt-20 border-t border-outline-variant/30">
<div className="flex flex-col gap-4">
<span className="font-display-lg text-display-lg-mobile text-secondary dark:text-primary-fixed">Swatchata Cafe</span>
<p className="text-on-surface-variant dark:text-on-tertiary-container opacity-80 mt-2 max-w-xs mx-auto md:mx-0 text-sm">
                Rooted in Tradition, Nourishing Your Soul.
            </p>
</div>
<div className="flex flex-col gap-3 items-center md:items-start">
<h4 className="font-headline-md text-lg text-primary mb-2">Explore</h4>
<a className="text-on-surface-variant dark:text-on-tertiary-container opacity-80 hover:text-secondary dark:hover:text-on-primary-container underline transition-all opacity-100 hover:opacity-80 transition-opacity" href="/">Millet Health Facts</a>
<a className="text-on-surface-variant dark:text-on-tertiary-container opacity-80 hover:text-secondary dark:hover:text-on-primary-container underline transition-all opacity-100 hover:opacity-80 transition-opacity" href="/">Our Locations</a>
</div>
<div className="flex flex-col gap-3 items-center md:items-start">
<h4 className="font-headline-md text-lg text-primary mb-2">Legal</h4>
<a className="text-on-surface-variant dark:text-on-tertiary-container opacity-80 hover:text-secondary dark:hover:text-on-primary-container underline transition-all opacity-100 hover:opacity-80 transition-opacity" href="/">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-on-tertiary-container opacity-80 hover:text-secondary dark:hover:text-on-primary-container underline transition-all opacity-100 hover:opacity-80 transition-opacity" href="/">Terms of Service</a>
</div>
<div className="col-span-1 md:col-span-3 text-center mt-8 pt-8 border-t border-outline-variant/30 text-sm text-on-surface-variant">
            © 2024 Swatchata Cafe. Rooted in Tradition, Nourishing Your Soul.
        </div>
</footer>

    </>
  );
}
