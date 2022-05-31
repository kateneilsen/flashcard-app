import React from "react";

function NotEnough() {
  return (
    <div>
      <h1>Not enough cards.</h1>
      <p>You need at least 3 cards to study. There are 2 cards in this deck.</p>
      <button>+ Add Cards</button>
    </div>
  );
}

export default NotEnough;
