import React/* , {useEffect} */ from 'react';
import { ResponsiveLine } from '@nivo/line';

export const Chart = ({ data, campo }) => {
    let dataContainer = [];
    let formattedData = [];
    let days = [];
    let values = [];

    const formatDate = (d) =>{
            let month = String(d.getMonth() + 1);
            let day = String(d.getDate());
            let year = String(d.getFullYear());
          
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return `${day}-${month}-${year}`;
          
    }

    const formatData = () => {
        data.map(day =>{
            let date = new Date(day.data+"Z");
            let formattedDate = formatDate(date);
            /* console.log(formattedDate) */
            days.push(formattedDate);
            
            values.push(day[campo]);
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

    dataContainer = [
        {
            "id": "Italia",
            "color": "hsl(214, 70%, 50%)",
            "data" : formattedData
        }
    ];
    
    return (
        <ResponsiveLine
		data={dataContainer}
		margin={{
			top: 30,
			right: 60,
			bottom: 70,
			left: 100
		}}
		xScale={{
            format: '%d-%m-%Y',
            type: 'time'
            /* precision: 'day' */
		}}
		yScale={{
			type: 'linear',
			stacked: false,
		    min: 'auto',
			max: 'auto'
        }}
        xFormat="time:%d-%m-%Y"
        curve="monotoneX"
		axisBottom={{
            tickValues: 'every month',
			tickSize: 10,
			tickPadding: 5,
			tickRotation: 45,
			legend: "Data",
			legendOffset: 60,
            legendPosition: "middle",
            format: "%Y-%b"
		}}
		axisLeft={{
			tickSize: 0,
			tickPadding: 0,
			tickRotation: 0,
			legend: campo.replace("_"," "),
			legendOffset: -50,
			legendPosition: "middle"
		}}
        enableGridX={false}
        colors={{ scheme: 'spectral' }}
        enablePoints={false}
        lineWidth={3}
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