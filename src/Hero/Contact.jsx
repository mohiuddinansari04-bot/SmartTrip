import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Planning a trip",
    contactMethod: "email",
    subscribe: true,
    message: "",
    attachment: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "Planning a trip",
      contactMethod: "email",
      subscribe: true,
      message: "",
      attachment: null,
    });
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
              <div className="mt-8 grid gap-3 text-sm text-sky-100/90">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Office hours</p>
                  <p>Mon - Fri: 9:00 AM to 7:00 PM</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Live support</p>
                  <p>Reply within one business day, and 24/7 emergency assistance available.</p>
                </div>
              </div>
              <div className="mt-8 border-t border-white/20 pt-6 text-sky-100/90">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Follow us</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 hover:bg-white/25">🌍 Instagram</a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 hover:bg-white/25">💬 WhatsApp</a>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white sm:p-8">
              <p className="text-sm text-gray-600">We typically reply within one business day.</p>
            </div>
          </div>

          {/* Contact Form (card) */}
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Send us a message</h3>
                <p className="text-sm text-gray-500 mt-2">Share a few details and we'll be in touch.</p>
              </div>
              {submitted ? (
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                  Message sent successfully!
                </span>
              ) : null}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  type="text"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="email"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              >
                <option>Planning a trip</option>
                <option>Booking request</option>
                <option>Travel advice</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="mt-4">
              <p className="block text-sm font-medium text-gray-700">Preferred contact method</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {[
                  { value: "email", label: "Email" },
                  { value: "phone", label: "Phone" },
                  { value: "whatsapp", label: "WhatsApp" },
                ].map((option) => (
                  <label key={option.value} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:border-sky-500">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={option.value}
                      checked={formData.contactMethod === option.value}
                      onChange={handleChange}
                      className="h-4 w-4 text-sky-600"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="inline-flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="h-4 w-4 text-sky-600"
                />
                Subscribe to travel deals and exclusive offers
              </label>

              <label className="block text-sm text-gray-700">
                Add itinerary or document (optional)
                <input
                  type="file"
                  name="attachment"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Send Message
              </button>
              <p className="text-sm text-gray-500">
                Or call us: <strong className="text-gray-900">+91 XXXXXXXXXX</strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;