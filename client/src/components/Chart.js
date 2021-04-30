import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export const Chart = ({data, labelY}) => {
// 21 colori corrispondenti alle 21 regioni selezionabili (19 regioni, 2 P.A.)
const colors = ['#eb4034','#eb9634','#ebdc34','#c1e010','#80eb07','#0dd41a','#44e37c','#31e8cd','#1ccfd9','#0fafdb','#0f79d6','#1444e0','#2f2196','#6e18c4','#6e18c4','#cf13bc','#c90e5c','#de0b35','#ff191d','#176b0e','#550e57']

// creazione legenda della linea quando il mouse va in hover su di essa
const legendProps =
    {
        anchor: 'top-left',
        direction: 'column',
        justify: false,
        translateX: -50,
        translateY: -190,
        itemsSpacing: 2,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 12,
        itemOpacity: 0.75,
        symbolSize: 10,
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
    };
    // Grafico
    return (
        <>
        <ResponsiveLine
		data={data}
		margin={{
			top: 200,
			right: 40,
			bottom: 80,
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
			legendOffset: -60,
			legendPosition: "middle"
		}}
        enableGridX={false}
        colors={colors}
        enablePoints={false}
        lineWidth={3}
        useMesh={true}
		legends={
            data && data.length <= 11 ? 
            [{
                ...legendProps,
                symbolSize: 18,
                itemsSpacing: 4
            }]
            : 
            [
                {
                  ...legendProps,
                  symbolSize: 10,
                  itemsSpacing: 2,
                  translateX: 0,
                  data: data
                    .slice(0, Math.floor(data.length / 2))
                    .map((cur, index) => ({
                      id: cur.id,
                      label: cur.id,
                      color: colors
                        .slice(0, Math.floor(data.length / 2))[index],
                    })),
                },
                {
                  ...legendProps,
                  symbolSize: 10,
                  itemsSpacing: 2,
                  translateX: 120,
                  data: data
                    .slice(Math.floor(data.length / 2))
                    .map((cur, index) => ({
                      id: cur.id,
                      label: cur.id,
                      color: colors
                        .slice(Math.floor(data.length / 2))[index],
                    })),
                },
              ]
        }
	/>
    </>
);
}