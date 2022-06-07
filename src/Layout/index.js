import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeckForm from "./Deck/CreateDeckForm";
import Deck from "./Deck/Deck";
import Study from "./Study/Study";
import AddCard from "./Card/AddCard";
import EditDeck from "./Deck/EditDeck";
import EditCard from "./Card/EditCard";
import NotEnough from "./Study/NotEnough";
import DeleteDeck from "./Deck/DeleteDeck";
import { Route, Switch } from "react-router-dom";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDecks() {
      try {
        const response = await listDecks(abortController.signal);
        setDecks(response);
      } catch (error) {
        console.log(error);
      }

      return () => {
        abortController.abort();
      };
    }
    loadDecks();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/decks/new">
            <CreateDeckForm />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck decks={decks} />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study decks={decks} />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route exact path="/">
            <Home decks={decks} />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
