import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Explore the world with SmartTrip",
    description: "Discover amazing places and make every journey unforgettable.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Find your perfect getaway",
    description: "Travel to beautiful beaches, vibrant cities, and peaceful mountain escapes.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Adventure is waiting",
    description: "Book flights, hotels, and experiences with ease and confidence.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Relax, explore, repeat",
    description: "Plan your next trip and enjoy each destination with SmartTrip.",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {slides[currentIndex].title}
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl leading-8 mb-6">
          {slides[currentIndex].description}
        </p>
        <button className="transition duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.8)] hover:scale-105 text-3xl bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded">
          Start your journey
        </button>

        <div className="mt-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-transform duration-300 ${
                index === currentIndex ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
 