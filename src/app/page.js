import Head from 'next/head';
import Contact from './contact/page';
import Services from './services/page';
import Products from './products/page';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chemical Earthing Solutions</title>
        <meta name="description" content="Reliable and affordable chemical earthing services." />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <header className="p-6 text-center text-white bg-green-600">
          <h1 className="text-3xl font-bold">Chemical Earthing Solutions</h1>
          <p>Leading the industry with reliable earthing products & services</p>
        </header>

        <section className="p-10 text-center">
          <h2 className="text-2xl font-bold">Welcome to Chemical Earthing Solutions</h2>
          <p className="text-gray-700">
            We provide the best chemical earthing products, ensuring your safety and efficient grounding solutions.
          </p>
        </section>

        <section className="p-10 bg-white">
          <h2 className="text-xl font-bold">Our Services</h2>
          <ul className="pl-5 mt-3 text-gray-700 list-disc">
            <li>Chemical Earthing Installation</li>
            <li>Maintenance and Support</li>
            <li>Customized Solutions</li>
          </ul>
        </section>
        {/* <Services /> */}
        <Products />

        <Contact />

        <footer className="p-6 text-center text-white bg-gray-800">
          <p>&copy; {new Date().getFullYear()} Chemical Earthing Solutions. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
