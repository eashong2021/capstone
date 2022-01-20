import './App.css';
import AppContext from './AppContext';
import { useState, useEffect } from 'react';
import questionsArray from './constants/questionsArray';
import Questions from './components/Questions';

function App() {

  let [questions, setQuestions] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [questionAnswer, setQuestionAnswer] = useState({});

  //call setQuestions and setQuestionAnswer once per render
  useEffect(() => {
    setQuestions(questionsArray);
    setQuestionAnswer(questionsArray[0]);
  }, []);

  //handle text changes
  let handleChangeInput = (e) => {
    setQuestionAnswer({
      ...questionAnswer,
      answer: e.target.value,
    });
  };

//next question button click, input is set to setAnswers
  let nextQuestion = (e) => {
    e.preventDefault();
    questions.map((question) => {
      if (question.resumeFieldId == questionAnswer.resumeFieldId) {
        setAnswers([
          ...answers,
          { ...question, answer: questionAnswer.answer },
        ]);
      }
    });

    //moves to next question index
    questions.map((qa, index) => {
      if (index <= questions.length) {
        if (qa.resumeFieldId === questionAnswer.resumeFieldId) {
          setQuestionAnswer(questions[index + 1]);
        }
      }
    });
  };

  return (
    <AppContext.Provider value={{
      state: {
        questionAnswer,
        questions,
        answers,
      },
      function: {
        handleChangeInput: handleChangeInput,
        nextQuestion: nextQuestion,
      },
    }}>
      <Questions/>
    </AppContext.Provider>
  );
}

export default App;
