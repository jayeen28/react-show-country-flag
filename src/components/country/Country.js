import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, flag, numericCode } = props.country;
    return (
        <div className="country">
            <div className="country-left">
                <h2>Name: {name}</h2>
                <h3>Capital: {capital}</h3>
                <button onClick={() => showFlag(flag, 'flag' + numericCode)} className="show-flag-btn">Show Flag</button>
            </div>
            <div className="country-right">
                <img alt="" className="flag" id={'flag' + numericCode} />
            </div>
        </div>
    );
};
const showFlag = (flag, flagId) => {
    const targetFlagElement = document.getElementById(flagId);
    targetFlagElement.setAttribute('src', flag);
}

export default Country;