import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './Logout.module.css';
import Background from './logoutImage.png';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';

const Logout = () => {
    const { setUser, setToken } = useContext(carbonFootprintContext);

    sessionStorage.clear();
    
    useEffect(() => {
        setUser({});
        setToken(false);
    });

    return(
        <>
            <Redirect to="/" />;
        </>
        // <div className = {styles.logoutBody} style = {{backgroundImage: `url(${Background})`}}>
        //     <div className = {styles.logoutContainer} >
        //         <h1 className = {styles.logoutHeading} >You have successfully logged out.</h1>
        //         <p className = {styles.logoutDescription} >Stay safe and be conscious of your impact on the environment!</p>
        //     </div>
        // </div>
    )
}

export default Logout;