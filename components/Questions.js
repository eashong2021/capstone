import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Question from "./Question";
import AppContext from "../AppContext";
import Resume from "./Resume";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
  },
  progressBar: {
    margin: "1rem",
  },
  question: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    width: "100vh",
  },
  question: {},
}));


function Questions() {
  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);

  const value = useContext(AppContext);
  let { questionAnswer, questions, answers } = value.state;
  console.log(answers.length, questions.length);

  useEffect(() => {
    setProgress(
      (answers.length / questions.length) * 100
        ? (answers.length / questions.length) * 100
        : 0
    );
  }, [answers]);

  return (
    <div>
      {questions.length !== answers.length ? (
        <LinearProgressWithLabel
          value={progress}
          className={classes.progressBar}
        />
      ) : null}
      <div className={classes.root}>
        {questions.length === answers.length ? (
          <Resume />
        ) : (
          <div className={classes.question}>
            <Question question={questionAnswer.question} />
          </div>
        )}
      </div>
    </div>
  );
}
export default Questions;
