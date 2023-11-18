import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './userEntryFormsStyling.module.css'
import BackgroundImage from './userEntryFormsBackgroundImage.png'
import axios from 'axios';

const Register = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    })

    const [address, setAddress] = useState({
        street_address: '',
        city: '',
        state: '',
        country: '',
        post_code: ''
    })

    const onChangeUser = (e, type) => {
        if(type === 'fn') {
            setUser((prevUser) => ({ ...prevUser, first_name: e.target.value}));
        } else if (type === 'ln') {
            setUser((prevUser) => ({ ...prevUser, last_name: e.target.value}));
        } else if (type === 'email') {
            setUser((prevUser) => ({ ...prevUser, email: e.target.value}));
        } else {
            setUser((prevUser) => ({ ...prevUser, password: e.target.value}));
        }
    }

    const onChangeAdd = (e, type) => {
        if(type === 'sa') {
            setAddress((prevAddress) => ({ ...prevAddress, street_address: e.target.value}));
        } else if (type === 'city') {
            setAddress((prevAddress) => ({ ...prevAddress, city: e.target.value}));
        } else if (type === 'state') {
            setAddress((prevAddress) => ({ ...prevAddress, state: e.target.value}));
        } else if (type === 'post') {
            setAddress((prevAddress) => ({ ...prevAddress, post_code: e.target.value}));
        } else {
            setAddress((prevAddress) => ({ ...prevAddress, country: e.target.value}));
        }
    }

    const handleSubmit = () => {
        const submitNewUser = async () => {
            await axios({
                method: 'post',
                url: 'http://localhost:8080/users',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    email: user.email,
                    password: user.password,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    address: {
                        street_address: address.street_address,
                        city: address.city,
                        state: address.state,
                        country: address.country,
                        post_code: address.post_code
                    }
                }
            })
            .then(() => {
                history.push('/login');
            })
            .catch(() => {
                throw new Error();
            })
        }

        submitNewUser();
    }



    return(
        <div className = {styles.formBody} style={{backgroundImage: `url(${BackgroundImage})`}}>
            <form className = {styles.formCard} onSubmit={handleSubmit}>
                <h1 className={styles.formHeading} >Sign Up <u>FREE</u> Today!</h1>
                <div className={styles.column}>
                    <input className={styles.formInput} type="text" placeholder="First name" value={user.first_name} onChange={e => onChangeUser(e, 'fn')}></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="Last name" value={user.last_name} onChange={e => onChangeUser(e, 'ln')}></input> <br/>
                    <input className={styles.formInput} type="email" placeholder="Email" value={user.email} onChange={e => onChangeUser(e, 'email')}></input> <br/>
                    <input className={styles.formInput} type="password" placeholder="Password" value={user.password} onChange={e => onChangeUser(e, 'pass')}></input> <br/>
                    <input className={styles.formInput} type="password" placeholder="Confirm password"></input>
                </div>
                <div className={styles.column}>
                    <input className={styles.formInput} type="text" placeholder="Street Address" value={address.street_address} onChange={e => onChangeAdd(e, 'sa')}></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="City" value={address.city} onChange={e => onChangeAdd(e, 'city')}></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="State" value={address.state} onChange={e => onChangeAdd(e, 'state')}></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="Zip Code" value={address.post_code} onChange={e => onChangeAdd(e, 'post')}></input> <br/>
                    <input className={styles.formInput} type="text" placeholder="Country" value={address.country} onChange={e => onChangeAdd(e, 'country')}></input>
                </div>
                <button className={styles.formButton} type="submit">Sign Up!</button>
            </form>
        </div>
    )
};

export default Register;

