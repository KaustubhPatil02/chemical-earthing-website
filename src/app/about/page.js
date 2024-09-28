export default function About() {
  return (
    <div className="p-16 bg-gray-50">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">About Us</h1>
      <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mb-8 text-xl text-gray-700 md:grid-cols-2">
        <p className="text-left">
          At Chemical Earthing Solutions, we are passionate about safety and efficiency.
        </p>
        <p className="text-right">
          For over 10 years, we have been delivering high-quality, reliable earthing solutions for businesses and individuals alike.
        </p>
        <p className="text-left">
          Our team of experts is dedicated to providing the best service and support.
        </p>
        <p className="text-right">
          We use the latest technology and materials to ensure the highest standards of safety and performance.
        </p>
      </div>
    </div>
  );
}