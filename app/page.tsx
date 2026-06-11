"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./components/fade-in";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  fullDescription: string;
  image: string;
  featured?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Margherita Pizza",
    price: "$14",
    description: "San Marzano tomatoes, fresh mozzarella, basil, olive oil",
    fullDescription: "Our signature pizza starts with San Marzano tomatoes grown in the volcanic soil near Mount Vesuvius. Topped with hand-pulled mozzarella di bufala, fresh basil from our garden, and a drizzle of extra virgin olive oil. Baked in our wood-fired oven at 900°F for the perfect char.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    name: "Carbonara",
    price: "$16",
    description: "House-made fettuccine, guanciale, pecorino, egg yolk",
    fullDescription: "Traditional Roman carbonara made with house-rolled fettuccine, crispy guanciale from a local producer, aged pecorino romano, and a rich egg yolk emulsion. No cream. No shortcuts. Just pure, authentic flavor the way it's been made for generations.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Burrata Salad",
    price: "$12",
    description: "Creamy burrata, heirloom tomatoes, arugula, balsamic glaze",
    fullDescription: "Imported burrata from Puglia, served alongside peak-season heirloom tomatoes, peppery arugula, and a 25-year-aged balsamic reduction. Finished with Maldon sea salt and cold-pressed olive oil. Simple, fresh, unforgettable.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Tiramisu",
    price: "$10",
    description: "Espresso-soaked ladyfingers, mascarpone, cocoa powder",
    fullDescription: "Our tiramisu is made fresh daily with Illy espresso-soaked Savoiardi, velvety mascarpone cream from a family recipe, and a dusting of Valrhona cocoa powder. Served chilled after at least 12 hours of resting for the perfect texture.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Osso Buco",
    price: "$24",
    description: "Braised veal shank, gremolata, saffron risotto",
    fullDescription: "Slow-braised for 6 hours in white wine and aromatic vegetables, our osso buco is served with a bright gremolata of lemon zest, garlic, and parsley. Accompanied by saffron risotto from Carnaroli rice aged for one year. A true Milanese classic.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Panna Cotta",
    price: "$9",
    description: "Vanilla bean cream, seasonal berry compote",
    fullDescription: "Silky smooth panna cotta made with Madagascar vanilla beans and fresh cream from a local dairy. Topped with a seasonal berry compote that changes throughout the year — strawberries in spring, mixed berries in summer, figs in autumn, and citrus in winter.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <main className="min-h-screen bg-white text-gray-900">

            {/* MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors"
                >
                  ✕
                </button>
                {selectedItem.featured && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-amber-600 text-white px-2.5 py-0.5 rounded-full font-medium">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem.name}</h3>
                  <span className="text-xl font-bold text-amber-700">{selectedItem.price}</span>
                </div>
                <p className="text-gray-500 leading-relaxed">{selectedItem.fullDescription}</p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="mt-6 w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Back to Menu
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STICKY NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
        <div className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
          <span className="text-xl font-bold tracking-tight">La Piazza</span>
          <div className="flex items-center gap-6">
            <a href="#menu" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">Menu</a>
            <a href="#story" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">Our Story</a>
            <a href="#gallery" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">Gallery</a>
            <a href="#hours" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">Hours</a>
            <a
              href="mailto:contact.chillweb@gmail.com"
              className="text-sm bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </nav>

      {/* HERO WITH PHOTO */}
      <section className="relative h-[85vh] min-h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80&auto=format&fit=crop"
          alt="La Piazza restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6 max-w-3xl">
            <FadeIn delay={0.2}>
              <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-8" />
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-sm uppercase tracking-widest text-amber-300 mb-6">
                Authentic Italian Cuisine
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                Made with<br />Passion
              </h1>
            </FadeIn>
            <FadeIn delay={0.8}>
              <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
                Fresh pasta, wood-fired pizza, and traditional recipes
                passed down through generations.
              </p>
            </FadeIn>
            <FadeIn delay={1.0}>
              <a
                href="#menu"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-950 px-8 py-3.5 rounded-lg font-medium transition-colors"
              >
                View Our Menu
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-4 text-center">
          <FadeIn delay={0}>
            <p className="text-3xl md:text-4xl font-bold text-amber-400">15+</p>
            <p className="text-xs md:text-sm text-gray-400 mt-1">Years of Tradition</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-3xl md:text-4xl font-bold text-amber-400">200+</p>
            <p className="text-xs md:text-sm text-gray-400 mt-1">Recipes Crafted</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-3xl md:text-4xl font-bold text-amber-400">50K+</p>
            <p className="text-xs md:text-sm text-gray-400 mt-1">Happy Guests</p>
          </FadeIn>
        </div>
      </section>

      {/* CHEF'S SPECIAL */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <FadeIn direction="left">
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&auto=format&fit=crop"
                alt="Chef's special pizza"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div>
              <p className="text-sm uppercase tracking-widest text-amber-600 mb-4">Chef&apos;s Special</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">The Margherita</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our signature pizza, made with San Marzano tomatoes grown in the shadow
                of Mount Vesuvius, hand-pulled mozzarella di bufala, and fresh basil
                from our garden. Simple ingredients, extraordinary taste.
              </p>
              <p className="text-2xl font-bold text-amber-700 mb-6">$14</p>
              <a
                href="mailto:contact.chillweb@gmail.com"
                className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
              >
                Reserve to Try It
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* MENU WITH FOOD PHOTOS — NOW CLICKABLE */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Our Menu</h2>
          <p className="text-gray-400 text-center mb-16">Click any dish to see full details</p>
        </FadeIn>

        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <FadeIn key={item.name} delay={0.1 + index * 0.05}>
              <button
                onClick={() => setSelectedItem(item)}
                className={`w-full text-left flex gap-4 rounded-xl p-4 hover:shadow-md transition-all duration-300 ${
                  item.featured
                    ? "bg-amber-50/80 border border-amber-200/80 hover:border-amber-300"
                    : "bg-white border border-gray-100 hover:border-gray-200"
                }`}
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    {item.featured && (
                      <span className="text-[10px] uppercase tracking-wider bg-amber-600 text-white px-2 py-0.5 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-amber-700 font-semibold text-sm">{item.price}</p>
                    <span className="text-xs text-gray-400">Tap to view →</span>
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Our Space</h2>
            <p className="text-gray-400 text-center mb-16">Where every meal becomes a memory</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FadeIn delay={0.1}>
              <div className="relative h-72 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop"
                  alt="Plated dish"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-72 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop"
                  alt="Restaurant bar"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative h-72 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop"
                  alt="Dining area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <div className="w-12 h-0.5 bg-amber-400 mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Our Story</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                La Piazza was born from a simple dream — to bring the heart of Italy
                to our neighborhood. Our founder, Chef Marco, grew up in a small
                village outside Naples, watching his grandmother craft pasta by hand
                every Sunday.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, we honor that tradition with every dish we serve. No shortcuts.
                No compromises. Just honest food made with love, just like nonna taught us.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80&auto=format&fit=crop"
                alt="Chef Marco in the kitchen"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What Our Guests Say</h2>
            <p className="text-gray-400 text-center mb-16">Real words from real people</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;The best Italian food I&apos;ve had outside of Italy.
                  Every dish feels like home.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop"
                      alt="Maria S."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Maria S.</p>
                    <p className="text-xs text-gray-400">Regular Guest</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;We had our anniversary dinner here. The carbonara alone
                  was worth the trip. Absolutely perfect.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop"
                      alt="James R."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">James R.</p>
                    <p className="text-xs text-gray-400">Anniversary Dinner</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;Brought my family here for Sunday brunch. The kids loved
                  the panna cotta. We&apos;ll be back every week.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop"
                      alt="Sarah L."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Sarah L.</p>
                    <p className="text-xs text-gray-400">Family Brunch</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HOURS & LOCATION */}
      <section id="hours" className="max-w-3xl mx-auto px-6 py-24 text-center">
        <FadeIn>
          <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Visit Us</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-600">Hours</h3>
              <p className="text-gray-600 text-sm">Mon – Thu: 11am – 10pm</p>
              <p className="text-gray-600 text-sm">Fri – Sat: 11am – 11pm</p>
              <p className="text-gray-600 text-sm">Sunday: 12pm – 9pm</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-600">Location</h3>
              <p className="text-gray-600 text-sm">123 Italian Avenue</p>
              <p className="text-gray-600 text-sm">Downtown, NY 10001</p>
              <p className="text-gray-600 text-sm">(555) 123-4567</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-600">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Taste the Difference?
            </h2>
            <p className="text-amber-100 mb-8">
              Book your table today and experience authentic Italian dining.
            </p>
            <a
              href="mailto:contact.chillweb@gmail.com"
              className="inline-block bg-white text-amber-700 px-8 py-3.5 rounded-lg font-medium hover:bg-amber-50 transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 La Piazza. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built by Chill Web Dev
          </p>
        </div>
      </footer>

    </main>
  );
}