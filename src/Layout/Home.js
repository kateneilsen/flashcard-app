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
          <div key={deck.id} className="card mb-2">
            <div className="card-body">
              <div className="row mr-1 align-items-center">
                <h5 className="card-title col-8">{deck.name}</h5>

                <p className="text-right col-4 ">{`${deck.cards.length} cards`}</p>
              </div>
              <div className="row">
                <div className="col-10">
                  <p className="card-text ml-0 mb-3">{deck.description}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-10">
                  <Link
                    to={`/decks/${deck.id}`}
                    className="btn btn-secondary   mr-2 mb-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/decks/${deck.id}/study`}
                    className="btn btn-primary  mb-2"
                  >
                    Study
                  </Link>
                </div>
                <div className="col-2 justify-content-end">
                  <DeleteDeck deckId={deck.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
