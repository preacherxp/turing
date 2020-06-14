import React from "react";
import { useState } from "react";
import InstructionsTable from "./components/InstructionsTable";
import MemoryTape from "./components/MemoryTape";
import StateRegister from "./components/StateRegister";
import CustomCreator from "./components/CustomCreator";
import DataLoad from "./components/DataLoad";
import Hero from "./components/Hero";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import ExamplesSelector from "./components/ExamplesSelector";
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  const [radio, setRadio] = useState("example");
  const [instructionsTable, setInstructionsTable] = useState(null);
  const [memoryTape, setMemoryTape] = useState(null);
  const [alphabet, setAlphabet] = useState(null);
  const [stateRegister, setStateRegister] = useState([]);
  const [filename, setFilename] = useState("");

  function handleDataUpload(e) {
    e.persist();
    const reader = new FileReader();

    reader.readAsText(e.target.files[0]);
    reader.onload = function (event) {
      const turingData = JSON.parse(event.target.result);
      const { instructionsTable, memoryTape, alphabet } = turingData;
      if (instructionsTable && memoryTape && alphabet) {
        setFilename(e.target.files[0].name);
        setInstructionsTable(instructionsTable);
        setMemoryTape(memoryTape);
        setAlphabet(alphabet);
      } else {
        document.getElementById("file").value = null;
        alert("error");
      }
    };
  }

  function handleChange(e) {
    setRadio(e.target.value);
    setInstructionsTable([]);
    setMemoryTape(null);
    setAlphabet(null);
    setFilename('');

  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Hero />
        <RadioGroup row value={radio} onChange={handleChange}>
          <FormControlLabel
            value="example"
            control={<Radio />}
            label="Example machines"
          />
          <FormControlLabel
            value="file"
            control={<Radio />}
            label="Import from file (.json/.txt)"
          />
          {/* <FormControlLabel
            value="custom"
            control={<Radio />}
            label="Custom machine"
          /> */}
        </RadioGroup>

        {radio === "example" && (
          <ExamplesSelector
            setInstructionsTable={setInstructionsTable}
            setMemoryTape={setMemoryTape}
            setAlphabet={setAlphabet}
          />
        )}
        {radio === "file" && <DataLoad handleDataUpload={handleDataUpload} filename={filename} />}
        {radio === "custom" && <CustomCreator />}

        <Grid
          style={{ padding: 20 }}
          item
          container
          spacing={2}
          direction="column"
        >
          {instructionsTable && alphabet && (
            <InstructionsTable
              instructionsTable={instructionsTable}
              alphabet={alphabet}
            />
          )}
        </Grid>

        {memoryTape && (
          <Grid
            style={{ padding: 20 }}
            spacing={2}
            item
            container
            direction="column"
          >
            <MemoryTape
              memoryTape={memoryTape}
              instructionsTable={instructionsTable}
              setStateRegister={setStateRegister}
            />
          </Grid>
        )}
        {stateRegister.length ? (
          <Grid
            style={{ padding: 20 }}
            spacing={2}
            item
            container
            direction="column"
          >
            <StateRegister stateRegister={stateRegister} />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
