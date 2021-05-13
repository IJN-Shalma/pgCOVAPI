import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css';
import data from './data/limits_IT_provinces.geojson'
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhY2VyY3Jvd25kIiwiYSI6ImNrb21rbGpnNzBpNGkyd3BuYmRkbmRyMncifQ.CqPZGVTjV3AEX2bfZ9wgUQ';

export const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(12.4818);
    const [lat, setLat] = useState(41.9109);
    const [zoom, setZoom] = useState(4.4);
    const provinceData = useRef(null);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('load', function () {
            // Add a data source containing GeoJSON data.
            map.current.addSource('province', {
                'type':'geojson',
                'data':data
            });
            
            // Add a new layer to visualize the polygon.
            map.current.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': 'province', // reference the data source
                'layout': {},
                'paint': {
                'fill-color': '#0080ff', // blue color fill
                'fill-opacity': 0.5
                }
            });

            // Add a black outline around the polygon.
            map.current.addLayer({
                'id': 'outline',
                'type': 'line',
                'source': 'province',
                'layout': {},
                'paint': {
                'line-color': '#000',
                'line-width': 3
                }
            });
        });
    });
    
    useEffect(() => {
        if (!map.current && !provinceData) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    useEffect(() => {
        if(provinceData.current) return;
        fetch("https://pgcovapi.herokuapp.com/api/province/?dataInizio=2021-05-07&dataFine=2021-05-08")
        .then(response =>{
            return response.json();
        })
        .then(json =>{
            provinceData.current = json;
            console.log(provinceData)
        });
    })
    
    return (
    <>
        <div ref={mapContainer} className="map-container" />
    </>
    );
}

export default Map;
