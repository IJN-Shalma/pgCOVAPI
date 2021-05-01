import React, {useEffect,useState} from 'react';
import {trackPromise} from 'react-promise-tracker';
import {Grid} from '@material-ui/core';
import {Chart} from './Chart';
import {Loading} from './Loading';
import {ChartForm} from './ChartForm';
import {ChartSelect} from './ChartSelect';

import '../css/ChartContainer.css';

export const ChartContainer = () => {
    const [time, setTime] = useState({});
    const [field, setField] = useState("totale_positivi"); // selected field (campo)
    const [selectedChart, setSelectedChart] = useState("nazione"); // selected chart (nazione / regioni)
    const [selectedRegions, setSelectedRegions] = useState([]); // list of selected Regions
    const [chartData, setChartData] = useState([]); // chart Data
    
    const [hasLoaded, setHasLoaded] = useState(false);
    
    useEffect(() => {
        console.log("rendered")

        const formatDate = d => {
            let month = String(d.getMonth() + 1);
            let day = String(d.getDate());
            let year = String(d.getFullYear());
          
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return `${day}-${month}-${year}`;  
        }
    
        const formatData = json => {
            /* console.log(data) */
            let formattedData = [];
            let days = [];
            let values = [];
            let id = json[0].denominazione_regione || 'Italia';
    
            json.map(day =>{
                let date = new Date(day.data+"Z");
                let formattedDate = formatDate(date);
                /* console.log(formattedDate) */
                days.push(formattedDate);
                
                values.push(day[field]);
                return true;
            })
            
            for (let i=0; i<days.length;i++){
                formattedData[i] = {
                    x: days[i],
                    y: values[i]
                }
            }
    
            return {formattedData, id};
        }
    
        const createChartData = (urlList) => {
            let newData = [];
            let promises = [];
            
            urlList.forEach(url => {
                promises.push(
                    trackPromise(
                        fetch(url)
                        .then(response => {
                            if(response.ok){
                                return response.json();
                            }
                        })
                        .then(jsonData => {
                            let data = formatData(jsonData);
                            /* setChartData([
                                {
                                    "id": data.id,
                                    "color": "hsl(214, 70%, 50%)",
                                    "data" : data.formattedData
                                }
                            ])  */
                            newData.push(
                                {
                                    "id": data.id,
                                    "color": "hsl(214, 70%, 50%)",
                                    "data" : data.formattedData
                                }
                            );
                        })
                    )  
                );
            });
            
            Promise.all(promises).then(() =>{
                setChartData(newData);
            })
        }

        let urlList = [];
        let url;
        setHasLoaded(false);

        if(selectedChart === 'nazione'){
            // eslint-disable-next-line
            url = `https://pgCOVAPI.herokuapp.com/api/${selectedChart}/`;
            url = url.concat(`/?campo=${field}`);
            if(time && time['date-start'] < time['date-end']){
                url = url.concat(`&dataInizio=${time['date-start']}&dataFine=${time['date-end']}`);
            }
            urlList.push(url);
        }else if(selectedChart === 'regioni'){
            if(selectedRegions.length > 0){
                selectedRegions.forEach(r => {
                    url = `https://pgCOVAPI.herokuapp.com/api/${selectedChart}/`;
                    url = url.concat(r);
                    url = url.concat(`/?campo=${field}`);
                    if(time && time['date-start'] < time['date-end']){
                        url = url.concat(`&dataInizio=${time['date-start']}&dataFine=${time['date-end']}`);
                    }

                    urlList.push(url);
                });
            }
        }
        
        createChartData(urlList);

    }, [field, time, selectedRegions, selectedChart])

    useEffect(() => {
        setHasLoaded(true);
    }, [chartData])

    return (
        /**
         * @return Ritorna il grid contenente il grafico selezionato nel ChartSelect
         */
        <Grid container className="chart-container-wrapper">
            <ChartSelect onClick={setSelectedChart}></ChartSelect>

            <Grid item xs={12} lg={8} className = "chart-container" >
                <Loading/>
                {hasLoaded && (<Chart data={chartData} labelY={field}/>)}
            </Grid>

            <ChartForm className="form-container" time={time} setTime={setTime} setField={setField} setSelectedRegions={setSelectedRegions} selectedRegions={selectedRegions} selectedChart={selectedChart}/>
            
        </Grid>
    )
}