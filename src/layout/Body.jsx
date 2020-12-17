import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CustomCard from '../components/CustomCard';
import images from '../assets/images';
import url from '../assets/url';

import { hookMemo } from '../hook';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    paddingRight: theme.spacing(15),
    paddingLeft: theme.spacing(15),
    paddingTop: theme.spacing(15),
  },
  item: {
    justifyContent: 'center',
  },
}));

const Body = hookMemo(() => {
  const styles = useStyles();

  const contentAB = {
    overline: 'AIRBNB',
    heading: 'Scandi Shelter',
    body:
      'A Scandinavian-style accommodation that brings a wonderful mood for a post-Christmas night. At this place, magical things happen.',
  };

  const contentST = {
    overline: 'GAME',
    heading: 'Santa Tracker',
    body:
      'While waiting for Christmas (or that night) to come, you will be treated with a game, Santa Tracker by Google.',
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
});

export default Body;
