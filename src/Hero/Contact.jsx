import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (API call or navigation)
    alert("Message sent (demo)");
    e.target.reset();
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info (styled panel) */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <div className="p-8 bg-gradient-to-r from-sky-600 to-indigo-600 text-white sm:p-12 lg:h-full">
              <h2 className="text-3xl font-extrabold">Let's plan your next trip</h2>
              <p className="mt-4 text-sky-100/90">Tell us where you want to go and we’ll find the best deals, guides, and itineraries for you.</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20">📍</span>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-sky-100 text-sm">Aurangabad, Maharashtra</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20">✉️</span>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sky-100 text-sm">smarttrip@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20">📞</span>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-sky-100 text-sm">+91 XXXXXXXXXX</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white sm:p-8">
              <p className="text-sm text-gray-600">We typically reply within one business day.</p>
            </div>
          </div>

          {/* Contact Form (card) */}
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Send us a message</h3>
            <p className="text-sm text-gray-500 mt-2">Share a few details and we'll be in touch.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input required className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" name="firstName" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input required className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" name="lastName" />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="email" name="email" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea required rows="5" className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" name="message"></textarea>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500">Send Message</button>
              <span className="text-sm text-gray-500 hidden sm:inline">Or call us: <strong className="text-gray-900">+91 XXXXXXXXXX</strong></span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;