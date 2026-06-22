import Link from "next/link";

export default function OurStory() {
  return (
    <>

{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-surface-container-high">
<div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
<div className="font-display-lg text-headline-md text-primary">Swatchata Cafe</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/our-menu">Menu</a>
<a className="text-secondary font-bold border-b-2 border-secondary transition-all duration-300" href="/our-story">Our Story</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/">Contact</a>
</div>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-md uppercase tracking-wider scale-95 active:opacity-80 transition-transform hidden md:block">Order Now</button>
{/*  Mobile Menu Icon (Placeholder)  */}
<button className="md:hidden text-primary">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
<main className="flex-grow">
{/*  Hero Section  */}
<section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-30" data-alt="A rustic, warm, top-down view of various whole millets and grains arranged beautifully in small wooden bowls, bathed in soft natural morning light, creating a nourishing and organic aesthetic." style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAVgXp5LHInaRGZfm6tNNSh-Zfli3ob7x-b8n1CZkY31Ap8iwyYwK5Dnl_fjUEfTgo2plshP5ewxobbDp43c7Qp4j70NThbb6SJeWjit3rYNlL8-uXn-E2qpecOoJXeQ7ONmlMXQ6B2zrDfAnKb-nVwAVgzg5UiQGcC0pTO3YSSJp2hlaPxsQ7UrUlXcdgWfrwe9zOq6zYyyLiN5qka2urgiNxo8zCKaCdWGPUUgInSy1nCUep6owI7_zvX3z9xyjU06a2H7_maTYs)" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
</div>
<div className="relative z-10 text-center px-gutter max-w-3xl mx-auto">
<h1 className="font-display-lg text-display-lg text-primary mb-6 text-shadow-subtle">The Millet House Mission</h1>
<p className="font-body-md text-display-lg-mobile text-on-surface-variant mb-8 font-light">Rooted in Tradition. Nourishing Your Soul.</p>
<div className="flex justify-center gap-4 text-secondary font-label-md uppercase tracking-widest">
<span>Clean</span> • <span>Healthy</span> • <span>Calm</span>
</div>
</div>
</section>
{/*  The Philosophy Section  */}
<section className="py-20 px-gutter max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-2xl border border-surface-container-highest">
<img className="w-full h-auto object-cover rounded-xl" data-alt="A beautiful, vibrant photo showing a close-up of a hand gently sorting through a colorful, circular arrangement of different millets on a rustic wooden table, evoking a sense of care and tactile connection to food." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA27b6cjSJBrY7Ryf6KjtPzYhXBgggYZLUrIOWwXcdHFUB0ujIS-ia06tRcuv16XbT03ZW547oWOxLWLBuTDJQNF8RMeiw-8cjIjlbJNioCHHuVDgnN4DASsbrdF9Vxt-P0qEXylcTvUcwkH95SYzOmugTwAHW4wIRwfYlXs5mWoMeow1L8UIusUOnkPU63XLgMFWl-9kUdYs-4OslxuTpWHikkDvflaQVgJhJhNFoqTTVa6NJEP_bipeuf3i7bjyFSNG8dmRycRGE"/>
</div>
<div className="order-1 md:order-2">
<h2 className="font-headline-md text-headline-md text-primary mb-6">Our Philosophy</h2>
<p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                        At Swatchata Cafe, we believe that food is more than sustenance; it is a connection to our roots and a foundation for a calm, healthy life. We are dedicated to reviving the ancient wisdom of millets—nature's original superfoods.
                    </p>
<p className="font-body-md text-on-surface-variant leading-relaxed">
                        Our "Millet House" approach ensures every dish is crafted with intention. By choosing clean, minimally processed ingredients, we offer meals that leave you feeling grounded, energized, and deeply nourished. It is a return to a simpler time, tailored for modern well-being.
                    </p>
</div>
</div>
</section>
{/*  Did You Know / India Map Section  */}
<section className="py-20 bg-surface-container relative overflow-hidden">
<div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-label-md uppercase tracking-wider mb-6">
<span className="material-symbols-outlined text-[18px]">lightbulb</span>
                        Did You Know?
                    </div>
<h2 className="font-display-lg text-display-lg text-secondary mb-6 leading-tight">
                        India is the #1 Millet Producer in the world!
                    </h2>
<p className="font-body-md text-on-surface-variant leading-relaxed">
                        We source our grains directly from the heartlands where these resilient crops have thrived for centuries. By championing millets, we support sustainable agriculture that requires less water and enriches the soil, all while bringing the best of Indian heritage to your plate.
                    </p>
</div>
<div className="relative flex justify-center items-center p-8">
{/*  Stylized Map Representation  */}
<div className="relative w-full max-w-md aspect-square rounded-full bg-surface-container-high/50 flex items-center justify-center p-8 backdrop-blur-sm border border-secondary/10">
<img className="w-full h-auto object-contain drop-shadow-2xl" data-alt="A stylized, creative illustration or mosaic of the map of India, entirely composed of various textured, colorful millets and grains, set against a deep green background, highlighting agricultural richness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmt85YmVXlb3s6d1kXgZlCkI5tq7bC5AmxFDhZ1vbTjvvaLqelfmJVmn_vR9igBn3itvwRiyB3dOCOaKx6iQh4kku4eOiZOJ4q3XLCNFsW8XmueZKYLYrbX6hCElxVZViQegcslM6W89m_GCnpO0JsQ1edmCMYf44WIR0E1E8Kg-lSmgNWRlaIEDSL55GWZnhDUZ-W6LvVOfWJicnK2hSSkt5tCl84bpG5uuWTBedI770_pT0TqtAyaTvbuzMN1Rsf3ELy3A9IMAE"/>
</div>
</div>
</div>
</section>
{/*  Grains Benefits Bento Grid  */}
<section className="py-24 px-gutter max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-md text-headline-md text-primary mb-4">Meet the Millets</h2>
<p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Discover the unique nutritional profiles of our favorite ancient grains, carefully selected for their health benefits and versatile flavors.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Ragi Card  */}
<div className="bg-surface-container-high border border-outline-variant/30 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-secondary/30 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-[120px] text-secondary">grass</span>
</div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-surface-container-highest rounded-full font-label-md text-secondary mb-4">Finger Millet</div>
<h3 className="font-headline-md text-display-lg-mobile text-primary mb-4">Ragi</h3>
<p className="font-body-md text-on-surface-variant mb-6">A powerhouse of calcium and amino acids. Known to aid in bone health and keeping you cool.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-medium">High Calcium</span>
<span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-medium">Gluten-Free</span>
</div>
</div>
</div>
{/*  Korra Card  */}
<div className="bg-surface-container-high border border-outline-variant/30 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-secondary/30 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-[120px] text-secondary">eco</span>
</div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-surface-container-highest rounded-full font-label-md text-secondary mb-4">Foxtail Millet</div>
<h3 className="font-headline-md text-display-lg-mobile text-primary mb-4">Korra</h3>
<p className="font-body-md text-on-surface-variant mb-6">Rich in dietary fiber and complex carbohydrates. Excellent for steady energy release and digestion.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-medium">High Fiber</span>
<span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-medium">Low GI</span>
</div>
</div>
</div>
{/*  Jonna Card  */}
<div className="bg-surface-container-high border border-outline-variant/30 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-secondary/30 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-[120px] text-secondary">agriculture</span>
</div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-surface-container-highest rounded-full font-label-md text-secondary mb-4">Sorghum</div>
<h3 className="font-headline-md text-display-lg-mobile text-primary mb-4">Jonna</h3>
<p className="font-body-md text-on-surface-variant mb-6">Packed with antioxidants and essential minerals. A robust grain that supports heart health and immunity.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-medium">Antioxidants</span>
<span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-medium">Heart Healthy</span>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-container-max mx-auto px-gutter">
<div className="text-center mb-16">
<h2 className="font-headline-md text-headline-md text-primary mb-4">Why Millets?</h2>
<p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Beyond their rich history, millets are nutritional powerhouses that offer a sustainable path to modern wellness. Here is how they nourish your soul and the planet.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/*  Benefit 1  */}
<div className="flex gap-6 p-8 bg-surface-container rounded-xl border border-outline-variant/20 shadow-md">
<div className="flex-shrink-0">
<span className="material-symbols-outlined text-[48px] text-secondary">nutrition</span>
</div>
<div>
<h3 className="font-headline-md text-display-lg-mobile text-primary mb-2">Nutrient Density</h3>
<p className="font-body-md text-on-surface-variant">Millets are exceptionally rich in essential minerals like magnesium, potassium, and iron, providing a natural boost to your daily nutritional intake.</p>
</div>
</div>
{/*  Benefit 2  */}
<div className="flex gap-6 p-8 bg-surface-container rounded-xl border border-outline-variant/20 shadow-md">
<div className="flex-shrink-0">
<span className="material-symbols-outlined text-[48px] text-secondary">digest</span>
</div>
<div>
<h3 className="font-headline-md text-display-lg-mobile text-primary mb-2">Digestive Health</h3>
<p className="font-body-md text-on-surface-variant">High in dietary fiber, millets act as a prebiotic to support healthy gut bacteria and ensure smooth digestion throughout the day.</p>
</div>
</div>
{/*  Benefit 3  */}
<div className="flex gap-6 p-8 bg-surface-container rounded-xl border border-outline-variant/20 shadow-md">
<div className="flex-shrink-0">
<span className="material-symbols-outlined text-[48px] text-secondary">language</span>
</div>
<div>
<h3 className="font-headline-md text-display-lg-mobile text-primary mb-2">Sustainable Choice</h3>
<p className="font-body-md text-on-surface-variant">Millets are climate-resilient crops that require significantly less water than rice or wheat, making them a choice that's good for you and the Earth.</p>
</div>
</div>
{/*  Benefit 4  */}
<div className="flex gap-6 p-8 bg-surface-container rounded-xl border border-outline-variant/20 shadow-md">
<div className="flex-shrink-0">
<span className="material-symbols-outlined text-[48px] text-secondary">favorite</span>
</div>
<div>
<h3 className="font-headline-md text-display-lg-mobile text-primary mb-2">Heart Health</h3>
<p className="font-body-md text-on-surface-variant">Rich in antioxidants and healthy fats, regular millet consumption helps maintain healthy cholesterol levels and supports overall cardiovascular function.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="font-body-md italic text-primary">"Rooted in Tradition, Nourishing Your Soul."</p>
</div>
</div>
</section><footer className="bg-surface-container-highest w-full py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-gutter max-w-container-max mx-auto text-center md:text-left">
<div className="flex flex-col items-center md:items-start space-y-4">
<div className="font-display-lg text-display-lg-mobile text-primary">Swatchata Cafe</div>
<p className="text-on-surface font-body-md opacity-80">© 2024 Swatchata Cafe. Rooted in Tradition, Nourishing Your Soul.</p>
</div>
<div className="flex flex-col space-y-3">
<a className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md" href="/">Millet Health Facts</a>
<a className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md" href="/">Our Locations</a>
</div>
<div className="flex flex-col space-y-3">
<a className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md" href="/">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md" href="/">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
