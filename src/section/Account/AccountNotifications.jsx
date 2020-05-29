import React, {Fragment} from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'block !important',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AccountNotifications() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="pane-title">NOTIFICATIONS</div>
      <div className={`pane-body profile-config ${classes.root}`}>
        <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert>
      </div>
    </Fragment>
  );
}
