import React, {useEffect,useState,useRef} from 'react';
import {trackPromise} from 'react-promise-tracker';
import {Grid} from '@material-ui/core';
import {Chart} from './Chart';
import {Loading} from './Loading';
import {NationForm} from './NationForm';
import {RegionForm} from './RegionForm';
import {ChartSelect} from './ChartSelect';

import './css/ChartContainer.css';

export const ChartContainer = () => {
    const nationChartRendered = useRef(false);

    const [dateEnd, setDateEnd] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [field, setField] = useState("totale_positivi");
    const [selectedChart, setSelectedChart] = useState("nazione");
    const [selectedRegions, setSelectedRegions] = useState(["Abruzzo"]);
    const [chartData, setChartData] = useState([]);
    const [addedRegion, setAddedRegion] = useState(true);

    useEffect(() => {
        setChartData([]);
        setSelectedRegions([]);
        nationChartRendered.current = false;
    }, [selectedChart, field])

    useEffect(()=>{
        setChartData(c => {
                return c.filter(series => selectedRegions.indexOf(series.id) > -1);
            }
        );
    }, [selectedRegions]);

    useEffect(() => {
        const formatDate = (d) =>{
            let month = String(d.getMonth() + 1);
            let day = String(d.getDate());
            let year = String(d.getFullYear());
          
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return `${day}-${month}-${year}`;  
        }

        const formatData = (json) => {
        /* console.log(data) */
        let formattedData = [];
        let days = [];
        let values = [];
        let denominazioneRegione = json[0].denominazione_regione;

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

        return {formattedData, denominazioneRegione};
        }

        let url = `https://pgCOVAPI.herokuapp.com/api/${selectedChart}/`;
        let valid = false; //valid regions selected

        //tracking fetch status
        setLoaded(false);

        //ultima regione inserita
        let lastRegion = selectedRegions[selectedRegions.length-1];

        if(selectedChart === 'regioni' && selectedRegions.length > 0 && addedRegion){
            url = url.concat(lastRegion);
            setAddedRegion(false);
            valid = true;
        }else if(selectedChart === "nazione" && !nationChartRendered.current){
            valid = true;
            nationChartRendered.current = true;
        }else if(!addedRegion){
            setLoaded(true)
        }

        if(dateStart && dateEnd && dateStart<dateEnd){
            url = url.concat("?dataInizio=" + dateStart).concat("&dataFine=" + dateEnd);
        }

        if(field){
            url = url.concat("?&campo=" + field);
        }

        /* console.log(url); */
        
        if(valid){
            //track fetch status using custom hook
            trackPromise(
                fetch(url)
                .then(response => {
                    if(response.ok){
                        return response.json();
                    }
                })
                .then((jsonData) => {
                    let {formattedData, denominazioneRegione} = formatData(jsonData);
                    setChartData(oldData => [
                        ...oldData,
                        {
                            "id": denominazioneRegione || "Italia",
                            "color": "hsl(214, 70%, 50%)",
                            "data" : formattedData
                        }
                    ]);
                    
                    setLoaded(true);
                })
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [field, dateStart, dateEnd, selectedChart, selectedRegions]);

    return (
        <Grid container className="chart-container-wrapper">
            <ChartSelect onClick={setSelectedChart}></ChartSelect>

            <Grid item xs={12} lg={8} className = "chart-container" >
                <Loading/>
                {loaded && (<Chart data={chartData} labelY={field}/>)}
            </Grid>

            {
            selectedChart==="nazione" 
                ? (<NationForm setDateStart={setDateStart} setDateEnd={setDateEnd} setField={setField}/>) 
                : (<RegionForm setAddedRegion={setAddedRegion} setDateStart={setDateStart} setDateEnd={setDateEnd} setField={setField} setSelectedRegions={setSelectedRegions} selectedRegions={selectedRegions}/>)
            }
        </Grid>
    )
}