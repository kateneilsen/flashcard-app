import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Decks from "./Decks";
import CreateDeckButton from "./Deck/CreateDeckButton";

function Home() {
  return (
    <div>
      <CreateDeckButton />
    </div>
  );
}

export default Home;
