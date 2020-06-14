import React from "react";
import styles from "./styles.module.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function StateRegister({ stateRegister, ...props }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>Current element</TableCell>
            <TableCell>New element</TableCell>
            <TableCell>Tape move</TableCell>
            <TableCell>Next state</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stateRegister.map((state, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{state.current}</TableCell>
                <TableCell>{state.new}</TableCell>
                <TableCell>{state.move}</TableCell>
                <TableCell>{state.next}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
