import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "@material-ui/core";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Typography variant="h2" component="h1">Turing Machine Simulator</Typography>
    </div>
  );
}
