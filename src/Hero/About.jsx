import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
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
];

  return (
    <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-sky-700 mb-4">
        About SmartTrip
      </h1>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Explore the world with SmartTrip and create unforgettable memories
        with comfort, adventure, and luxury travel experiences.
      </p>
    </div>

    {/* About Sections */}
    <div className="space-y-14 ">

      {aboutData.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-10 bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition duration-300`}
        >

          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-sky-700 mb-5">
              {item.title}
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-6">
              {item.desc}
            </p>

            <button className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl transition duration-300">
              Explore More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-350px object-cover rounded-3xl"
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
