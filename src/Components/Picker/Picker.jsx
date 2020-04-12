import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './Picker.module.css';
import { fetchCountries } from '../../api';

const Picker = ({countryChange}) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            setFetchCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={ (e) => countryChange(e.target.value)}>
                <option value='global'>Gobal</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Picker;