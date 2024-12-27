import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';

const Graph = ({ metric, device }) => {
    useEffect(() => {
        const fetchDataAndRenderChart = async () => {
            try {
                const response = await axios.get(
                    `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
                );
                const chartData = response.data;

                // Get the DOM element for the chart
                let chartDom = document.getElementById('main-chart');
                let myChart = echarts.init(chartDom);

                // Define the chart options
                let option = {
                    backgroundColor: 'white', // Set the chart background color (light grey)
                    title: {
                        text: `${metric.toUpperCase()}`,
                        textStyle: {
                            color: '#000' // Title text color (optional, set to black)
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: chartData.times,
                        axisLine: { lineStyle: { color: '#000' } } // X-axis line color (black)
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: { lineStyle: { color: '#000' } } // Y-axis line color (black)
                    },
                    series: [
                        {
                            data: chartData.values,
                            type: 'line',
                            itemStyle: {
                                color: 'blue' // Line color (set to your preferred color)
                            }
                        }
                    ]
                };

                // Apply the options to the chart
                myChart.setOption(option);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAndRenderChart();
    }, [metric, device]);

    return <div id="main-chart" style={{ width: '100%', height: '500px' }}></div>;
};

export default Graph;
