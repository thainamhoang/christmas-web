import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CustomCard from "../components/CustomCard";
import images from "../assets/images";
import url from "../assets/url";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    paddingRight: theme.spacing(15),
    paddingLeft: theme.spacing(15),
    paddingTop: theme.spacing(15),
  },
  item: {
    justifyContent: "center",
  },
}));

const Body = memo(
  () => {
    const styles = useStyles();

    const contentAB = {
      overline: "AIRBNB",
      heading: "Scandi Shelter",
      body:
        "That year, collection of songs, review melodies, memories full, this is a long and warm journey",
    };

    const contentST = {
      overline: "GAME",
      heading: "Santa Tracker",
      body:
        "That year, collection of songs, review melodies, memories full, this is a long and warm journey",
    };

    return (
      <div className={styles.root}>
        <Grid className={styles.grid} container spacing={10}>
          <Grid item xs={6} className={styles.item}>
            <CustomCard
              url={url.airbnb}
              source={images.airbnb}
              content={contentAB}
              stylesAction={{ maxWidth: 650 }}
              stylesCard={{ maxWidth: 650 }}
            />
          </Grid>
          <Grid item xs={6} className={styles.item}>
            <CustomCard
              url={url.santa_tracker}
              source={images.santa_tracker}
              content={contentST}
              stylesAction={{ maxWidth: 650 }}
              stylesCard={{ maxWidth: 650 }}
            />
          </Grid>
        </Grid>
      </div>
    );
  },
  (prev, next) => React.isEqual(prev, next)
);

export default Body;
