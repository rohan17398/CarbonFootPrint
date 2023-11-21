import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color : 'white'
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();

  const {
    offsets, setOffsets,
  } = useContext(carbonFootprintContext);

  const handleChange = (event) => {
    setOffsets(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-offsets"  style={{color: 'white'}}>Trees planted</InputLabel>
          <OutlinedInput
            id="outlined-adornment-offsets"
            value={offsets}
            style={{color: 'white',background: '#ffffff17',borderRadius: '10px'}}
            onChange={handleChange}
            labelWidth={60}
          />
        </FormControl>
      </div>
    </div>
  );
}
