import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStylesBtn = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function SeconderyButton({name,addGame}) {
  const classesBtn = useStylesBtn();

  return (
    <div className={classesBtn.root}>
      <Button size="large" variant="contained" color="secondary">
        {name}
      </Button>
    </div>
  );
}
