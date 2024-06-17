# Language Learning FlashCard App

## Motivation
I'm learning Spanish and found that flashcards are really efficient way to expand vocabulary. 
I personally like to read articles or song lyrics to find new words that I haven't learned yet, but found the process of converting it into a flashcard on existing services such as Quizlet and Anki to be very tedius.
So, I decided to work on this project to make the process easier.


## Setting up
1. (Will update once I make the Makefile)
2. In the backend folder, run the following command in the terminal: python manage.py runserver
3. in the frontend folder, run: npm start
4. open you browser and go to **http://localhost:3000/**

## How to use
1. In the textbox, paste a block of text in Spanish
2. Press Enter
3. Go to Decks in the tabs section and select the newly created deck
4. To view the definition and the sentence the word was used in, click on the card.
5. Once you view the answer, select the difficulty level of the card using the following metric
   
      &nbsp;&nbsp;&nbsp;&nbsp;Again: Wasn't able to answer. The card will appear again soon.

      &nbsp;&nbsp;&nbsp;&nbsp;Hard: Wasn't able to answer, but had a tip of the tongue feeling. The card will appear again but with a larger interval than Again.
   
      &nbsp;&nbsp;&nbsp;&nbsp;Good: Was able to answer, but still need practice. The card will appear again but at a much larger interval than Hard.
   
      &nbsp;&nbsp;&nbsp;&nbsp;Easy: Already knew the answer. Card will not appear again unless changed in the options.
6. To view all cards in a deck, select options->view all cards.

## Prerequisites
(Will update once I finalize the project)

Python 3. All backend dependencies are listed in the requirement.txt file and frontend in the package.json file.
