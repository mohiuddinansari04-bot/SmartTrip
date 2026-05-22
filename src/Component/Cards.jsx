import React from "react";
function Cards() {
  const cardData = [
    {
      id: 1,
      title: "go to beach",
      Image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      dose: "Enjoy beautiful beaches and amazing sunsets in Goa.",
    },
    {
      id: 2,
      title: "see the mountain",
      Image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      dose: "Explore beautiful mountains and nature views.",
    },
    {
      id: 3,
      title: "visit the city",
      Image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      dose: "Discover amazing city life and modern architecture.",
    },

    {
      id: 4,
      title: "explor the world",
      Image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
      dose: "Experience the beauty of Paris and the Eiffel Tower.",
    },
    {
      id: 5,
      title: "Explore Dubai",
      Image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      dose: "Enjoy luxury lifestyle and amazing skyscrapers.",
    },
    {
      id: 6,
      title: "Visit Switzerland",
      Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
      dose: "See snowy mountains and peaceful lakes.",
    }
    

    // space-y-2 flex flex-col lg:flex-row px-4 py-3 justify-around mt-5 mb-5
    

  ]

  return (
    <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 px-4 mt-5 mb-5">
      {cardData.map((card) => (
        <div key={card.id} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
          {/* Card Image */}
          <img src={card.Image} alt={card.title}
            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-400" />

          <div className="p-5">
            <h2 className="text-2xl font-bold  text-gray-800">{card.title}</h2>

            {/*paragraph */}
            <p className="text-gray-600 mt-3"> {card.dose}</p>

            {/* Button */}
            <button className="bg-blue-500 rounded mt-2 px-5 py-2 text-white hover:bg-blue-600">
              Explore
            </button>

          </div>

        </div>


      ))}
    </div>
  )
}
export default Cards;