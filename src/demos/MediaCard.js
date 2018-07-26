// https://material-ui.com/demos/cards/#ui-controls

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { css } from 'emotion';
import theme from '../theme';

const styles = {
  card: css({
    display: 'flex',
    width: 400
  }),
  details: css({
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
  }),
  content: css({
    flex: '1 0 auto'
  }),
  cover: css({
    width: 151,
    height: 151
  }),
  controls: css({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }),
  playIcon: css({
    height: 38,
    width: 38
  })
};

export default function MediaControlCard(props) {
  return (
    <div>
      <Card className={styles.card}>
        <div className={styles.details}>
          <CardContent className={styles.content}>
            <Typography variant="headline">Live From Space</Typography>
            <Typography variant="subheading" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
          <div className={styles.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon className={styles.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={styles.cover}
          image="/static/images/cards/live-from-space.jpg"
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
}
