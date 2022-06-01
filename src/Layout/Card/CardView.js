import React from "react";
import { readDeck } from "../../utils/api";

export default function CardView({ deck }) {
  return <div>{deck.name}: Add Card</div>;
}
