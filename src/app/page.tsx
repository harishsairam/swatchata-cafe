import Link from "next/link";

export default function Home() {
  return (
    <>

{/*  TopNavBar  */}
<header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary dark:text-primary-fixed font-body-md fixed top-0 w-full z-50 bg-surface dark:bg-surface-dim shadow-sm flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto left-0 right-0">
<a className="font-display-lg text-headline-md text-primary dark:text-primary-fixed flex items-center gap-2" href="/">
            Swatchata Cafe
        </a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-primary dark:text-primary-fixed font-bold border-b-2 border-secondary hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300" href="/our-menu">Menu</a>
<a className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300" href="/our-story">Our Story</a>
<a className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300" href="/">Contact</a>
</nav>
<button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-colors scale-95 active:opacity-80 transition-transform">
            Order Now
        </button>
</header>
<main>
{/*  Hero Section  */}
<section className="relative min-h-[80vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-12 md:py-24 mt-10">
<div className="absolute inset-0 z-0">
<div className="bg-cover bg-center w-full h-full" data-alt="A warm, inviting close-up shot of a steaming bowl of Ragi Dalia, rich and earthy brown in color, set on a rustic wooden table. Soft, natural sunlight streams across the scene, highlighting the texture of the grain. The mood is highly organic, nourishing, and healthy, aligning with a natural, light-mode modern rustic UI aesthetic. Subtle greenery is visible in the softly blurred background." style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCn50jO9lwv8g_zNyA0s8QAoxW1dAFifRlXcYl51lNLpIR0UlWW_8R4VnYVfeNahNYoarRQ2NkAXL_EXAreeUdZ1cjVWR89b-7JBKf0RsJbUX1rBax87bTkn8zL91TFMrvkDc47EVg5WuPDVARLjMs534YaAYCqMTo59ZSt-77TqQm4nxKO_IuTiIpSKBUrmCBXcWmSZwy_b5d1_l__2g03hAjedFo3QVS3tRBMrAkhCabAQnIq_UbmxerYR6BxAgejcNXcHuA5M1U)" }}></div>
<div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
</div>
<div className="relative z-10 text-center max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-xl shadow-lg border border-tertiary/20">
<span className="inline-block bg-tertiary/10 text-tertiary px-4 py-1 rounded-full font-label-md mb-4">Daily Healthy Food</span>
<h1 className="font-display-lg text-display-lg text-secondary mb-6">Nourish Your Soul with Ancient Grains</h1>
<p className="font-body-md text-on-surface-variant mb-8 max-w-xl mx-auto">Experience the gentle energy of traditional wisdom blended with modern well-being. Our artisanal millet-based meals are crafted to leave you feeling clean, light, and fully satisfied.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md uppercase tracking-wider hover:bg-surface-tint transition-colors shadow-[0_4px_14px_rgba(45,90,39,0.2)]">Explore Menu</button>
<button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-label-md uppercase tracking-wider hover:bg-primary/5 transition-colors">Our Story</button>
</div>
</div>
</section>
{/*  The Swatchata Promise  */}
<section className="bg-primary-container py-16 px-margin-mobile md:px-margin-desktop">
<div className="max-w-container-max mx-auto text-center">
<h2 className="font-headline-md text-headline-md text-secondary mb-4">The Swatchata Promise</h2>
<p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-12">Rooted in tradition, we commit to serving you clean, wholesome, and daily meals that respect both your body and the earth.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-surface-container p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center">
<span className="material-symbols-outlined text-secondary text-5xl mb-4" data-weight="fill">eco</span>
<h3 className="font-label-md text-lg text-primary mb-2 font-semibold">100% Clean Ingredients</h3>
<p className="text-sm text-on-surface-variant text-center">Sourced directly from organic farms, ensuring no refined sugars or artificial additives.</p>
</div>
<div className="bg-surface-container p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center">
<span className="material-symbols-outlined text-secondary text-5xl mb-4" data-weight="fill">favorite</span>
<h3 className="font-label-md text-lg text-primary mb-2 font-semibold">Daily Nourishment</h3>
<p className="text-sm text-on-surface-variant text-center">Crafted fresh every day to provide you with sustained, gentle energy for your daily life.</p>
</div>
<div className="bg-surface-container p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center">
<span className="material-symbols-outlined text-secondary text-5xl mb-4" data-weight="fill">psychiatry</span>
<h3 className="font-label-md text-lg text-primary mb-2 font-semibold">Rooted in Tradition</h3>
<p className="text-sm text-on-surface-variant text-center">Reviving ancient grains like Ragi and Korra through modern, delicious culinary techniques.</p>
</div>
</div>
</div>
</section>
{/*  Today's Specials (Bento Layout)  */}
<section className="py-16 px-margin-mobile md:px-margin-desktop bg-background">
<div className="max-w-container-max mx-auto">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="font-headline-md text-headline-md text-secondary">Today's Specials</h2>
<p className="font-body-md text-on-surface-variant mt-2">Curated goodness, fresh from our kitchen.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-secondary font-label-md uppercase hover:text-primary transition-colors" href="/">
                        View Full Menu <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Feature Dish  */}
<div className="md:col-span-8 bg-surface-container rounded-2xl overflow-hidden border border-outline-variant flex flex-col md:flex-row group">
<div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
<div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="A beautifully plated serving of soft, dark brown Ragi Idly on a ceramic plate. Next to it are small bowls of vibrant coconut chutney and spicy sambar. The setting is a bright, sun-drenched modern cafe table with subtle earthy tones, evoking a healthy, clean, and appetizing mood perfect for a modern rustic design." style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCD32AHZdGg0jGDs9D4MzkEqu-oryjJhjAQrYVs2NSAOn1IVe7FjEzErYmFAYfYUUVMv9rTtkUUvXakoWB2ysp9LEcO0m5R8JUeoVi505fyRWc6KPGB7YjzO5XRqxD2geiExdo-mfkvVnZ_0bt15hVgaxIQH9sziwRQ0xnPQXai0_gjS2hNVqIzkYJie21WmXb9lJ457V3lpm7xmHCucvvWbxV_CleZ6q2b-CZfsaKCbqkkT4Uqc6Huoa_GheFqtHuDwOd2-kZ61aU)" }}></div>
<div className="absolute top-4 left-4">
<span className="bg-surface-container/90 backdrop-blur-sm text-on-surface px-3 py-1 rounded-full font-label-md text-[10px] flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Special
                                </span>
</div>
</div>
<div className="md:w-1/2 p-8 flex flex-col justify-center bg-surface-container-high/50">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-2xl text-primary">Ragi Idly</h3>
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-md text-sm">High Fiber</span>
</div>
<p className="font-body-md text-on-surface-variant mb-6 text-sm">Soft, fluffy steamed cakes made from fermented finger millet batter. A light, gut-friendly breakfast served with fresh coconut chutney and hearty sambar.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-medium border border-tertiary/20">Gluten-Free</span>
<span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-medium border border-tertiary/20">Vegan</span>
</div>
<div className="mt-auto flex justify-between items-center">
<span className="font-headline-md text-xl text-secondary font-bold">₹120</span>
<button className="text-primary hover:text-secondary transition-colors p-2 rounded-full hover:bg-surface-container-highest">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
{/*  Secondary Dish  */}
<div className="md:col-span-4 bg-surface-container rounded-2xl p-6 border border-outline-variant flex flex-col group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-headline-md text-xl text-primary">Korra Pongalu</h3>
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-md text-[10px]">Protein Rich</span>
</div>
<p className="font-body-md text-on-surface-variant text-sm mb-6 flex-grow">A savory, comforting porridge made from foxtail millet and moong dal, tempered with ghee, cumin, and black pepper. The perfect warm hug for your stomach.</p>
<div className="w-full h-40 rounded-xl overflow-hidden mb-6 relative">
<div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="A rustic clay bowl filled with steaming Korra Pongalu, garnished with freshly cracked black pepper and a drizzle of golden ghee. The bowl sits on a natural linen cloth over a wooden surface. The lighting is soft and natural, emphasizing the comforting, artisanal, and nourishing qualities of the dish within a light-mode aesthetic." style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuA1nIVMt6-oM8MWADDdeZ4aSaAKGZRxeri7bedduIK0vgJqKYLNzTVJuDuKZB3_ZVVV1_fEfcc0vuXiqjonbemRHsR-d0Nhgm_cgW3pSOHyq36TBjkUZBIyGY6jfIQ7sEHfCVtXJ4kYbp6VoxDJzCDV5ghwmYpMlBkWngX6ALkvsmR0ghA0lvXcY4IOAJwfysg3b5XBBXVJXatEJJmRCsdAgdpAqvA2jmxpJoVrXDaJ10jbFQv1ClzBV0-MtlnLWX0hN-sl2AnlzYA)" }}></div>
</div>
<div className="flex justify-between items-center">
<span className="font-headline-md text-lg text-secondary font-bold">₹140</span>
<button className="bg-primary/20 text-primary px-4 py-2 rounded-full font-label-md text-xs hover:bg-primary hover:text-on-primary transition-colors">Add to Order</button>
</div>
</div>
</div>
</div>
</section><section className="bg-primary-container py-16 px-margin-mobile md:px-margin-desktop">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-12">
<h2 className="font-headline-md text-headline-md text-secondary mb-4">Millet Benefits</h2>
<p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Discover why these ancient grains are the foundation of a vibrant, healthy lifestyle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-surface-container p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl">digest</span>
</div>
<h3 className="font-label-md text-lg text-primary mb-2 font-semibold">Fiber Rich</h3>
<p className="text-sm text-on-surface-variant">High dietary fiber supports healthy digestion and keeps you feeling full and satisfied for longer.</p>
</div>
<div className="bg-surface-container p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl">bolt</span>
</div>
<h3 className="font-label-md text-lg text-primary mb-2 font-semibold">Low GI</h3>
<p className="text-sm text-on-surface-variant">Slow-releasing carbohydrates provide sustained energy without the spikes and crashes of refined grains.</p>
</div>
<div className="bg-surface-container p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl">skillet</span>
</div>
<h3 className="font-label-md text-lg text-primary mb-2 font-semibold">Mineral Dense</h3>
<p className="text-sm text-on-surface-variant">Naturally packed with essential minerals like iron, calcium, and magnesium for overall well-being.</p>
</div>
</div>
</div>
</section>
{/*  Brand Atmosphere Image  */}
<section className="py-12 px-margin-mobile md:px-margin-desktop bg-background">
<div className="max-w-container-max mx-auto h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden relative shadow-sm border border-outline-variant/30">
<div className="bg-cover bg-center w-full h-full" data-alt="A vertical, atmospheric shot of the Swatchata Cafe interior or brand elements. Warm, dappled sunlight filters through plants, illuminating a rustic wooden table setting. The mood is calm, artisanal, and deeply rooted in a natural, light-mode modern rustic aesthetic with earthy greens and subtle terracotta accents." style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuC0ukflVuefx_RZwGKjrrZy-2fjBj1-gjzMgEnRPXCI4cKQIT2xy3IZhT45H1h3w_S3MyC00iLT7vbOFp4sWZp3KYGJnFKebUbPxvJWAkK7YASPlxfrmDb6I1lj6xAAvQQGaiNJbWTmYIoT4ot--i51vRj6Z1A5WqFb4DGlSDezh5LCnIz2bIv_A76dQhAvzB4SrT9tk_606Bh5Z_uu6l0pPwCif46WUYSXlm7KJ-rUdeQdKxCjaDF5onZ7e_JpaaeqysK3IeeY1J8)" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-8 md:p-16">
<h2 className="font-display-lg text-display-lg text-secondary max-w-2xl">Rooted in Tradition, Nourishing Your Soul.</h2>
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
