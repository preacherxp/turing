import React from "react";
import styles from "./styles.module.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function InstructionsTable({
  instructionsTable,
  alphabet,
  ...props
}) {
  function generateInstructionsTable() {
    const instructionsLength = instructionsTable.length;
    const header = Array.from(Object.keys(Array(instructionsLength).fill(0)));
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Alphabet</TableCell>
              {header.map((e, idx) => (
                <TableCell key={idx}>q{e}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {alphabet.map((symbol, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell>{symbol}</TableCell>

                  {instructionsTable.map((instruction, idx) => {
                    const element = instruction.symbolActions.find(
                      (action) => action.current === symbol
                    );
                    if (element) {
                      return (
                        <TableCell key={idx}>
                          <div className="">
                            Current element: {element.current}
                          </div>
                          <div className="">New element: {element.new}</div>
                          <div className="">Next state: {element.next}</div>
                          <div className="">Head movement: {element.move}</div>
                        </TableCell>
                      );
                    } else {
                      return <TableCell key={idx}>-</TableCell>;
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return <div>{generateInstructionsTable()}</div>;
}
