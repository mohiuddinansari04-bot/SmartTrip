import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate();

  const featureCards = [
    {
      id: 1,
      title: "24/7 Travel Support",
      info: "Our team is ready to help you anytime, anywhere, so your trip stays smooth from booking to return.",
      icon: "🌍",
    },
    {
      id: 2,
      title: "Best Price Guarantee",
      info: "We compare top vendors and secure the best travel deals so you can travel more for less.",
      icon: "💎",
    },
    {
      id: 3,
      title: "Custom Itineraries",
      info: "Every plan is tailored to your style, whether you want relaxation, adventure, culture, or luxury.",
      icon: "✈️",
    },
  ];

 const aboutData = [
  {
    id: 1,
    title: "Beautiful Beaches",
    desc: "Enjoy relaxing sunsets and explore the most beautiful beaches around the world with SmartTrip.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Mountain Adventures",
    desc: "Experience thrilling adventures, trekking, and breathtaking mountain landscapes.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 3,
    title: "Luxury Hotels",
    desc: "Book premium hotels and enjoy comfort, luxury, and unforgettable hospitality.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 4,
    title: "City Exploration",
    desc: "Discover famous cities, shopping streets, nightlife, and cultural attractions.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    id: 5,
    title: "Wildlife Safaris",
    desc: "Get closer to nature with guided safaris, wildlife tours, and unforgettable animal encounters.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 6,
    title: "Cruise Journeys",
    desc: "Sail along coastlines with luxury cruises, scenic routes, and full-service travel packages.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
];

  return (
    <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-sky-700 mb-4">
        About SmartTrip
      </h1>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-8">
        Explore the world with SmartTrip and create unforgettable memories
        with comfort, adventure, and luxury travel experiences.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid gap-6 md:grid-cols-3 mb-16">
      {featureCards.map((card) => (
        <div
          key={card.id}
          className="group bg-white rounded-3xl p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-out"
        >
          <div className="text-5xl mb-4">{card.icon}</div>
          <h3 className="text-2xl font-bold text-sky-700 mb-3">{card.title}</h3>
          <p className="text-gray-600 leading-7">{card.info}</p>
        </div>
      ))}
    </div>

    {/* About Sections */}
    <div className="space-y-14 ">

      {aboutData.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-10 bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-300`}
        >

          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-sky-700 mb-5">
              {item.title}
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-6">
              {item.desc}
            </p>

            <button
              onClick={() => nav("/contact")}
              className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              Explore More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 overflow-hidden rounded-3xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-350px object-cover rounded-3xl transform transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      ))}

    </div>
  </div>
</section>
  );
};

export default About;
