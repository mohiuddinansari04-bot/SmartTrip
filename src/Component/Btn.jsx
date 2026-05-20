import React from "react";
import { useState } from "react";
import Cardslist from "./Cardslist.jsx";
function Btn( ){
const [showCards, setShowCards] = useState(false);
const handleClick = () => {
  setShowCards(true);
}

  return(
    <div className="flex justify-around text-white mb-5 flex-col md:flex-row py-4">
      <button onClick={handleClick} className="text-2xl font-bold border-black sha bg-green-500 hover:bg-green-600 rounded-2xl px-10 py-2">See for more</button>

      {showCards && <Cardslist/>}
    </div>
  )
}

export default Btn;