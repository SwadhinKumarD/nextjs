export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-blue-500" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-blue-500" />
          <textarea placeholder="Message" rows={4} className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded font-bold transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}