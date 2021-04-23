import React/* , {useEffect} */ from 'react';
import { ResponsiveLine } from '@nivo/line';

export const Chart = ({ data }) => {
    let dataContainer = [];
    let formattedData = [];
    let days = [];
    let values = [];

    const formatData = () => {
        data.map(day =>{
            days.push(day.data);
            values.push(day.totale_positivi);
            return true;
        })
        
        for (let i=0; i<days.length;i++){
            formattedData[i] = {
                x: days[i],
                y: values[i]
            }
        }
    }

    formatData();
    /* console.log(formattedData) */

    dataContainer = [
        {
            "id":"covid",
            "color": "hsl(214, 70%, 50%)",
            "data" : formattedData
        }
    ];
    
    return (
        <ResponsiveLine
		data={dataContainer}
		margin={{
			top: 50,
			right: 110,
			bottom: 50,
			left: 60
		}}
		xScale={{
			type: 'point'
		}}
		yScale={{
			type: 'linear',
			stacked: false,
		    min: 'auto',
			max: 'auto'
		}}
        curve="monotoneX"
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: "Data",
			legendOffset: 36,
			legendPosition: "middle"
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: "Infetti Totali",
			legendOffset: -50,
			legendPosition: "middle"
		}}
        enableGridX={false}
        colors={{ scheme: 'spectral' }}
        lineWidth={1}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
		legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 2,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 12,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
	/>
);
}