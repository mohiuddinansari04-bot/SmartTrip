import React from "react";
import { useState } from "react";
import Cardslist from "./Cardslist";
function Btn( ){
const [showCards, setShowCards] = useState(false);
const handleClick = () => {
  setShowCards(true);
}

  return(
    <div className="flex justify-around text-white mb-5 flex-col md:flex-row  gap-4">
      <button onClick={handleClick} className="text-2xl font-bold bg-sky-500 hover:bg-blue-600 rounded-2xl py-2 p-4">See for more</button>

      {showCards && <Cardslist/>}
    </div>
  )
}

export default Btn;