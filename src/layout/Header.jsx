import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useReactFontLoader from 'react-font-loader';

import Colors from '../constants/Colors';
import CountdownProgress from '../components/CountdownProgress';
import { hookMemo } from '../hook';

const useStyles = makeStyles(theme => ({
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
    flexDirection: 'row',
    padding: theme.spacing(0),
  },
}));

const Header = hookMemo(() => {
  const classes = useStyles();

  useReactFontLoader({
    url: 'https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap',
  });

  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant={'h2'}
            gutterBottom
            style={{
              textAlign: 'center',
              fontFamily: 'Caveat',
              color: Colors.green_light,
              // fontWeight: 'bold',
            }}
          >
            {"It's the Holiday Season of the year!"}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ justifyContent: 'center' }}>
          <CountdownProgress date={`${year}-12-25T00:00:00`} />
        </Grid>
      </Grid>
    </div>
  );
});

export default Header;
