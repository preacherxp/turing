import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Card, CardContent, Typography } from "@material-ui/core";

export default function DataLoad({ handleDataUpload, filename, ...props }) {
  return (
    <div className={styles.dataloadWrapper}>
      <Card>
        <CardContent>
          <label htmlFor="file" className={styles.uploadLabel}>
            <div>Select file</div>
          </label>
          <input
            id="file"
            onChange={handleDataUpload}
            type="file"
            accept=".json,.txt"
          />
        </CardContent>
      </Card>
      {filename && (
        <Card>
          <CardContent>
            <Typography>Filename: {filename}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

DataLoad.propTypes = {
  handleDataUpload: PropTypes.func,
};
