export default function Contact() {
    return (
      <div className="min-h-screen p-10 bg-gray-100">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="mt-3 text-gray-700">We'd love to hear from you! Fill out the form below or contact us at <a href="mailto:info@chemicalearthing.com" className="text-blue-600">info@chemicalearthing.com</a>.</p>
  
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border border-gray-300" rows="4"></textarea>
          </div>
          <button type="submit" className="p-2 text-white bg-green-600">Send Message</button>
        </form>
      </div>
    );
  }
  