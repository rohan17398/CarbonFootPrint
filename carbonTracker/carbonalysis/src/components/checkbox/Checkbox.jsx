import React, { useContext } from 'react';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Checkboxes() {
  const {
    recycle, setRecycle,
    setRecycling
  } = useContext(carbonFootprintContext);

  const noRecycle = (event) => {
    if (event.target.name === 'none') {
      setRecycle({ 
        none: event.target.checked,
        glass: false,
        plastic: false,
        paper: false,
        aluminum: false,
        steel: false,
        foodWaste: false
      });
      setRecycling(0);
    }
  };

  const handleChange = (event) => {
      switch (event.target.name) {
        case 'glass':
          setRecycle({ ...recycle, glass: event.target.checked, none: false});
          setRecycling(prevState => prevState + 1);
          break;
        case 'plastic':
          setRecycle({ ...recycle, plastic: event.target.checked, none: false});
          setRecycling(prevState => prevState + 1);
          break;
        case 'paper':
          setRecycle({ ...recycle, paper: event.target.checked, none: false});
          setRecycling(prevState => prevState + 1);
          break;
        case 'aluminum':
          setRecycle({ ...recycle, aluminum: event.target.checked, none: false});
          setRecycling(prevState => prevState + 1);
          break;
        case 'steel':
          setRecycle({ ...recycle, steel: event.target.checked, none: false});
          setRecycling(prevState => prevState + 1);
          break;
        case 'foodWaste':
          setRecycle({ ...recycle, foodWaste: event.target.checked, none: false});
          setRecycling(prevState => prevState + 1);
          break;
        default:
          break;
      }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={recycle.glass}
            name="glass"
            onChange={handleChange}
          />
        }
        label="Glass"
        key="glass"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={recycle.plastic}
            name="plastic"
            onChange={handleChange}
          />
        }
        label="Plastic"
        key="plastic"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={recycle.paper}
            name="paper"
            onChange={handleChange}
          />
        }
        label="Paper"
        key="paper"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={recycle.aluminum}
            name="aluminum"
            onChange={handleChange}
          />
        }
        label="Aluminum"
        key="aluminum"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={recycle.steel}
            name="steel"
            onChange={handleChange}
          />
        }
        label="Steel"
        key="steel"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={recycle.foodWaste}
            name="foodWaste"
            onChange={handleChange}
          />
        }
        label="Food waste (composting)"
        key="foodWaste"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={recycle.none}
            name="none"
            onChange={noRecycle}
          />
        }
        label="No recycling"
        key="none"
      />
    </FormGroup>
  );
};
