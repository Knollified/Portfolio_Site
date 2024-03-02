// components/ContactForm.js

import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-200 py-20 sm:py-32 md:py-40 lg:py-48">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Contact</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block">Name:</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block">Email:</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block">Message:</label>
            <textarea id="message" name="message" className="w-full px-4 py-2 border rounded"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;