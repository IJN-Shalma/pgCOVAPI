import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export const Chart = ({data, labelY}) => {
    return (
        <>
        <ResponsiveLine
		data={data}
		margin={{
			top: 30,
			right: 90,
			bottom: 70,
			left: 80
		}}
		xScale={{
            format: '%d-%m-%Y',
            type: 'time',
            precision: 'day'
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
			legend: labelY.replace("_"," "),
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
                translateX: 85,
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
    </>
);
}