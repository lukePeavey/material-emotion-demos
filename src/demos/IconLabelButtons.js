// https://material-ui.com/demos/buttons/#buttons-with-icons-and-label

import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';
import { css } from 'emotion';
import theme from '../theme';

const styles = {
  button: css({
    margin: theme.spacing.unit
  }),
  leftIcon: css({
    marginRight: theme.spacing.unit
  }),
  rightIcon: css({
    marginLeft: theme.spacing.unit
  }),
  iconSmall: css({
    fontSize: 20
  })
};

export default function IconLabelButtons(props) {
  return (
    <div>
      <Button variant="contained" color="secondary" className={styles.button}>
        Delete
        <DeleteIcon className={styles.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" className={styles.button}>
        Send
        <SendIcon className={styles.rightIcon} />
      </Button>
      <Button variant="contained" color="default" className={styles.button}>
        Upload
        <CloudUploadIcon className={styles.rightIcon} />
      </Button>
      <Button variant="contained" disabled color="secondary" className={styles.button}>
        <KeyboardVoiceICon className={styles.leftIcon} />
        Talk
      </Button>
      <Button variant="contained" size="small" className={styles.button}>
        <SaveIcon className={classNames(styles.leftIcon, styles.iconSmall)} />
        Save
      </Button>
    </div>
  );
}
