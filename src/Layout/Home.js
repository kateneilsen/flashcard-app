import React from "react";
import CreateDeckButton from "./Deck/CreateDeckButton";
import { Link } from "react-router-dom";
import DeleteDeck from "./Deck/DeleteDeck";

function Home({ decks }) {
  return (
    <div>
      <CreateDeckButton />
      <div>
        {decks.map((deck) => (
          <div key={deck.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{deck.name}</h5>
              <p>{`${deck.cards.length} cards`}</p>
              <p className="card-text">{deck.description}</p>
              <Link to={`/decks/${deck.id}`} className="btn btn-secondary">
                View
              </Link>
              <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
                Study
              </Link>
              <DeleteDeck deckId={deck.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
