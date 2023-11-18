import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FuelUsage from '../input-pages/FuelUsage';
import Utility from '../input-pages/Utility';
import Offsets from '../input-pages/Offsets';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '50rem',
    minWidth: '50rem',
    maxHeight: '30rem',
    minHeight: '30rem',
    margin: 'auto'
  },
  subGroup: {
    alignContent: 'center',
    marginTop: '4rem'
  }
}));

export default function RadioButtonsGroup({ co2Emissions }) {
  const classes = useStyles();

  const name = co2Emissions.name;

  const {
    car, setCar,
    fuel, setFuel,
    utility, setUtility,
    offsets, setOffsets,
    totalEmissions, setTotalEmissions
  } = useContext(carbonFootprintContext);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'vehicle':
        setCar(event.target.value);
        break;
      case 'fuel':
        setFuel(event.target.value);
        break;
      case 'utility':
        setUtility(event.target.value);
        break;
      case 'offsets':
        setOffsets(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <FormControl className={classes.root} component="fieldset">
      <RadioGroup className={classes.subGroup} name={name} onChange={handleChange}>
        {co2Emissions.name === 'fuel' ?
          <FuelUsage />
        :
        co2Emissions.name === 'utility' ?
          <Utility />
        :
        co2Emissions.name === 'offsets' ?
          <Offsets />
        :
        co2Emissions.options.map(option => (
           <FormControlLabel
              checked={option === car ? true : false}
              key={option} value={option} control={<Radio />} label={option}
            />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
