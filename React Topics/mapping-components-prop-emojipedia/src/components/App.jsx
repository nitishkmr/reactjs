import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function createCard(e){
  return(
    <EmojiCard
      key={e.id}
      emoji={e.emoji}
      emojiname={e.name}
      emojidescription={e.meaning}
      />
  )
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
