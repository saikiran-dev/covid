import React from 'react';

import { Cards, Chart, Picker } from './Components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import coronaImage from './images/corona.png';

class App extends React.Component{
    state={
        data:{},
        country: '',
    }
    async componentDidMount(){
        const data = await fetchData();
        this.setState({data: data});
    }

    countryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({data: data, country:country});
    }
    render(){
        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage}></img>
                <Cards data={data} />
                <Picker countryChange={this.countryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;