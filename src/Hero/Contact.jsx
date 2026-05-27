import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (API call or navigation)
    alert("Message sent (demo)");
    e.target.reset();
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
            <p className="text-gray-600">Have questions or need help planning your trip? Send us a message and we'll get back to you shortly.</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Address</h3>
                <p className="text-gray-500">Aurangabad, Maharashtra</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Email</h3>
                <p className="text-gray-500">smarttrip@gmail.com</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-500">+91 XXXXXXXXXX</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" type="text" name="firstName" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" type="text" name="lastName" />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" type="email" name="email" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea required rows="5" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" name="message"></textarea>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;