import React from "react";
import { Link, useParams } from "react-router-dom";
import DeleteCard from "./DeleteCard";

export default function CardsList({ cards }) {
  const { deckId } = useParams();
  return cards.map((card) => (
    <div key={card.id} className="card mb-2">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <div>{card.front}</div>
          </div>
          <div className="col-sm-6">
            <div>{card.back}</div>

            <div className="row">
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
  ));
}
