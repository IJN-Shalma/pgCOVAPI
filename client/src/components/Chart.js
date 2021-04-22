import React, {useEffect,useRef} from 'react';
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
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
    console.log(formattedData)

    dataContainer = [
        {
            "id":"covid",
            "color": "hsl(214, 70%, 50%)",
            "data" : formattedData
        }
    ];
    

    /*
    const data = [
        {
            "id": "japan",
            "color": "hsl(214, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 11
                },
                {
                    "x": "helicopter",
                    "y": 211
                },
                {
                    "x": "boat",
                    "y": 26
                },
                {
                    "x": "train",
                    "y": 22
                },
                {
                    "x": "subway",
                    "y": 94
                },
                {
                    "x": "bus",
                    "y": 82
                },
                {
                    "x": "car",
                    "y": 49
                },
                {
                    "x": "moto",
                    "y": 144
                },
                {
                    "x": "bicycle",
                    "y": 61
                },
                {
                    "x": "others",
                    "y": 130
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(285, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 121
                },
                {
                    "x": "helicopter",
                    "y": 121
                },
                {
                    "x": "boat",
                    "y": 28
                },
                {
                    "x": "train",
                    "y": 134
                },
                {
                    "x": "subway",
                    "y": 190
                },
                {
                    "x": "bus",
                    "y": 185
                },
                {
                    "x": "car",
                    "y": 191
                },
                {
                    "x": "moto",
                    "y": 137
                },
                {
                    "x": "bicycle",
                    "y": 140
                },
                {
                    "x": "others",
                    "y": 87
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(114, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 121
                },
                {
                    "x": "helicopter",
                    "y": 190
                },
                {
                    "x": "boat",
                    "y": 113
                },
                {
                    "x": "train",
                    "y": 257
                },
                {
                    "x": "subway",
                    "y": 231
                },
                {
                    "x": "bus",
                    "y": 116
                },
                {
                    "x": "car",
                    "y": 52
                },
                {
                    "x": "moto",
                    "y": 277
                },
                {
                    "x": "bicycle",
                    "y": 169
                },
                {
                    "x": "others",
                    "y": 13
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(292, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 108
                },
                {
                    "x": "helicopter",
                    "y": 176
                },
                {
                    "x": "boat",
                    "y": 181
                },
                {
                    "x": "train",
                    "y": 189
                },
                {
                    "x": "subway",
                    "y": 66
                },
                {
                    "x": "bus",
                    "y": 119
                },
                {
                    "x": "car",
                    "y": 161
                },
                {
                    "x": "moto",
                    "y": 282
                },
                {
                    "x": "bicycle",
                    "y": 202
                },
                {
                    "x": "others",
                    "y": 136
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(204, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 22
                },
                {
                    "x": "helicopter",
                    "y": 8
                },
                {
                    "x": "boat",
                    "y": 222
                },
                {
                    "x": "train",
                    "y": 166
                },
                {
                    "x": "subway",
                    "y": 25
                },
                {
                    "x": "bus",
                    "y": 110
                },
                {
                    "x": "car",
                    "y": 2
                },
                {
                    "x": "moto",
                    "y": 16
                },
                {
                    "x": "bicycle",
                    "y": 77
                },
                {
                    "x": "others",
                    "y": 236
                }
            ]
        }
    ];
    */

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
        enableGridX={true}
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


    {/* 
    <ResponsiveLine
            data={formatData()}
            margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        xScale={{ type: 'linear' }}
        yScale={{ type: 'linear', stacked: true, min: 0, max: 2500 }}
        curve="monotoneX"
        axisTop={null}
        axisRight={{
            tickValues: [
                0,
                500,
                1000,
                1500,
                2000,
                2500
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: '',
            legendOffset: 0
        }}
        axisBottom={{
            tickValues: [
                0,
                20,
                40,
                60,
                80,
                100,
                120
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2f',
            legend: 'price',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickValues: [
                0,
                500,
                1000,
                1500,
                2000,
                2500
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: 'volume',
            legendOffset: -40,
            legendPosition: 'middle'
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
        gridXValues={[ 0, 20, 40, 60, 80, 100, 120 ]}
        gridYValues={[ 0, 500, 1000, 1500, 2000, 2500 ]}
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
    )*/}
}