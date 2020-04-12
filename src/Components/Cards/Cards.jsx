import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';
import CardConent from '@material-ui/core/CardContent';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data:{ confirmed, recovered, deaths, lastUpdate }}) =>{
    
    if(!confirmed){
        return 'loading...';   
    }
    return (
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                   <CardConent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp 
                                start = {0}
                                end = {confirmed.value}
                                duration = {1.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography colr="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p"> Number of active cases of COVID-19.</Typography>
                   </CardConent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                   <CardConent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp 
                                start = {0}
                                end = {recovered.value}
                                duration = {1.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"  component="p">Number of recoveries from COVID-19.</Typography>
                   </CardConent>
               </Grid>

               <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                   <CardConent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp 
                                start = {0}
                                end = {deaths.value}
                                duration = {1.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Number of deaths caused by COVID-19.</Typography>
                   </CardConent>
               </Grid>


           </Grid>
       </div>
    )
}

export default Cards;