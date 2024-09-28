'use client';
import Head from 'next/head';
import About from './about/page';
import Contact from './contact/page';
import { useState } from 'react';
import Clients from './clients/page';
import Image from 'next/image';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Head>
        <title>Chemical Earthing Solutions</title>
        <meta name="description" content="Reliable and affordable chemical earthing services." />
      </Head>

      {/* Navigation */}
      <nav className="flex items-center justify-between p-8 text-white bg-gray-900">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="hidden md:flex">
          <ul className="flex space-x-8 text-lg">
            <li className="cursor-pointer hover:text-gray-400">Home</li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#services">Services</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#clients">Our Clients</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center p-4 space-y-4 text-lg text-white bg-gray-900">
            <li className="cursor-pointer hover:text-gray-400">Home</li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#services">Services</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#clients">Clients</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-between min-h-screen px-8 py-16 bg-gray-900 md:flex-row">
        <div className="max-w-lg text-white">
          <h1 className="text-6xl font-bold leading-tight">
            Let&apos;s get earthing together
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Providing professional installation and custom solutions for your chemical earthing needs. Reliable, safe, and affordable services at your fingertips.
          </p>
          <div className="flex flex-col gap-2 md:flex-row">
            <button className="px-4 py-2 mt-4 text-base font-bold text-white transition bg-indigo-500 rounded-full hover:bg-indigo-600 md:px-6 md:py-3 md:mt-6 md:text-lg">
              Get Started
            </button>
            <a href="#clients" className="flex items-center justify-center px-4 py-2 mt-4 text-base font-bold text-white transition bg-indigo-500 rounded-full hover:bg-indigo-600 md:px-6 md:py-3 md:mt-6 md:text-lg">
              View Our Clients
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <Image
            src="https://www.raviearthing.com/wp-content/uploads/2020/02/Ravi-Earthing-Logo-1.png"
            alt="Illustration"
            width={384}
            height={384}
            className="h-96"
          />
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 text-center bg-gray-100" id="services">
        <h2 className="mb-8 text-4xl font-bold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 max-w-7xl">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <Image src="https://i.ytimg.com/vi/PgQnT94pd8I/maxresdefault.jpg" alt="Installation" width={640} height={360} className="object-cover w-full h-40 mb-4 rounded" />
            <h3 className="mb-4 text-2xl font-semibold">Earthing Installation</h3>
            <p className="text-gray-600">We provide professional installation services for chemical earthing systems, ensuring maximum safety.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <Image src="https://eshop.se.com/in/media/shoptimize/blog/post/b/l/blog-2.jpg" alt="Maintenance" width={640} height={360} className="object-cover w-full h-40 mb-4 rounded" />
            <h3 className="mb-4 text-2xl font-semibold">Maintenance & Support</h3>
            <p className="text-gray-600">Our team offers reliable maintenance services to keep your earthing system working flawlessly.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <Image src="https://www.iczgroup.com/wp-content/uploads/2017/09/Log_01_1.jpg" alt="Custom Solutions" width={640} height={360} className="object-cover w-full h-40 mb-4 rounded" />
            <h3 className="mb-4 text-2xl font-semibold">Custom Solutions</h3>
            <p className="text-gray-600">Get tailored chemical earthing solutions designed to meet your specific needs and requirements.</p>
          </div>
        </div>
      </section>

      <Clients />
      {/* Contact CTA Section */}
      <section className="py-20 text-center text-white bg-gray-900" id="contact">
        <h2 className="mb-6 text-4xl font-bold">Get in Touch</h2>
        <p className="mb-8 text-lg">Need chemical earthing services? Contact us for a free consultation today!</p>
        <button
          onClick={openModal}
          className="px-8 py-3 font-bold text-white transition bg-indigo-500 rounded-full hover:bg-indigo-600"
        >
          Contact Us
        </button>
        {isModalOpen && <Contact isOpen={isModalOpen} closeModal={closeModal} />}
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 bg-gray-800">
        <p>&copy; {new Date().getFullYear()} Chemical Earthing Solutions. All rights reserved.</p>
      </footer>
    </>
  );
}