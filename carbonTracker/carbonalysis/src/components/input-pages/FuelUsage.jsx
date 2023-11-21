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
    color : 'white!important'
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
    fuel, setFuel,
  } = useContext(carbonFootprintContext);

  const handleChange = (prop) => (event) => {
    if (Number(event.target.value) < 0) {
      return null;
    } else {
      setFuel({ ...fuel, [prop]: event.target.value });
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl style={{color: 'white'}} fullWidth className={classes.margin} variant="outlined">
          <InputLabel style={{color: 'white'}} htmlFor="outlined-adornment-totalMiles">Total miles driven</InputLabel>
          <OutlinedInput
            id="outlined-adornment-totalMiles"
            value={fuel.totalMiles}
            style={{color: 'white',background: '#ffffff17',borderRadius: '10px'}}
            onChange={handleChange('totalMiles')}
            labelWidth={60}
            type="number"
            min="0"
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel style={{color: 'white'}} htmlFor="outlined-adornment-mpg">Miles per gallon</InputLabel>
          <OutlinedInput
            id="outlined-adornment-mpg"
            value={fuel.mpg}
            style={{color: 'white',background: '#ffffff17',borderRadius: '10px'}}
            onChange={handleChange('mpg')}
            labelWidth={60}
            type="number"
            min="0"
          />
        </FormControl>
      </div>
    </div>
  );
}
