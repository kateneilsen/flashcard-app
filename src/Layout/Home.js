import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Decks from "./Decks";
import CreateDeckButton from "./Deck/CreateDeckButton";

function Home() {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState({});

  return (
    <div>
      <CreateDeckButton />

      <Decks decks={decks} setDecks={setDecks} />
    </div>
  );
}

export default Home;
