import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeckForm from "./Deck/CreateDeckForm";
import Deck from "./Deck/Deck";
import StudyDeck from "./Study/StudyDeck";
import AddCard from "./Card/AddCard";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/decks/new">
            <CreateDeckForm />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
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
