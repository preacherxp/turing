import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import {
  numberSubstractor,
  numberAdder,
  numberAdder2,
  simpleTest,
} from "./TuringExamples";
import { Select, MenuItem, Button } from "@material-ui/core";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 450,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function ExamplesSelector({
  setInstructionsTable,
  setMemoryTape,
  setAlphabet,
  ...props
}) {
  const [example, setExample] = useState("numberSubstractor");

  useEffect(() => {
    setInstructionsTable(numberSubstractor.instructionsTable);
    setMemoryTape(numberSubstractor.memoryTape);
    setAlphabet(numberSubstractor.alphabet);
  }, [setAlphabet, setInstructionsTable, setMemoryTape]);

  function setInfoDescription() {
    switch (example) {
      case "simpleTest":
        return <React.Fragment>Simple test</React.Fragment>;
      case "numberSubstractor":
        return (
          <React.Fragment>
            A number is represented in binary format in different finite
            automatas like 5 is represented as (101) but in case of subtraction
            Turing Machine unary format is followed . In unary format a number
            is represented by either all ones or all zeros. For example, 5 will
            be represented by a sequence of five ones 5 = 1 1 1 1 1 or 0 0 0 0
            0.
            <br />
            Lets use zeros for representation. For subtraction of numbers using
            a Turing Machine, both these numbers are given as input to the
            Turing machine separated by a “c”.
          </React.Fragment>
        );
      case "numberAdder":
        return (
          <React.Fragment>
            A number is represented in binary format in different finite
            automatas like 5 is represented as (101) but in case of addition
            using a turing machine unary format is followed. In unary format a
            number is represented by either all ones or all zeroes.
            <br />
            For example, 5 will be represented by a sequence of five zeroes or
            five ones. 5 = 1 1 1 1 1 or 0 0 0 0 0. Lets use zeroes for
            representation. For adding 2 numbers using a Turing machine, both
            these numbers are given as input to the Turing machine separated by
            a “c”.
          </React.Fragment>
        );
      case "numberAdder2":
        return (
          <React.Fragment>
            A number is represented in binary format in different finite
            automatas like 5 is represented as (101) but in case of addition
            using a turing machine unary format is followed. In unary format a
            number is represented by either all ones or all zeroes.
            <br />
            For example, 5 will be represented by a sequence of five zeroes or
            five ones. 5 = 1 1 1 1 1 or 0 0 0 0 0. Lets use zeroes for
            representation. For adding 2 numbers using a Turing machine, both
            these numbers are given as input to the Turing machine separated by
            a “c”.
          </React.Fragment>
        );
      default:
        break;
    }
  }

  function handleChange(e) {
    setExample(e.target.value);
    switch (e.target.value) {
      case "simpleTest":
        setInstructionsTable(simpleTest.instructionsTable);
        setMemoryTape(simpleTest.memoryTape);
        setAlphabet(simpleTest.alphabet);
        break;
      case "numberSubstractor":
        setInstructionsTable(numberSubstractor.instructionsTable);
        setMemoryTape(numberSubstractor.memoryTape);
        setAlphabet(numberSubstractor.alphabet);
        break;
      case "numberAdder":
        setInstructionsTable(numberAdder.instructionsTable);
        setMemoryTape(numberAdder.memoryTape);
        setAlphabet(numberAdder.alphabet);
        break;
      case "numberAdder2":
        setInstructionsTable(numberAdder2.instructionsTable);
        setMemoryTape(numberAdder2.memoryTape);
        setAlphabet(numberAdder2.alphabet);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <Select value={example} onChange={handleChange}>
        <MenuItem value={"simpleTest"}>Simple test</MenuItem>
        <MenuItem value={"numberSubstractor"}>Number substractor</MenuItem>
        <MenuItem value={"numberAdder"}>Number adder</MenuItem>
        <MenuItem value={"numberAdder2"}>Number adder 2</MenuItem>
      </Select>
      <HtmlTooltip title={setInfoDescription()}>
        <Button>Info</Button>
      </HtmlTooltip>
    </div>
  );
}

ExamplesSelector.propTypes = {
  setInstructionsTable: PropTypes.func,
  setMemoryTape: PropTypes.func,
  setAlphabet: PropTypes.func,
};
