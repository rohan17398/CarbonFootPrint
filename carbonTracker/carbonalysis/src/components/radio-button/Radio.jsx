import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkboxes from '../checkbox/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width : '100%!important',
    flexGrow: 1,
    minWidth: '50rem',
    maxHeight: '30rem',
    minHeight: '30rem',
    color: 'white!important'
  },
  subGroup: {
    marginTop: '4rem'
  }
}));

export default function RadioButtonsGroup({ carbonFootprintQuestions }) {
  const classes = useStyles();

  const name = carbonFootprintQuestions.name;

  const {
    householdSize, setHouseholdSize,
    homeSize, setHomeSize,
    food, setFood,
    water1, setWater1,
    water2, setWater2,
    purchases, setPurchases,
    waste, setWaste,
    transportation, setTransportation,
    publicTransit, setPublicTransit,
    flights, setFlights,
    totalFootprint, setTotalFootprint
  } = useContext(carbonFootprintContext);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'householdSize':
        setHouseholdSize(event.target.value);
        break;
      case 'homeSize':
        setHomeSize(event.target.value);
        break;
      case 'food':
        setFood(event.target.value);
        break;
      case 'water1':
        setWater1(event.target.value);
        break;
      case 'water2':
        setWater2(event.target.value);
        break;
      case 'purchases':
        setPurchases(event.target.value);
        break;
      case 'waste':
        setWaste(event.target.value);
        break;
      case 'transportation':
        setTransportation(event.target.value);
        break;
      case 'publicTransit':
        setPublicTransit(event.target.value);
        break;
      case 'flights':
        setFlights(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <FormControl className={classes.root} component="fieldset">
      <RadioGroup className={classes.subGroup} name={name} onChange={handleChange}>
        {carbonFootprintQuestions.name === 'recycle' ?
          <Checkboxes style={{color: 'white!important'}} />
        :
        carbonFootprintQuestions.options.map(option => (
           <FormControlLabel
              checked={
                option === householdSize ? true :
                option === homeSize ? true :
                option === food ? true :
                option === water1 ? true :
                option === water2 ? true :
                option === purchases ? true :
                option === waste ? true :
                option === transportation ? true :
                option === publicTransit ? true :
                option === flights ? true :
                false
              }
              style={{color: 'white'}}
              key={option} value={option} control={<Radio style={{color : 'white'}} />} label={option}
            />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
