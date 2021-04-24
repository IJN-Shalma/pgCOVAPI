import React, {useEffect,useState} from 'react';
import {Chart} from './Chart';
import './css/NationContainer.css';
import {Loading} from './Loading'
import {trackPromise} from 'react-promise-tracker';

export const NationContainer = () => {
    const [json, setJson] = useState([]);

    useEffect(() => {
        let isCancelled = false;

        trackPromise(
            fetch('https://pgCOVAPI.herokuapp.com/api/nazione')
            .then(response => {
                if(response.ok){
                    return response.json();
                }
            })
            .then((jsonData) => {
                if(!isCancelled){
                    setJson(jsonData);
                };
            })
        );

        return () => { isCancelled = true };
    }, []);

    return (
        <div className="nation-container">
            <div className = "chart-container" >
                <Loading/>
                <Chart data={json}/>
            </div>
        </div>
    )
}