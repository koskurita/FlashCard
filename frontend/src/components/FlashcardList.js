import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({flashcards}) {




  return (
    <div className="card-grid">
        {flashcards.map(flashcard => {
            // id is used so it doesnt rerender flashcards that have not changed.
            return <Flashcard flashcard={flashcard} key={flashcard.id}/>
        })}
    </div>
  )
}
