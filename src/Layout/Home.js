import React, { useState, useEffect } from "react";
import Decks from "./Decks";
import CreateDeckButton from "./Deck/CreateDeckButton";

function Home() {
  const [decks, setDecks] = useState([]);
  const [popup, setPopup] = useState({
    show: false, //initial values set to false and null
    id: null,
  });

  return (
    <div>
      <CreateDeckButton />

      <Decks decks={decks} setDecks={setDecks} />
    </div>
  );
}

export default Home;
