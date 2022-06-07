import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeckForm from "./Deck/CreateDeckForm";
import Deck from "./Deck/Deck";
import StudyDeck from "./Study/StudyDeck";
import AddCard from "./Card/AddCard";
import EditDeck from "./Deck/EditDeck";
import EditCard from "./Card/EditCard";
import { Route, Switch } from "react-router-dom";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDecks() {
      try {
        const response = await listDecks(abortController.signal);
        // console.log("setDecks:", response);
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
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/decks/new">
            <CreateDeckForm />
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route exact path="/decks/:deckId/edit">
            <EditDeck decks={decks} />
          </Route>

          <Route exact path="/decks/:deckId/study">
            <StudyDeck decks={decks} />
          </Route>

          <Route exact path="/decks/:deckId">
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
    </>
  );
}

export default Layout;
