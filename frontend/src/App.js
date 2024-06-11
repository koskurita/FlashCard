import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Switch -> Routes

import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./Navbar";
import Employee from "./components/Analyze";
import FlashcardList from "./components/FlashcardList";
import "./App.css";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = questionItem.correct_answer;
        const options = [...questionItem.incorrect_answers, answer];
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - 0.5),
        };
        // setFlashcards()
      }));
      console.log(res.data);
    });
  }, []);
  
  function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }



  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </Router>

      <div>
        <FlashcardList flashcards={flashcards} />
      </div>

      <div>
        <Employee />
      </div>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "what is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2",
    answer: "4",
    options: ["answer", "answer 1", "answer 2", "answer 3"],
  },
  {
    id: 3,
    question: "question 3",
    answer: "4",
    options: ["answer", "answer 1", "answer 2", "answer 3"],
  },
];

export default App;
