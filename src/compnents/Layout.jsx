import React, { useState, useMemo, useEffect } from "react";
import Quiz from "./Quiz";
import HomePage from "./HomePage";
import Timer from "./Timer";

const Layout = () => {
  const [questionId, setQuestionId] = useState(0);
  const [userName, setUserName] = useState(null);
  const [won, setWon] = useState("£ 0");
  const [timeOut, setTimeOut] = useState(false);

  const quizData = [
    {
      id: 0,
      question:
        "Which space shuttle first deployed The Hubble space telescope in 1990?",
      answers: [
        {
          text: "Columbia",
          correct: false,
        },
        {
          text: "Discovery",
          correct: true,
        },
        {
          text: "Atlantis",
          correct: false,
        },
        {
          text: "Titanic",
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: "How many gyroscopes are in Hubble?",
      answers: [
        {
          text: "6",
          correct: true,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "17",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "How long does it take for light from the Sun to reach Earth?",
      answers: [
        {
          text: "24 hours",
          correct: false,
        },
        {
          text: "2 seconds",
          correct: false,
        },
        {
          text: "5 minutes",
          correct: false,
        },
        {
          text: "8 minutes",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Which statement is true?",
      answers: [
        {
          text: "Mercury is almost 100% Nitrogen",
          correct: false,
        },
        {
          text: "Saturn is mostly Helium",
          correct: false,
        },
        {
          text: "Venus is mostly Carbon Dioxide",
          correct: true,
        },
        {
          text: "Earth is over 50% Oxygen",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which Apollo mission obtained the fastest speed.",
      answers: [
        {
          text: "Apollo 11",
          correct: false,
        },
        {
          text: "Apollo 10",
          correct: true,
        },
        {
          text: "Apollo 8",
          correct: false,
        },
        {
          text: "Apollo 13",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "What did Apollo astronaut Charlie Dukeleave on te Lunar surface?",
      answers: [
        {
          text: "His astronaut pen",
          correct: false,
        },
        {
          text: "His Naval Academy class ring",
          correct: false,
        },
        {
          text: "His high school class ring",
          correct: false,
        },
        {
          text: "A picture of his family",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question:
        "What did command module pilot  Ron Evans lose during the Apollo 17 Mission.",
      answers: [
        {
          text: "A pair of scissors",
          correct: true,
        },
        {
          text: "A key",
          correct: false,
        },
        {
          text: "A camera",
          correct: false,
        },
        {
          text: "His headset",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "Mission Control told te crew of Apollo 11 to be on the lookout for what, before they began their descent to the Lunar surface?",
      answers: [
        {
          text: "Moondust",
          correct: false,
        },
        {
          text: "Aliens",
          correct: false,
        },
        {
          text: "Meteors",
          correct: false,
        },
        {
          text: "A girl",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question:
        "How many orbits did Apollo 8, tthe first manned mission to go to the moon, before returning to Earth?",
      answers: [
        {
          text: "25",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "10",
          correct: true,
        },
        {
          text: "15",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What was the first spaceX rocket called?",
      answers: [
        {
          text: "Starship",
          correct: false,
        },
        {
          text: "BFR",
          correct: false,
        },
        {
          text: "Grashopper",
          correct: false,
        },
        {
          text: "Falxon 1",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question:
        "Which is the name of a droneship that  spacex rockets land on?",
      answers: [
        {
          text: "Of course I still love you",
          correct: true,
        },
        {
          text: "Puff the Magic Dragon",
          correct: false,
        },
        {
          text: "Millennium Falcom",
          correct: false,
        },
        {
          text: "Grasshopper",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which NASA astronaut group was Neil Armstrong part of?",
      answers: [
        {
          text: "The Mercury Seven",
          correct: false,
        },
        {
          text: "The Fourteen",
          correct: false,
        },
        {
          text: "The New Nine",
          correct: true,
        },
        {
          text: "The Origional 19",
          correct: false,
        },
      ],
    },
  ];

  const moneyList = useMemo(
    () =>
      [
        { id: 0, amount: "£ 500" },
        { id: 1, amount: "£ 1000" },
        { id: 2, amount: "£ 2000" },
        { id: 3, amount: "£ 5000" },
        { id: 4, amount: "£ 10000" },
        { id: 5, amount: "£ 20000" },
        { id: 6, amount: "£ 50000" },
        { id: 7, amount: "£ 75000" },
        { id: 8, amount: "£ 150000" },
        { id: 9, amount: "£ 250000" },
        { id: 10, amount: "£ 500000" },
        { id: 11, amount: "£ 100000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionId > 0 &&
      setWon(moneyList.find((m) => m.id === questionId - 1).amount);
  }, [moneyList, questionId, quizData]);

  return (
    <div className="appLayout">
      {!userName ? (
        <HomePage setUserName={setUserName} />
      ) : (
        <>
          <div className="mainPage">
            {timeOut ? (
              <h2 className="gameOverText">You have won: {won}</h2>
            ) : (
              <>
                <div className="topSection">
                  <div className="timer">
                    <Timer setTimeOut={setTimeOut} questionId={questionId} />
                  </div>
                </div>

                <div className="bottomSection">
                  <Quiz
                    quizData={quizData}
                    setTimeOut={setTimeOut}
                    questionId={questionId}
                    setQuestionId={setQuestionId}
                  />
                </div>
              </>
            )}
          </div>
          <div className="money">
            <ul className="moneyAmountsList">
              {moneyList.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionId === m.id ? "moneyAmount active" : "moneyAmount"
                  }
                >
                  <span className="moneyItemNumber">{m.id}</span>
                  <span className="moneyItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
