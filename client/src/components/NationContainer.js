import React, {useEffect,useState} from 'react'
import {Chart} from './Chart'
import './css/NationContainer.css';

export const NationContainer = () => {
    const [json, setJson] = useState([]);

    useEffect(() => {
        let isCancelled = false;

        fetch('https://pgCOVAPI.herokuapp.com/api/nazione?giorni=5')
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then((jsonData) => {
            if(!isCancelled){
                setJson(jsonData);
            };
        });

        return () => { isCancelled = true };
    }, []);

    return ( 
        <div className = "nation-container" >
            <Chart data={json}/>
        </div>
    )
}