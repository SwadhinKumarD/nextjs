export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">Creative Digital Agency</h1>
        <p className="text-xl mb-8 opacity-90">We build modern digital experiences that drive growth.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          View Work
        </button>
      </div>
    </section>
  );
}