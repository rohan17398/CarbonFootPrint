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
    utility, setUtility,
  } = useContext(carbonFootprintContext);

  const handleChange = (prop) => (event) => {
    if (Number(event.target.value) < 0) {
      return null;
    } else {
      setUtility({ ...utility, [prop]: event.target.value });
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-kilowatt">Kilowatt hours</InputLabel>
          <OutlinedInput
            id="outlined-adornment-kilowatt"
            value={utility.kilowatt}
            onChange={handleChange('kilowatt')}
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-naturalGas">Natural gas usage (therms)</InputLabel>
          <OutlinedInput
            id="outlined-adornment-naturalGas"
            value={utility.naturalGas}
            onChange={handleChange('naturalGas')}
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-propane">Propane gallons</InputLabel>
          <OutlinedInput
            id="outlined-adornment-propane"
            value={utility.propane}
            onChange={handleChange('propane')}
            labelWidth={60}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-fuel">Fuel gallons</InputLabel>
          <OutlinedInput
            id="outlined-adornment-fuel"
            value={utility.fuel}
            onChange={handleChange('fuel')}
            labelWidth={60}
          />
        </FormControl>
      </div>
    </div>
  );
}
