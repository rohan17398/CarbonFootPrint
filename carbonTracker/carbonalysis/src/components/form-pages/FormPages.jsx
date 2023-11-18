import React, { useState, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Radio from '../radio-button/Radio';
import { carbonFootprintQuestions } from '../../utils/questions';
import styles from './FormPages.module.css';
import { useHistory } from 'react-router-dom';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '50rem',
    minWidth: '25rem',
    maxHeight: '50rem',
    minHeight: '25rem'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    // maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%'
  }
}));

export default function FormPages() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carbonFootprintQuestions.length;

  const history = useHistory();

  const {
    user,
    householdSize,
    homeSize,
    food,
    water1,
    water2,
    purchases,
    waste,
    transportation,
    publicTransit,
    flights,
    recycling,
  } = useContext(carbonFootprintContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/footprint',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      },
      data: {
        userId: user.id,
        householdSize,
        homeSize,
        food,
        water1,
        water2,
        purchases,
        waste,
        transportation,
        publicTransit,
        flights,
        recycling
      }
    })
    .then(() => {
        history.push('/dashboard');
    })
    .catch(() => {
        throw new Error();
    })
  }

  return (
    <div className={styles.questionnaireBody}>
      <div className={styles.questionnaireCard}>
        <div className={classes.root}>
          <h1 className={styles.questionnaireTitle}>Carbon Footprint Analyzer</h1>
          <Paper style={{backgroundColor:"white"}} square elevation={0} className={classes.header}>
            <Typography >{carbonFootprintQuestions[activeStep].label}</Typography>
          </Paper>
          <div className={styles.radioContainer}>
            <Radio
              carbonFootprintQuestions={carbonFootprintQuestions[activeStep]}
            />
          </div>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              activeStep === (maxSteps - 1)
              ?
              <Button type="submit" onClick={handleSubmit}>Submit</Button> 
              :
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};
