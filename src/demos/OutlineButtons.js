//  https://material-ui.com/demos/buttons/#outlined-buttons

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import theme from '../theme';

const styles = {
  button: css({
    margin: theme.spacing.unit
  }),
  input: css({
    display: 'none'
  })
};

export default function OutlinedButtons(props) {
  return (
    <div>
      <Button variant="outlined" className={styles.button}>
        Default
      </Button>
      <Button variant="outlined" color="primary" className={styles.button}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className={styles.button}>
        Secondary
      </Button>
      <Button variant="outlined" disabled className={styles.button}>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons" className={styles.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={styles.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={styles.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}
