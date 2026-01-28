
import Navbar from "./Navbar";
import { BEACH_IMAGE } from "./beachImage";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen font-sans">
      <Navbar />

      <main className="pt-20">
        {/* Home Section with Waikiki Beach Background */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-24 relative"
          style={{
            backgroundImage: `url(${BEACH_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/40 dark:bg-black/60 backdrop-blur-sm z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">Hawai'i Mobile Dental</h1>
            <p className="max-w-2xl text-lg md:text-2xl text-white/90 mb-8 drop-shadow">We are the only Mobile Dental Service in Hawaiʻi serving all Islands. Comprehensive care delivered to you—anywhere, anytime.</p>
            <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800 transition">Book Appointment</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-white dark:bg-zinc-900">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">Our Services</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-zinc-800 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">Mobile Exams & X-Rays</h3>
              <p>Comprehensive dental exams and digital x-rays at your location.</p>
            </div>
            <div className="bg-blue-50 dark:bg-zinc-800 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">Preventive Care</h3>
              <p>Cleanings, fluoride, and sealants for all ages—at home, school, or work.</p>
            </div>
            <div className="bg-blue-50 dark:bg-zinc-800 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">Restorative Dentistry</h3>
              <p>Fillings, crowns, and more, delivered with comfort and convenience.</p>
            </div>
          </div>
        </section>

        {/* Meet the Doctor Section */}
        <section id="doctor" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-zinc-900 dark:to-blue-950">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">Meet the Doctor</h2>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 rounded-full bg-blue-200 dark:bg-blue-900 flex items-center justify-center text-5xl font-bold text-blue-700 dark:text-blue-300">BH</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Dr. Bradley T. Hawkins, D.D.S</h3>
              <p className="text-zinc-700 dark:text-zinc-200">Founder of Hawai'i Mobile Dental Inc. Dr. Hawkins is dedicated to providing care to patients who cannot be seen in a traditional setting, serving all islands with compassion and expertise.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 px-4 bg-white dark:bg-zinc-900">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">Portfolio</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-zinc-800 rounded-xl p-6 shadow flex flex-col items-center">
              <div className="w-32 h-32 bg-zinc-200 dark:bg-zinc-700 rounded-lg mb-4" />
              <p>Mobile dental setup at a local school</p>
            </div>
            <div className="bg-blue-50 dark:bg-zinc-800 rounded-xl p-6 shadow flex flex-col items-center">
              <div className="w-32 h-32 bg-zinc-200 dark:bg-zinc-700 rounded-lg mb-4" />
              <p>Community outreach event on Maui</p>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-black">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">Community</h2>
          <div className="max-w-3xl mx-auto text-center text-zinc-700 dark:text-zinc-200">
            <p>We proudly serve all islands, bringing dental care to nursing homes, schools, workplaces, and homes. Our mission is to restore oral health and boost confidence for everyone in Hawai'i.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-white dark:bg-zinc-900">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">Contact Us</h2>
          <form className="max-w-xl mx-auto grid gap-6 bg-blue-50 dark:bg-zinc-800 rounded-xl p-8 shadow">
            <input className="p-3 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" type="text" placeholder="Name *" required />
            <input className="p-3 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" type="text" placeholder="Address *" required />
            <input className="p-3 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" type="email" placeholder="Email *" required />
            <input className="p-3 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" type="tel" placeholder="Phone *" required />
            <input className="p-3 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" type="text" placeholder="Subject" />
            <textarea className="p-3 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" placeholder="Message" rows={4} />
            <button type="submit" className="px-6 py-3 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Submit</button>
          </form>
          <div className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
            <div>95 - 390 Kuahelani Ave, 3Ac-1193, Mililani, HI 96789, USA</div>
            <div><a href="mailto:brushandfloss@hawaiimobiledental.com" className="underline">brushandfloss@hawaiimobiledental.com</a></div>
            <div><a href="tel:8082019273" className="underline">(808) 201-9273</a></div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
          ©2026 by Hawai'i Mobile Dental Inc. | Aloha!
        </footer>
      </main>
    </div>
  );
}
