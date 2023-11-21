import React from 'react';
import styles from './HomepageButton.module.css'

const HomepageButton = ({ onClick, buttonText }) => {
    return(
        <button onClick = {onClick}>{ buttonText }</button>
    )
}

export default HomepageButton;