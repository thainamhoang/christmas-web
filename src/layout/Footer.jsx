import React, { memo } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Colors from "../constants/Colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  footer: {
    color: Colors.green_dark,
  },
  line: {
    color: Colors.green_dark,
    backgroundColor: Colors.green_dark,
    height: 1,
  },
}));

const Footer = memo(
  () => {
    const classes = useStyles();

    return (
      <footer className={classes.root}>
        <hr className={classes.line} />
        <Typography
          className={classes.footer}
          variant={"button"}
          display={"block"}
          gutterBottom
        >
          {"🎄 Made by Thai-Nam Hoang, with love 🎄"}
        </Typography>
        <Typography
          className={classes.footer}
          variant={"button"}
          display={"block"}
          gutterBottom
        >
          {"🎄 Made by Thai-Nam Hoang, with love 🎄"}
        </Typography>
      </footer>
    );
  },
  (prev, next) => React.isEqual(prev, next)
);

export default Footer;
