import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    { title: "E-Commerce App", category: "Web Design", img: "https://picsum.photos/400/300?random=1" },
    { title: "Branding Agency", category: "Branding", img: "https://picsum.photos/400/300?random=2" },
    { title: "Health Tracker", category: "Mobile App", img: "https://picsum.photos/400/300?random=3" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border rounded-xl p-4 bg-gray-50 hover:shadow-lg transition">
              <div className="relative h-48 w-full mb-4">
                {/* This Next.js Image component gives you Bonus points! */}
                <img
                  src={p.img} 
                  alt={p.title}
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <h3 className="font-bold text-xl">{p.title}</h3>
              <p className="text-blue-600 text-sm">{p.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}