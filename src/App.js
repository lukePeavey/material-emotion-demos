import React from 'react';
import Provider from './Provider';
import { css } from 'emotion';
import Typography from '@material-ui/core/Typography';
// Import demos
import MediaCardDemo from './demos/MediaCard';
import IconLabelButtonDemo from './demos/IconLabelButtons';
import OutlineButtonDemo from './demos/OutlineButtons';
import FullWidthTabDemo from './demos/FullWidthTabs';
// Import the theme
import theme from './theme';

const styles = {
  root: css({
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: theme.palette.background.default
  }),
  header: css({
    height: 200,
    marginBottom: theme.spacing.unit * 12,
    background: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: 'rgba(255,2555,255,0.8)',
    '& h1': {
      marginBottom: theme.spacing.unit
    }
  }),
  title: css({
    ...theme.typography.title,
    marginBottom: theme.spacing.unit,
  }),
  section: css({
    width: '100%',
    maxWidth: 900,
    marginBottom: theme.spacing.unit * 3
  }),
  demo: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    background: '#eee',
    width: '90%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 3
  })
};

export default function App() {
  return (
    <Provider>
      <div className={styles.root}>
        <header className={styles.header}>
          <Typography variant="display1" color="inherit">
            Material with Emotion
          </Typography>
          <Typography variant="body1" color="inherit">
            An experiment using Emotion to style Material UI components.
          </Typography>
        </header>
        <section className={styles.section}>
          <Typography className={styles.title}>Buttons</Typography>
          <div className={styles.demo}>
            <OutlineButtonDemo />
          </div>
          <div className={styles.demo}>
            <IconLabelButtonDemo />
          </div>
        </section>
        <section className={styles.section}>
          <Typography className={styles.title}>Cards</Typography>
          <div className={styles.demo}>
            <MediaCardDemo />
          </div>
        </section>
        <section className={styles.section}>
          <Typography className={styles.title}>Tabs</Typography>
          <Typography>Full width tabs with custom indicator styles</Typography>
          <div className={styles.demo}>
            <FullWidthTabDemo />
          </div>
        </section>
      </div>
    </Provider>
  );
}
