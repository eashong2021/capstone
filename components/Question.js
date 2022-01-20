import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
import { ArrowRight } from "@material-ui/icons";


  const useStyles = makeStyles((theme) => ({
    buttonContainer: {
      display: "block",
      marginTop: "1rem",
    },
    button: {
      background: "white",
    },
  }));
  
  function Question() {
    const classes = useStyles();
    const value = useContext(AppContext);
  
    let { questionAnswer } = value.state;
    let { handleChangeInput, nextQuestion } = value.function;
    let textFieldID = 'outlined-basic';
    let attributeValue = 1;
    if(questionAnswer.question === 'Experience'){
      textFieldID = 'standard-multiline-flexible';
      attributeValue = 4;
    }

    return (
      <div>
        <form noValidate autoComplete="on" onSubmit={nextQuestion}>
          <TextField
            id={textFieldID}
            label={questionAnswer.question}
            name={questionAnswer.resumeFieldId}
            value={questionAnswer.answer ? questionAnswer.answer : ""}
            onChange={handleChangeInput}
            multiline rows = {attributeValue}
          />
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              color="default"
              className={classes.button}
              endIcon={<ArrowRight />}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    );
  }

  export default Question;
