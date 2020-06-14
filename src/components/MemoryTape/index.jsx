import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.scss";
import classNames from "classnames";
import {
  Typography,
  Card,
  CardContent,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useEffect } from "react";

export default function MemoryTape({
  memoryTape,
  instructionsTable,
  setStateRegister,
  ...props
}) {
  const [currentState, setCurrentState] = useState(0);
  const [message, setMessage] = useState({ state: false, text: "" });
  const [transformedTape, setTransformedTape] = useState([]);
  const [startingIndex, setStartingIndex] = useState(0);
  const [stopSignal, setStopSignal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  function handleSelectChange(e) {
    setStartingIndex(Number(e.target.value));
    setCurrentStep(Number(e.target.value));
  }

  function setNewTape() {
    resetTuring();
    setTransformedTape([...memoryTape]);
  }

  useEffect(() => {
    setNewTape();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoryTape]);

  function runTuring() {
    resetTuring();
    let currentIndex = startingIndex;
    let autoStep = 0;

    const modifyElement = function () {
      const currentElement = transformedTape[currentIndex];

      const currentInstruction = instructionsTable[autoStep].symbolActions.find(
        (action) => action.current === currentElement
      );

      if (currentInstruction?.move === "STOP") {
        setStopSignal(true);
        setMessage({ state: true, text: "Machine finished" });
        return;
      }

      if (currentInstruction) {
        transformedTape[currentIndex] = currentInstruction.new;
        autoStep = currentInstruction.next;
        if (currentInstruction.move === "R") currentIndex += 1;
        if (currentInstruction.move === "L") currentIndex -= 1;

        setTransformedTape(transformedTape);
        setStateRegister((prev) => [
          ...prev,
          {
            ...currentInstruction,
          },
        ]);
      } else {
        setMessage({ state: true, text: "Instruction error" });
        setStopSignal(true);
      }
    };

    let stepsAmount = 0;

    while (
      stepsAmount <= 1000 &&
      currentIndex >= 0 &&
      currentIndex < transformedTape.length &&
      !stopSignal
    ) {
      if (stepsAmount < 1000) {
        modifyElement();
      } else {
        setMessage({ state: true, text: "Steps limit achived" });
      }
      stepsAmount += 1;
    }

    setMessage({ state: true, text: "Machine finished" });
  }
  function nextStep() {
    const modifyElement = function () {
      const currentElement = transformedTape[currentStep];

      const currentInstruction = instructionsTable[
        currentState
      ].symbolActions.find((action) => action.current === currentElement);

      if (currentInstruction?.move === "STOP") {
        setStopSignal(true);
        setMessage({ state: true, text: "Machine finished" });
        return;
      }

      if (currentInstruction) {
        transformedTape[currentStep] = currentInstruction.new;
        setCurrentState(currentInstruction.next);
        if (currentInstruction.move === "R") setCurrentStep((prev) => prev + 1);
        if (currentInstruction.move === "L") setCurrentStep((prev) => prev - 1);

        setTransformedTape(transformedTape);
        setStateRegister((prev) => [
          ...prev,
          {
            ...currentInstruction,
          },
        ]);
      }
    };

    modifyElement();
  }

  function resetTuring() {
    setMessage({ state: false, text: "" });
    setTransformedTape([...memoryTape]);
    setCurrentState(0);
    setCurrentStep(0);
    setStateRegister([]);
    setStopSignal(false);
  }

  return (
    <div>
      <Card style={{ marginBottom: 20 }}>
        <CardContent style={{ display: "flex" }}>
          <div style={{ marginRight: 8 }}>
            <Typography>Starting index</Typography>
            <Select value={startingIndex} onChange={handleSelectChange}>
              {Object.keys(Array(memoryTape.length).fill(0)).map(
                (element, idx) => (
                  <MenuItem key={idx} value={element}>
                    {element}
                  </MenuItem>
                )
              )}
            </Select>
          </div>

          <Typography style={{ marginRight: 8 }}>
            Current step <br /> {currentStep}
          </Typography>

          <Typography>
            Current state <br />
            {currentState === "STOP"
              ? "STOP"
              : `q${instructionsTable[currentState].stateNumber}`}
          </Typography>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: 20 }}>
        <CardContent>
          <div className={styles.memoryTape}>
            {memoryTape.map((element, idx) => {
              return (
                <span
                  className={classNames(
                    styles.tapeElement,
                    idx === startingIndex && styles.tapeElementStarting,
                    idx === currentStep && styles.tapeElementCurrent
                  )}
                  key={idx}
                >
                  {element}
                </span>
              );
            })}
          </div>

          <div className={styles.memoryTape}>
            {transformedTape.map((element, idx) => {
              return (
                <span
                  className={classNames(
                    styles.tapeElement,
                    idx === startingIndex && styles.tapeElementStarting,
                    idx === currentStep && styles.tapeElementCurrent
                  )}
                  key={idx}
                >
                  {element}
                </span>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Button
            style={{ marginRight: "8px" }}
            disabled={currentState === "STOP"}
            variant="contained"
            onClick={nextStep}
          >
            Next Step
          </Button>
          <Button
            style={{ marginRight: "8px" }}
            variant="contained"
            color="primary"
            onClick={runTuring}
          >
            Run
          </Button>
          <Button
            style={{ marginRight: "8px" }}
            variant="contained"
            color="secondary"
            onClick={resetTuring}
          >
            Reset
          </Button>
        </CardContent>
      </Card>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h3" component="h2" className={styles.message}>
          {message.text}
        </Typography>
      </div>
    </div>
  );
}

MemoryTape.propTypes = {
  memoryTape: PropTypes.array,
  instructionsTable: PropTypes.array,
};
