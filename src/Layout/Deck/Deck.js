import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import DeckNav from "./DeckNav";
import DeleteDeck from "./DeleteDeck";
import CardsList from "../Card/CardsList";

function Deck() {
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deckId, abortController.signal);
        setDeck(response);
      } catch (error) {
        console.log(error);
      }

      return () => {
        abortController.abort();
      };
    }
    loadDeck();
  }, [deckId]);

  if (deck.length === 0) return null;
  return (
    <div className="container">
      <DeckNav deck={deck} deckId={deckId} />
      <div key={deck.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>

          <div className="row mt-2">
            <div className="col-10">
              <Link
                to={`/decks/${deckId}/edit`}
                className="btn btn-secondary mb-2 mr-2 "
              >
                Edit
              </Link>

              <Link
                to={`/decks/${deckId}/study`}
                className="btn btn-primary mb-2 mr-2"
              >
                Study
              </Link>

              <Link
                to={`/decks/${deckId}/cards/new`}
                className="btn btn-primary mb-2 mr-2"
              >
                Add Cards
              </Link>
            </div>
            <div className="col-2">
              <DeleteDeck deck={deck} setDeck={setDeck} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Cards</h1>
        <CardsList cards={deck.cards} />
      </div>
    </div>
  );
}

export default Deck;
