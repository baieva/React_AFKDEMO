import React from 'react';

export function EventButton ({text, onclick}) {
    return(
    <button onClick={onclick}>
        {text}
    </button>
    )
}