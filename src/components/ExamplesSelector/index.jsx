import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  numberSubstractor,
  numberAdder,
  numberAdder2,
  simpleTest,
} from "./TuringExamples";
import { Select, MenuItem } from "@material-ui/core";

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
    </div>
  );
}

ExamplesSelector.propTypes = {
  setInstructionsTable: PropTypes.func,
  setMemoryTape: PropTypes.func,
  setAlphabet: PropTypes.func,
};
