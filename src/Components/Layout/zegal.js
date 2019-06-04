import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Zegalstyles from "./zegalstyle";
//import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Description from "@material-ui/icons/Description";
import TextField from "@material-ui/core/TextField";
import Done from "@material-ui/icons/Done";
//import Create from "@material-ui/icons/Create";
import { Typography, FormControl } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

class zegal extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.zegal}>
        <Card className={classes.card}>
          <div style={{ display: "flex" }}>
            <div>
              <Description className={classes.description} />
            </div>

            <div className={classes.textTitle}>
              <div className={classes.text}>
                <TextField
                  id="standard-bare"
                  className={classes.textField}
                  defaultValue="Confidentiality Agreement (NDA)"
                  fullWidth
                  InputProps={{
                    className: classes.input
                  }}
                />
                <Done />
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <Typography className={classes.typography}>
              A Confidentiality Agreement, also known as a Non-disclosure
              Agreement (NDA), is a contract by which a party receiving
              information from another party agrees to keep such information
              confidential.This is trying.this is next.
            </Typography>
          </div>

          <div className={classes.box}>
            <Typography variant="body1" style={{ fontWeight: 600 }}>
              Will confidential information be disclosed by one party only or by
              both parties mutually?
            </Typography>

            <FormControl component="fieldset" style={{ paddingTop: 20 }}>
              <RadioGroup>
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Both parties will disclose confidential info mutually."
                  style={{ marginRight: 0 }}
                  classes={{
                    root: classes.root,
                    checked: classes.checked,
                  }}

                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Only we will disclose confidential info to the other party."
                  style={{ marginRight: 0 }}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="primary" />}
                  label="Only the other party will disclose confidential info to us."
                  style={{ marginRight: 0 }}
                />
              </RadioGroup>
              <Button className={classes.button} variant="contained">
                Choose
              </Button>
            </FormControl>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(Zegalstyles)(zegal);
