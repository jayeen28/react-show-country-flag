import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, flag } = props.country;
    return (
        <div className="country">
            <h1>This is {name}</h1>
            <img src={flag} alt="flag" className="flag" />
        </div>
    );
};

export default Country;