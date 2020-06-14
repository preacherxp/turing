import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { binaryAdder, numberAdder, simpleTest } from "./TuringExamples";
import { Select, MenuItem } from "@material-ui/core";

export default function ExamplesSelector({
  setInstructionsTable,
  setMemoryTape,
  setAlphabet,
  ...props
}) {
  const [example, setExample] = useState("simpleTest");

  useEffect(() => {
    setInstructionsTable(simpleTest.instructionsTable);
    setMemoryTape(simpleTest.memoryTape);
    setAlphabet(simpleTest.alphabet);
  }, [setAlphabet, setInstructionsTable, setMemoryTape]);

  function handleChange(e) {
    setExample(e.target.value);
    switch (e.target.value) {
      case "simpleTest":
        setInstructionsTable(simpleTest.instructionsTable);
        setMemoryTape(simpleTest.memoryTape);
        setAlphabet(simpleTest.alphabet);
        break;
      case "binaryAdder":
        setInstructionsTable(binaryAdder.instructionsTable);
        setMemoryTape(binaryAdder.memoryTape);
        setAlphabet(binaryAdder.alphabet);
        break;
      case "numberAdder":
        setInstructionsTable(numberAdder.instructionsTable);
        setMemoryTape(numberAdder.memoryTape);
        setAlphabet(numberAdder.alphabet);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <Select value={example} onChange={handleChange}>
        <MenuItem value={"simpleTest"}>Simple test</MenuItem>
        <MenuItem value={"binaryAdder"}>Binary adder</MenuItem>
        <MenuItem value={"numberAdder"}>Number adder</MenuItem>
      </Select>
    </div>
  );
}

ExamplesSelector.propTypes = {
  setInstructionsTable: PropTypes.func,
  setMemoryTape: PropTypes.func,
  setAlphabet: PropTypes.func,
};
