import React from 'react';
import styles from './Homepage.module.css'
import Background from './homepageImage.png'
import HomepageButton from './homepageButton/HomepageButton'
import { useHistory } from 'react-router-dom';

const Homepage = () => {

    let history = useHistory();

    const onClickRedirect = () => {
        history.push('/register')
    }

    return (
        <div className = {styles.homeBody} style = {{background: 'black'}}>
            <div className = {styles.homeContainer} >
                <h1 className = {styles.homeHeading} >Track Your Carbon Footprint</h1>
                <p className = {styles.homeDescription} >Carbonalysis tracks your carbon footprint by answering a few simple questions!</p>
                <ul className = {styles.homeBenefits}>
                    <li>Track your footprint overtime!</li>
                    <li>Get listed on the global leaderboards!</li>
                    <li>Save your footprint progress!</li>
                </ul>
                <HomepageButton buttonText="Register!" onClick={onClickRedirect}/>
            </div>
            <img src="/lgn.png" style={{marginLeft : "10%"}}></img>
        </div>
    )
}

export default Homepage;