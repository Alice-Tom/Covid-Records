import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from './GlobalContext.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function CountrySelector() {
  const classes = useStyles();
  const { picker, countrySelector } = useContext(GlobalContext)
  const [state, setState] = useState("")


  const handleChange = (e) => {
    setState(e.target.value);
    countrySelector(e.target.value)
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={state}
            onChange={handleChange}
            helperText="Please select your country"
          >
            {picker.map((option) => (
              <MenuItem key={option.iso2} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>

    </Grid>

  );
}
