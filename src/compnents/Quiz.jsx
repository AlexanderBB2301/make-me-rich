import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import correct from "../assets/correct.mp3";
import incorrect from "../assets/incorrect.mp3";
import play from "../assets/play.mp3";

const Quiz = ({ quizData, setTimeOut, setQuestionId, questionId, setStop }) => {
  const [selectQuestion, setSelectQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [className, setClassName] = useState("eachAnswer");
  const [playGame] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [incorrectAnswer] = useSound(incorrect);

  useEffect(() => {
    playGame();
  }, [playGame]);

  useEffect(() => {
    setSelectQuestion(quizData[questionId - 1]);
  }, [quizData, questionId]);

  const wait = (duration, callback) => {
    setTimeOut(() => {
      callback();
    }, duration);
  };

  const handleAnswerSelected = (a) => {
    setUserAnswer(a);
    setClassName("eachAnswer active");
    wait(3500, () => {
      setClassName(
        a.correct === true ? "eachAnswer correct" : "eachAnswer incorrect"
      );
    });
    wait(10000, () => {
      if (a.correct) {
        correctAnswer();
        wait(2000, () => {
          setQuestionId((prev) => prev + 1);
          setUserAnswer(null);
        });
      } else {
        incorrectAnswer();
        wait(2000, () => {
          setTimeOut(true);
        });
        // setStop(true);
      }
    });
  };

  return (
    <div className="quizContainer">
      <div className="questions">
        {/* <p> {quizData[0].question}</p> */}
        {quizData[0]?.question}
      </div>
      <div className="answers">
        {quizData[0]?.answers.map((a) => (
          <div
            className={userAnswer === a ? className : "eachAnswer"}
            onClick={() => !userAnswer && handleAnswerSelected(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
