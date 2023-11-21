import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import HttpHelper from '../../utils/HttpHelper';
import Grid from '@material-ui/core/Grid';
import styles from './userEntryFormsStyling.module.css'
import BackgroundImage from './userEntryFormsBackgroundImage.png'

const Login = () => {
    const {user, setUser} = useContext(carbonFootprintContext);

    const [credentials, setCredentials] = useState({ username: '', password: ''});
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const history = useHistory();

    const onChangeHandler = (event, input) => {
        if (invalidCredentials) {
            setInvalidCredentials(false);
          }
          setCredentials({ ...credentials, [input]: event.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios
        .post('http://localhost:8080/login', {
            username: credentials.username,
            password: credentials.password
        })
        .then((response) => {
            sessionStorage.setItem('token', response.data.jwt);
            sessionStorage.setItem('userId', response.data.user.id);
            setUser(response.data.user);
            history.push('/dashboard');
        })
        .catch(() => {
            setInvalidCredentials(true);
        })
    }
    

    return(
        <div className={styles.formBody} style={{background: 'black'}}>
            <Grid container spacing={2}>
  <Grid item xs={8}>
    <img src="/login.png" style={{width : '70%'}}></img>
  </Grid>
  <Grid item xs={4}>
    <form className={styles.formCard}onSubmit={submitHandler} style={{background : '#121212', borderRadius : '16px'}}>
        <h1 className={styles.formHeading} style={{color : 'white'}} >Login</h1>
        {invalidCredentials && <p className={styles.formInvalidCredentials} >Invalid username or password</p>}
        <input className={styles.formInput} placeholder="Username" value={credentials.username} onChange = {(e) => onChangeHandler(e, "username")} type="email"></input> <br/>
        <input className={styles.formInput} placeholder="Password" value={credentials.password} onChange = {(e) => onChangeHandler(e, "password")} type="password"></input>
        <button className={styles.formButton} type="submit">Login</button>
    </form>
  </Grid>
</Grid>
        </div>
    )
}

export default Login;
