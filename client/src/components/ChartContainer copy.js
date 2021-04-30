import React, {useEffect,useState,useRef} from 'react';
import {trackPromise} from 'react-promise-tracker';
import {Grid} from '@material-ui/core';
import {Chart} from './Chart';
import {Loading} from './Loading';
import {ChartForm} from './ChartForm';
import {ChartSelect} from './ChartSelect';

import './css/ChartContainer.css';

export const ChartContainer = () => {
    const nationChartRendered = useRef(false);
    const addedRegion = useRef(true);

    const [time, setTime] = useState({});
    const [loaded, setLoaded] = useState(false); // chart loaded
    const [field, setField] = useState("totale_positivi"); // selected field (campo)
    const [selectedChart, setSelectedChart] = useState("nazione"); // selected chart (nazione / regioni)
    const [selectedRegions, setSelectedRegions] = useState(["Abruzzo"]); // list of selected Regions
    const [chartData, setChartData] = useState([]); // chart Data

    // clear chart data and selected regions
    useEffect(() => {
        setChartData([]);
        setSelectedRegions([]);
        nationChartRendered.current = false;
    }, [selectedChart, field, time])

    // remove deleted regions
    useEffect(()=>{
        if(!addedRegion.current){
            setChartData(c => {
                    return c.filter(series => selectedRegions.indexOf(series.id) > -1);
                }
            );
        }
    }, [selectedRegions]);

    useEffect(() => {
        /* console.log(addedRegion.current); */

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

        if(selectedChart === 'regioni' && selectedRegions.length > 0 && addedRegion.current){
            url = url.concat(lastRegion);
            addedRegion.current = false;
            valid = true;
            //console.log("regioni")
        }else if(selectedChart === "nazione" && !nationChartRendered.current){
            valid = true;
            //console.log("nazione")
            nationChartRendered.current = true;
        }else if(!addedRegion.current){
            setLoaded(true)
        }

        if(time && time['date-start']<time['date-end']){
            url = url.concat("?dataInizio=" + time['date-start']).concat("&dataFine=" + time['date-end']);
        }

        if(field){
            url = url.concat("?&campo=" + field);
        }

        // console.log(url);
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
    }, [field, time, selectedChart, selectedRegions]);

    return (
        /**
         * @return Ritorna il grid contenente il grafico selezionato nel ChartSelect
         */
        <Grid container className="chart-container-wrapper">
            <ChartSelect onClick={setSelectedChart}></ChartSelect>

            <Grid item xs={12} lg={8} className = "chart-container" >
                <Loading/>
                {loaded && (<Chart data={chartData} labelY={field}/>)}
            </Grid>

            <ChartForm className="form-container" addedRegion={addedRegion} time={time} setTime={setTime} setField={setField} setSelectedRegions={setSelectedRegions} selectedRegions={selectedRegions} selectedChart={selectedChart}/>
            
        </Grid>
    )
}