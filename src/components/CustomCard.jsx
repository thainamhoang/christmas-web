import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

import { hookMemo } from "../hook";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    borderRadius: 16,
    padding: theme.spacing(3),
  },
  actionArea: {
    margin: "auto",
    borderRadius: 16,
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    WebkitBoxShadow: "5px 5px 20px 5px rgba(0,0,0,0.2)",
  },
  media: {
    borderRadius: 16,
  },
}));

const CustomCard = hookMemo(
  ({ url = "", source, content = {}, stylesAction = {}, stylesCard = {} }) => {
    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN04TextInfoContentStyles();
    const shadowStyles = useOverShadowStyles({ inactive: true });

    const { overline, heading, body } = content;

    const onClick = () => {
      if (url !== "") {
        window.open(url, "_blank");
      }
    };

    return (
      <CardActionArea
        className={styles.actionArea}
        onClick={() => onClick?.()}
        style={stylesAction}
      >
        <Card className={cx(styles.root, shadowStyles.root)} style={stylesCard}>
          <CardMedia
            className={cx(mediaStyles.root, styles.media)}
            image={source}
          />
          <CardContent>
            <TextInfoContent
              classes={textCardContentStyles}
              overline={overline}
              heading={heading}
              body={body}
            />
          </CardContent>
        </Card>
      </CardActionArea>
    );
  }
);

export default CustomCard;
