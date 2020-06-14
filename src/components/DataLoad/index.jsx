import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.module.scss";
import Tooltip from "@material-ui/core/Tooltip";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 450,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function DataLoad({
  handleDataUpload,
  filename,
  removeFile,
  ...props
}) {
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
            <Button onClick={removeFile}>Remove</Button>
          </CardContent>
        </Card>
      )}
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography m color="inherit">
              Supported json or text format
            </Typography>
            <Typography>memoryTape: Array[String]</Typography>
            <Typography>alphabet: Array[String]</Typography>
            <Typography>instructionsTable: Array[qState]</Typography>
            <br />
            <Typography>qState: Object = {"{"}</Typography>
            <Typography>stateNumber: Number</Typography>
            <Typography>symbolActions: Array[symbolAction]</Typography>
            <Typography>{"}"}</Typography>
            <br />
            <Typography>symbolAction: Object = {"{"}</Typography>
            <Typography>current: String</Typography>
            <Typography>new: String</Typography>
            <Typography>next: Number</Typography>
            <Typography>move: String / exact STOP String</Typography>
            <Typography>{"}"}</Typography>
          </React.Fragment>
        }
      >
        <Button>Help</Button>
      </HtmlTooltip>
    </div>
  );
}

DataLoad.propTypes = {
  handleDataUpload: PropTypes.func,
};
