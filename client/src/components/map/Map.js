import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css';
import data from './data/limits_IT_provinces.json'
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhY2VyY3Jvd25kIiwiYSI6ImNrb21rbGpnNzBpNGkyd3BuYmRkbmRyMncifQ.CqPZGVTjV3AEX2bfZ9wgUQ';

export const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(12.4818);
    const [lat, setLat] = useState(41.9109);
    const [zoom, setZoom] = useState(4.4);

    function createSource(curr, prev){
       data.features.forEach(feature => {
           /* console.log(json)
           console.log(feature) */
           let propertiesCurr = curr.filter((obj) => obj.codice_provincia === feature.properties.prov_istat_code_num);
           let propertiesPrev = prev.filter((obj) => obj.codice_provincia === feature.properties.prov_istat_code_num);
           feature.properties.totale_casi = propertiesCurr[0].totale_casi - propertiesPrev[0].totale_casi;
        });
    }
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        
        fetch("https://pgcovapi.herokuapp.com/api/province/?dataInizio=2021-05-05&dataFine=2021-05-06")
        .then(response =>{
            return response.json();
        })
        .then(curr =>{
            fetch("https://pgcovapi.herokuapp.com/api/province/?dataInizio=2021-05-04&dataFine=2021-05-05")
            .then(response =>{
                return response.json();
            })
            .then(prev =>{
                map.current.on('load', function () {
                    createSource(curr, prev);
                    // Add a data source containing GeoJSON data.
                    map.current.addSource('province', {
                        'type':'geojson',
                        'generateId': true,
                        'data':data
                    });
                    
                    // Add a new layer to visualize the polygon.
                    map.current.addLayer({
                        'id': 'province-fill',
                        'type': 'fill',
                        'source': 'province', // reference the data source
                        'layout': {},
                        'paint': {
                            'fill-color': {
                                "property": "totale_casi",
                                "stops": [
                                    [0, '#33cc33'],
                                    [10, '#66ff33'],
                                    [100, '#ffff66'],
                                    [500, '#ff9933'],
                                    [1000, '#ff0000']
                                ]
                            },
                            'fill-opacity': [
                                'case',
                                ['boolean', ['feature-state', 'hover'], false],
                                1,
                                0.5
                            ]
                        }
                    });
    
                    map.current.addLayer({
                        'id': 'outline',
                        'type': 'line',
                        'source': 'province', // reference the data source
                        'layout': {},
                        'paint': {
                            'line-color': '#fff',
                            'line-width': 1
                        }
                    });
    
                    var popup = new mapboxgl.Popup({
                        closeButton: false,
                        closeOnClick: false,
                        className: "popup"
                    });
                    
                    var hoveredStateId = null;
                    // When the user moves their mouse over the state-fill layer, we'll update the
                    // feature state for the feature under the mouse.
                    map.current.on('mousemove', 'province-fill', function (e) {
                        if (e.features.length > 0) {
                            if (hoveredStateId !== null) {
                                map.current.setFeatureState(
                                    { source: 'province', id: hoveredStateId },
                                    { hover: false }
                                );
                                popup.remove();
                            }
    
                            var coordinates = e.lngLat;
                            var description = e.features[0].properties.totale_casi;
                            popup.setLngLat(coordinates).setHTML(`<h4>${e.features[0].properties.prov_name}</h4><br/>Nuovi Casi: ${description}`).addTo(map.current);
    
                            hoveredStateId = e.features[0].id;
                            map.current.setFeatureState(
                                { source: 'province', id: hoveredStateId },
                                { hover: true }
                            );
                        }
                    });
                        
                    // When the mouse leaves the province-fill layer, update the feature state of the
                    // previously hovered feature.
                    map.current.on('mouseleave', 'province-fill', function () {
                        if (hoveredStateId !== null) {
                            map.current.setFeatureState(
                                { source: 'province', id: hoveredStateId },
                                { hover: false }
                            );
                        }
                        hoveredStateId = null;
                        popup.remove();
                    });
                });
            });  
        });
    });
    
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });
    
    return (
    <>
        <div ref={mapContainer} className="map-container" />
    </>
    );
}

export default Map;
