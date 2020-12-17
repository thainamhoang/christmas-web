import React, { useRef, useEffect, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CustomContext from '../components/CustomContext';
import { hookMemo } from '../hook';

import Colors from '../constants/Colors';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
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

const Footer = hookMemo(() => {
  const footerRef = useRef(null);
  const { updateContextValue } = useContext(CustomContext);

  useEffect(() => {
    updateContextValue({ dHeight: footerRef?.current?.getBoundingClientRect?.()?.bottom });
  }, []);

  const classes = useStyles();

  return (
    <footer className={classes.root} ref={footerRef}>
      <hr className={classes.line} />
      <Typography
        className={classes.footer}
        variant={'button'}
        display={'block'}
        gutterBottom
        onClick={() => window.open('https://github.com/thainamhoang', '_blank')}
      >
        {'🎄 Made by Thai-Nam Hoang, with love 🎄'}
      </Typography>
    </footer>
  );
});

export default Footer;
