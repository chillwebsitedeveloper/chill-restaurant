export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="text-xl font-bold tracking-tight">La Piazza</span>
        <div className="flex items-center gap-6">
          <a href="#menu" className="text-sm text-stone-400 hover:text-white transition-colors">
            Menu
          </a>
          <a href="#hours" className="text-sm text-stone-400 hover:text-white transition-colors">
            Hours
          </a>
          <a
            href="mailto:contact.chillweb@gmail.com"
            className="text-sm bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto text-center px-6 py-28">
        <p className="text-sm uppercase tracking-widest text-amber-400 mb-4">
          Authentic Italian Cuisine
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Made with<br />Passion
        </h1>
        <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto">
          Fresh pasta, wood-fired pizza, and traditional recipes passed down through generations.
        </p>
        <a
          href="#menu"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          View Our Menu
        </a>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Our Menu</h2>
        <p className="text-stone-400 text-center mb-12">A taste of Italy, made fresh daily</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Margherita Pizza</h3>
              <span className="text-amber-400 font-semibold">$14</span>
            </div>
            <p className="text-stone-400 text-sm">San Marzano tomatoes, fresh mozzarella, basil, olive oil</p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Carbonara</h3>
              <span className="text-amber-400 font-semibold">$16</span>
            </div>
            <p className="text-stone-400 text-sm">House-made fettuccine, guanciale, pecorino, egg yolk</p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Burrata Salad</h3>
              <span className="text-amber-400 font-semibold">$12</span>
            </div>
            <p className="text-stone-400 text-sm">Creamy burrata, heirloom tomatoes, arugula, balsamic glaze</p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Tiramisu</h3>
              <span className="text-amber-400 font-semibold">$10</span>
            </div>
            <p className="text-stone-400 text-sm">Espresso-soaked ladyfingers, mascarpone, cocoa powder</p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Osso Buco</h3>
              <span className="text-amber-400 font-semibold">$24</span>
            </div>
            <p className="text-stone-400 text-sm">Braised veal shank, gremolata, saffron risotto</p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Panna Cotta</h3>
              <span className="text-amber-400 font-semibold">$9</span>
            </div>
            <p className="text-stone-400 text-sm">Vanilla bean cream, seasonal berry compote</p>
          </div>

        </div>
      </section>

      {/* HOURS & LOCATION */}
      <section id="hours" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">Hours</h3>
            <p className="text-stone-400 text-sm">Mon – Thu: 11am – 10pm</p>
            <p className="text-stone-400 text-sm">Fri – Sat: 11am – 11pm</p>
            <p className="text-stone-400 text-sm">Sunday: 12pm – 9pm</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">Location</h3>
            <p className="text-stone-400 text-sm">123 Italian Avenue</p>
            <p className="text-stone-400 text-sm">Downtown, NY 10001</p>
            <p className="text-stone-400 text-sm">(555) 123-4567</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-800 mt-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            © 2025 La Piazza. All rights reserved.
          </p>
          <p className="text-sm text-stone-400">
            Built by Chill Web Dev
          </p>
        </div>
      </footer>

    </main>
  );
}