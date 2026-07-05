import Link from "next/link";

export default function OurMenu() {
  return (
    <>

{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-outline-variant/30">
<div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
<Link className="font-display-lg text-headline-md text-primary hover:text-secondary transition-colors" href="/">
                Swatchata Cafe
            </Link>
<div className="hidden md:flex gap-8 items-center">
<Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/">Home</Link>
<Link className="text-secondary font-bold border-b-2 border-secondary font-body-md text-body-md transition-colors" href="/our-menu">Menu</Link>
<Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/our-story">Our Story</Link>
<Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/">Contact</Link>
</div>
<a href="https://www.swiggy.com/city/hyderabad/swachata-cafe-ashok-nagar-jawahar-nagar-rest1164878" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md scale-95 active:opacity-80 transition-transform hidden md:block">
                Order Now
            </a>
<button className="md:hidden text-primary">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>
{/*  Main Content  */}
<main className="pt-[104px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
{/*  Header Section  */}
<header className="text-center mb-16">
<h1 className="font-display-lg text-display-lg text-primary mb-4">Our Menu</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Rooted in tradition, nourishing your soul. Explore our selection of wholesome, millet-based dishes crafted for your well-being.</p>
</header>
{/*  Menu Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Left Column: Breakfast Favorites  */}
<section className="lg:col-span-8 space-y-8">
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">wb_sunny</span>
                    Breakfast Favorites
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Ragi Dalia Card  */}
<div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-48 overflow-hidden border-b border-outline-variant/30">
<img alt="Ragi Dalia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAqA4vCWgxa0M_SZOKV6Wg4XulY7wVEnqLugjXiVnOZSfCp7jjxlbLSBqEd_0W2xZQCapWqNiKEAICRaGnBoF1VsCGUG9UoNaCrBs47kccqB7jWV_aYFcPxz65OSVeTYWzHhI2v1H40djsaT1zS6tMTveOAoWkygducWZuZ9-MBaU41gevfaennYh77LAormoRNdw1WURpMcEmAp5bTZ_ByfN8xJcnCJVTrYLPtn7YUreQYKG9FO1CScdkJhB0NoFhebw5sleIVw0"/>
<div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-md text-label-md shadow-sm">
                                Gut Comfort
                            </div>
</div>
<div className="p-6">
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Ragi Dalia</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Easy to digest, warm and comforting start to your day.</p>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-outline-variant/30">
<div className="flex gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">Full: ₹45</span>
<span className="font-label-md text-label-md text-on-surface-variant">Half: ₹30</span>
</div>
<button className="text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</div>
{/*  Ragi Idly Card  */}
<div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-48 overflow-hidden border-b border-outline-variant/30">
<img alt="Ragi Idly" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDldCxEx-ksEKOCRqp85D4IpEN9jfT7Ic7BUHE3qm-hBTBzTNCS9TFhoj7lmk2qmuMuMCSx44ZICo8eCwBNgZOBs1xHCHuJhuqus6bt_ZqZtt3gX2_cnH4sRkwVytNcQd2P4gm60eI5NFguI3Lc4k8KUVNfSlOm9YRR-zDCTY7tM3olDs0Sajrx0a3G2ExQrZDTnNqpHBQ0r60puA1HPnK3o5b1i-R_df34C38myO0K2vKzYZlwMcvbjoJ3_f-kDERXYiMY5yh539A"/>
<div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-md text-label-md shadow-sm">
                                High Fiber
                            </div>
</div>
<div className="p-6">
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Ragi Idly</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Better digestion, long-lasting fullness.</p>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-outline-variant/30">
<div className="flex gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">Full: ₹45</span>
<span className="font-label-md text-label-md text-on-surface-variant">Half: ₹30</span>
</div>
<button className="text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</div>
{/*  Korra Pongalu Card  */}
<div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-48 overflow-hidden border-b border-outline-variant/30">
<img alt="Korra Pongalu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuv0EwlvgN5oTcWUqV5GK7YFDibZ4E1f3LkEop2CqLlkEVNoxjanKutntc0PKqKgtEbDNX6oxMA_9fix8KNkUoGvFup9QQ8XEthrM-ZTC3QHTC8Cp0bzpHWUIeLpi-ZENgF7NjnLdTs2Kjy0FRxKhZDzaHRqKW3MEjsnALw0oo82tXhNeJjVpZnjk01vS63wPZemQyDZJ4lcaQyTkI1DC26kJ6hQyBWNeaHeAxtNO34icoN9yb7PhC67ixiFoWgZaNFOle_dCW_N8"/>
<div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-md text-label-md shadow-sm">
                                Steady Focus
                            </div>
</div>
<div className="p-6 flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Korra Pongalu</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Low-GI energy for sustained performance.</p>
</div>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-outline-variant/30">
<div className="flex gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">Full: ₹50</span>
<span className="font-label-md text-label-md text-on-surface-variant">Half: ₹30</span>
</div>
<button className="text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</div>
{/*  Millet Chadannam Card  */}
<div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
<div className="relative h-48 overflow-hidden border-b border-outline-variant/30">
<img alt="Millet Chadannam" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_oJhDhPD1CUirePa4AdB039NZmHRO4YFzbxRwjCMcDx90I9-impcl9upbcr-2tPnvQP1VlLHjhAdtd5AK4CDhVydwu9cyjuMZ-mObLe1Kr_Jy6o5rGaYRuo6k9jQ1sfUAIAzp8eLDHC-1t-1fan1067pSvGjU2mXucpYP96vyL9hIizk3gNbHrlIm3R28SybA1EtTQ6DXg6RnI2euglGw6hYKACS9XKbCxRrKhE3QEucUBVbfFJnhQGuN24ECIOFiiVkpZJ-9Z3k"/>
<div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-md text-label-md shadow-sm">
                                Pure &amp; Soothing
                            </div>
</div>
<div className="p-6 flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Millet Chadannam</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Rice replenish for a calming meal.</p>
</div>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-outline-variant/30">
<div className="flex gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">Full: ₹40</span>
<span className="font-label-md text-label-md text-on-surface-variant">Half: ₹25</span>
</div>
<button className="text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</div>
{/*  Idly (Text Only Card)  */}
<div className="glass-card rounded-xl p-6 flex flex-col justify-between md:col-span-2">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-headline-sm text-headline-sm text-primary">Idly</h3>
<span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-md text-label-md">Digestive Health</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Fullness first, a classic favorite.</p>
</div>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-outline-variant/30">
<div className="flex gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">Full: ₹40</span>
<span className="font-label-md text-label-md text-on-surface-variant">Half: ₹25</span>
</div>
<button className="text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</div>
</section>
{/*  Right Column: Healthy Laddus  */}
<aside className="lg:col-span-4 space-y-8">
<div className="glass-card rounded-xl p-6">
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">spa</span>
                        Healthy Laddus
                    </h2>
<p className="font-label-md text-label-md text-secondary mb-4 uppercase tracking-wider">250g Portions</p>
<ul className="space-y-4">
<li className="flex justify-between items-center py-3 border-b border-outline-variant/30 last:border-0">
<div>
<span className="font-body-md text-body-md text-on-surface block">Korra Laddu</span>
</div>
<span className="font-body-md text-body-md text-secondary">₹130</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-outline-variant/30 last:border-0">
<div>
<span className="font-body-md text-body-md text-on-surface block">Ragi Laddu</span>
</div>
<span className="font-body-md text-body-md text-secondary">₹125</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-outline-variant/30 last:border-0">
<div>
<span className="font-body-md text-body-md text-on-surface block">Jonna Laddu</span>
</div>
<span className="font-body-md text-body-md text-secondary">₹125</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-outline-variant/30 last:border-0">
<div>
<span className="font-body-md text-body-md text-on-surface block">Nuvvulu Laddu</span>
</div>
<span className="font-body-md text-body-md text-secondary">₹125</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-outline-variant/30 last:border-0">
<div>
<span className="font-body-md text-body-md text-on-surface block">Flax Seed Laddu</span>
</div>
<span className="font-body-md text-body-md text-secondary">₹125</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-outline-variant/30 last:border-0">
<div>
<span className="font-body-md text-body-md text-on-surface block">Pumpkin Seeds Laddu</span>
</div>
<span className="font-body-md text-body-md text-secondary">₹125</span>
</li>
</ul>
</div>
{/*  Monthly Card Promo  */}
<div className="rounded-xl p-8 bg-surface-container border border-secondary relative overflow-hidden shadow-lg shadow-secondary/5">
<div className="absolute -right-8 -top-8 opacity-10">
<span className="material-symbols-outlined text-[120px] text-secondary">workspace_premium</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold mb-2 relative z-10 text-secondary">Premium Monthly Card</h3>
<p className="font-label-md text-label-md text-on-surface-variant mb-4 relative z-10">Exclusive Access Available For</p>
<div className="font-display-lg text-display-lg text-on-surface mb-6 relative z-10">₹1299/-</div>
<button className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md hover:bg-secondary-fixed transition-colors relative z-10 font-bold">
                        Subscribe Now
                    </button>
</div>
<div className="text-center p-4 rounded-lg glass-card border border-outline-variant/30">
<p className="font-label-md text-label-md text-secondary">Parcel Rs. 5/- Extra</p>
</div>
</aside>
</div>
</main>
{/*  Footer  */}
<footer className="w-full py-12 bg-surface-container border-t border-outline-variant/30">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-gutter max-w-container-max mx-auto text-center md:text-left">
<div className="mb-8 md:mb-0">
<div className="font-display-lg text-headline-sm text-primary mb-4">Swatchata Cafe</div>
<p className="font-body-md text-body-md text-on-surface-variant opacity-80">
                    © 2024 Swatchata Cafe. Rooted in Tradition, Nourishing Your Soul. Clean - Healthy - Calm - Daily Food Place.
                </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Links</h4>
<a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:text-secondary transition-all" href="/">Millet Health Facts</a>
<a className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:text-secondary transition-all" href="/">Our Locations</a>
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
