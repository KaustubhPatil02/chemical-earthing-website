'use client';
import { useState } from "react";

export default function Clients() {
  const clients = [
    { id: 1, name: "Client 1", image: "https://www.hubspot.com/hs-fs/hubfs/clientvscustomer_2.webp?width=595&height=400&name=clientvscustomer_2.webp", description: "Great service!" },
    { id: 2, name: "Client 2", image: "https://www.hubspot.com/hs-fs/hubfs/clientvscustomer_2.webp?width=595&height=400&name=clientvscustomer_2.webp", description: "Professional and reliable!" },
    { id: 3, name: "Client 3", image: "https://www.hubspot.com/hs-fs/hubfs/clientvscustomer_2.webp?width=595&height=400&name=clientvscustomer_2.webp", description: "Excellent work!" },
    { id: 4, name: "Client 4", image: "https://www.hubspot.com/hs-fs/hubfs/clientvscustomer_2.webp?width=595&height=400&name=clientvscustomer_2.webp", description: "Highly recommended!" },
    { id: 5, name: "Client 5", image: "https://www.hubspot.com/hs-fs/hubfs/clientvscustomer_2.webp?width=595&height=400&name=clientvscustomer_2.webp", description: "Top-notch service!" },
    { id: 6, name: "Client 6", image: "https://www.hubspot.com/hs-fs/hubfs/clientvscustomer_2.webp?width=595&height=400&name=clientvscustomer_2.webp", description: "Would hire again!" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  // Calculate the current group of clients to display
  const currentClients = clients.slice(currentIndex, currentIndex + cardsPerPage);

  // Handle dot click to set the current index
  const handleDotClick = (index) => {
    setCurrentIndex(index * cardsPerPage);
  };

  // Calculate the number of dot groups
  const numberOfDots = Math.ceil(clients.length / cardsPerPage);

  return (
    <section className="p-2 bg-gray-100" id="clients">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 md:text-4xl">
        What our clients say about us!
      </h2>

      {/* Horizontal Scroll Container for Cards */}
      <div className="flex justify-center space-x-6 overflow-x-auto scrollbar-hide">
        {currentClients.map((client) => (
          <div
            key={client.id}
            className="flex-shrink-0 w-64 p-6 bg-white rounded-lg shadow-lg md:w-80 lg:w-[350px]"
          >
            <img
              src={client.image}
              alt={client.name}
              className="object-cover w-full h-40 mb-4 rounded md:h-48"
            />
            <h3 className="mb-2 text-xl font-semibold text-gray-700 md:text-2xl">
              {client.name}
            </h3>
            <p className="text-gray-600">{client.description}</p>
          </div>
        ))}
      </div>

      {/* Dots Pagination - Only show on larger screens */}
      <div className="flex justify-center hidden mt-4 space-x-2 md:flex">
        {Array.from({ length: numberOfDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === Math.floor(currentIndex / cardsPerPage)
                ? "bg-blue-500"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
