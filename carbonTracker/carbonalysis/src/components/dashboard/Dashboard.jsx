import React, { useState, useEffect, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import axios from 'axios';
import styles from './Dashboard.module.css'


const useStyles = makeStyles(() => ({
    chartContainer: {
        position: "absolute",
        left: "70px"
    },
    barchart: {
        minWidth: "400px",
        display: "inline-block",

    },
}));

export default function Dashboard() {
    const classes = useStyles();

    const userId = sessionStorage.getItem('userId');

    const [emissionsRes, setEmissionsRes] = useState(0);
    const [footprintRes, setFootprintRes] = useState(0);
    const [allEmissions, setAllEmissions] = useState(0);
    const [allFootprints, setAllFootprints] = useState(0);

    const { user } = useContext(carbonFootprintContext);

    const footprintData = [
        { averages: 'Your Average', footprint: footprintRes },
        { averages: 'Global Average', footprint: allFootprints }
    ];

    const emissionsData = [
        { averages: 'Your Average', emissions: emissionsRes },
        { averages: 'Global Average', emissions: allEmissions }
    ];

    
    const calculateAverage = (data, type, user) => {
        let total = 0;

        for (const x of data) {
            if (type === 'emissions') {
                total += x.total_emissions;
            } else {
                total += x.total_footprint;
            }
        }

        total /= data.length;

        if (user === 'all' && type === 'emissions') {
            setAllEmissions(total);
        } else if (user === 'all' && type === 'footprint') {
            setAllFootprints(total);
        } else if (user === 'self' && type === 'emissions') {
            setEmissionsRes(total);
        } else {
            setFootprintRes(total);
        }
    }

    useEffect(() => {
        const emissionsFetch = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/emissions/data/${userId}`,
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then((response) => {
                calculateAverage(response.data, 'emissions', 'self');
            })
            .catch(() => {
                throw new Error();
            });
        }

        const footprintFetch = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/footprint/data/${userId}`,
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then((response) => {
                calculateAverage(response.data, 'footprint', 'self');
            })
            .catch(() => {
                throw new Error();
            });
        }

        const getAllFootprints = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/footprint`,
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then((response) => {
                calculateAverage(response.data, 'footprint', 'all');
            })
            .catch(() => {
                throw new Error();
            });
        }

        const getAllEmissions = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/emissions`,
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then((response) => {
                calculateAverage(response.data, 'emissions', 'all');
            })
            .catch(() => {
                throw new Error();
            });
        }
        
        emissionsFetch();
        footprintFetch();
        
        getAllFootprints();
        getAllEmissions();
    }, [calculateAverage, user])

    return (
        <div className={styles.dashBody}>
            <div className={styles.dashColumnOne}>
                <h1 className={styles.dashColumnHeading}>How You Compare Against The World</h1>
                <div>
                    <Paper style={{boxShadow: "none",margin: "30px 60px"}} className={classes.barchart}>
                        <Chart
                            data={footprintData}
                        >
                            <ArgumentAxis />
                            <ValueAxis max={1000} />

                            <BarSeries
                                valueField="footprint"
                                argumentField="averages"
                                color="#A9FFF7"
                            />
                            <Title text="Average Carbon Footprint (in points)" />
                            <Animation />
                        </Chart>
                    </Paper>

                    <Paper style={{boxShadow: "none",margin: "30px 60px"}} className={classes.barchart}>
                        <Chart
                            data={emissionsData}
                        >
                            <ArgumentAxis />
                            <ValueAxis max={1000} />

                            <BarSeries
                                valueField="emissions"
                                argumentField="averages"
                                color="#94FBAB"
                            />
                            <Title text="Average CO2 Emissions (in tons)" />
                            <Animation />
                        </Chart>
                    </Paper>
                </div>
            </div>
            <div className={styles.dashColumnTwo}>
                <div className={styles.dashColumnTwoDiv}  >
                <h1 className={styles.dashColumnHeading}>Your Stats</h1>
                <div style={{textAlign:"left"}}>
                <div class="MuiTypography-root Title-root-8 MuiTypography-h5" style={{color:"white",textAlign:"left"}}>
                    Avg. Carbon Footprint : <span style={{color:"#FE938C"}}>{footprintRes} points</span> <br/>
                </div>
                <div class="MuiTypography-root Title-root-8 MuiTypography-h5" style={{color:"white",textAlign:"left"}}>
                    Avg. CO2 Emissions : <span style={{color:"#FE938C"}}>{emissionsRes} tons</span>
                </div>
                </div>
                </div>
                <hr style={{color:"white"}}></hr>
                <div className={styles.dashColumnTwoDiv}>
                <h1 className={styles.dashColumnHeading} style={{}}>Global Resources</h1>
                <div >
                <div style={{textAlign:"left", marginBottom:"5px"}}>
                        <a className={styles.linkItem} target="_blank" href="https://blogs.ei.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/">
                            35 Easy Ways to Reduce Carbon Footprint
                        </a>
                </div>
                <div style={{textAlign:"left", marginBottom:"5px"}}>
                        <a className={styles.linkItem} target="_blank" href="https://cotap.org/reduce-carbon-footprint/">
                            25 Tips to Reduce Carbon Footprint
                        </a>
                </div>
                <div style={{textAlign:"left", marginBottom:"5px"}}>
                        <a className={styles.linkItem} target="_blank" href="https://blogs.ei.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/">
                            25+ Ways to Reduce Carbon Emissions
                        </a>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

