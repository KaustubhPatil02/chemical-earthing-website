export default function Contact({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <button onClick={closeModal} className="absolute text-gray-500 top-4 right-4 hover:text-gray-700">
          &times;
        </button>
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Contact Us</h1>
        <p className="mb-12 text-lg text-center text-gray-700">Have questions or need assistance? We’re here to help!</p>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block font-semibold text-gray-700">Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600" rows="5"></textarea>
            </div>
            <button className="px-6 py-3 font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}