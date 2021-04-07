// pascal case for naming react components

import React from 'react';

function EmojiCard(props) {

    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">{props.emoji}</span>
                <span>{props.emojiname}</span>
            </dt>
            <dd>
                {props.emojidescription};
            </dd>
        </div>
    )
}

export default EmojiCard;