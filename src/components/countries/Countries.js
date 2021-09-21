import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>{countries.length} countries data loaded</h1>
            <div className="countries-container">
                {
                    countries.map(country => <Country country={country} key={country.alpha2Code}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;