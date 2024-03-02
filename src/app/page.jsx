import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Head from 'next/head';
import Projects from './components/Project';
import Blog from './components/Blog';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;