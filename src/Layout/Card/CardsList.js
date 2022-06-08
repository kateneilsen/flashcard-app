import React from "react";
import { Link, useParams } from "react-router-dom";
import DeleteCard from "./DeleteCard";

export default function CardsList({ cards }) {
  const { deckId } = useParams();
  return cards.map((card) => (
    <div key={card.id} className="card mb-2">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p>{card.front}</p>
            </div>
            <div className="col-6 ">
              <div className="row justify-content-end">
                <p>{card.back}</p>

                <Link
                  to={`/decks/${deckId}/cards/${card.id}/edit`}
                  className="btn btn-secondary mr-2 mb-2 mt-4"
                >
                  Edit
                </Link>

                <DeleteCard card={card} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
