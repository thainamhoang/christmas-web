import React, { memo } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import NowPlaying from "../components/NowPlaying";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingRight: theme.spacing(15),
    paddingLeft: theme.spacing(15),
    paddingTop: theme.spacing(15),
  },
  nowPlaying: {
    height: 120,
    flexDirection: "row",
    padding: theme.spacing(0),
  },
}));

const Header = memo(
  () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid className={classes.gridContainer} container spacing={3}>
          <Grid item xs={7}>
            <Typography variant={"h3"} gutterBottom>
              {"IT'S THE CHRISTMAS SEASON"}
            </Typography>
            <Typography variant={"h3"} gutterBottom>
              {"OF THE YEAR!"}
            </Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={4}>
            <NowPlaying />
          </Grid>
        </Grid>
      </div>
    );
  },
  (prev, next) => React.isEqual(prev, next)
);

export default Header;
