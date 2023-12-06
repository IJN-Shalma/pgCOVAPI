import React, { useEffect, useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/DataCarousel.css'

const BE_URL = process.env.BE_URL || "https://pgcovapi.net";

export const DataCarousel = () => {

    const [responseAPI, setResponseAPI] = useState({})
    const dataOk = useRef(false)

    useEffect(() => {

        const url = `${BE_URL}/api/nazione/?giorni=2`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((jsonData) => {
                if(jsonData.length > 0){
                    dataOk.current = true;
                    setResponseAPI(jsonData[jsonData.length - 1]);
                }
                console.log(dataOk.current)
            })
    }, []);

    function formatDate(raw_date) {
        let date = new Date(raw_date + "Z");
        let month = String(date.getMonth() + 1);
        let day = String(date.getDate());
        let year = String(date.getFullYear());

        return `${day} - ${month} - ${year}`;
    }


    return (
        <>
        {dataOk.current && 
            <div className='carousel-container'>
                <div className='carousel-wrapper'>
                    <p className='today-date'>{formatDate(responseAPI.data)}</p>
                    <Carousel showArrows={false} showThumbs={false} autoPlay infiniteLoop swipeable centerMode showStatus={false} stopOnHover={false}>
                        <div className="data-box">
                            <p className="datainfo">TOTALE POSITIVI</p>
                            <p className="data c1">{responseAPI.totale_positivi}</p>
                        </div>
                        <div className="data-box">
                            <p className="datainfo">NUOVI POSITIVI</p>
                            <p className="data c2">{responseAPI.nuovi_positivi}</p>
                        </div>
                        <div className="data-box">
                            <p className="datainfo">DECEDUTI</p>
                            <p className="data c3">{responseAPI.deceduti}</p>
                        </div>
                        <div className="data-box">
                            <p className="datainfo">OSPEDALIZZATI</p>
                            <p className="data c4">{responseAPI.totale_ospedalizzati}</p>
                        </div>
                        <div className="data-box">
                            <p className="datainfo">TERAPIA INTENSIVA</p>
                            <p className="data c5">{responseAPI.terapia_intensiva}</p>
                        </div>
                        <div className="data-box">
                            <p className="datainfo">TAMPONI</p>
                            <p className="data c5">{responseAPI.tamponi}</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        }
        </>
    )
}