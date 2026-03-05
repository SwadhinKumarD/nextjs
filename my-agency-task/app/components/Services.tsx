const services = [
  { title: "UI/UX Design", desc: "Crafting intuitive and beautiful user interfaces." },
  { title: "Web Development", desc: "Building fast, responsive, and scalable websites." },
  { title: "Digital Marketing", desc: "Boosting your brand visibility and engagement." }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}