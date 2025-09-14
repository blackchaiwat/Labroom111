// import * as Chartist from 'chartist';

/*===============================================================
                        Default Dashboard
=================================================================*/

// rounded cap chart
export const groupChartOption = {
    series: [{
        data: [0.600, 0.400, 0.800, 1.000, 0.600, 0.500, 1.100, 1.300, 1, 0.800, 0.400, 0.600, 0.400, 0.350, 0.3]
    }],
    options: {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: ['rgba(21, 141, 247, 0.1)', 'rgba(21, 141, 247, 0.25)', 'rgba(21, 141, 247, 0.4)', 'rgba(21, 141, 247, 0.5)', 'rgba(21, 141, 247, 0.6)',
            'rgba(21, 141, 247, 0.7)', 'rgba(21, 141, 247, 0.8)', 'rgba(21, 141, 247, 0.9)', 'rgba(21, 141, 247, 0.8)', 'rgba(21, 141, 247, 0.7)', 'rgba(21, 141, 247, 0.6)', 'rgba(21, 141, 247, 0.5)', 'rgba(21, 141, 247, 0.4)',
            'rgba(21, 141, 247, 0.25)', 'rgba(21, 141, 247, 0.1)'],
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: 'top',
                columnWidth: '13%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            show: true,
            borderColor: '#f3f3f3',
            padding: {
                left: 25,
                right: 30
            },
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        tooltip: {
            enabled: false
        },
        yaxis: {
            show: true,
            min: 0,
            max: 1.375,
            logBase: 0.125,
            tickAmount: 11,
            labels: {
                show: true,
            }
        },
        xaxis: {
            labels:{
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        }
    }
};

// radialbarchart data
export const radialchart = {
    series: [60],
    options: {
        chart: {
            type: 'radialBar',
        },
        colors: ["#fb2e63"],
        stroke: {
            lineCap: 'round'
        },
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    size: '80%',
                },
                dataLabels: {
                    name: {
                        show: true,
                        color: "#000",
                        fontSize: "16px",
                        FontWeight: '800'
                    },
                    value: {
                        show: true,
                        color: "#000",
                        fontSize: "16px",
                        FontWeight: '800'
                    }
                }
            },
        },
        labels: ['March. 2023'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        offsetX: -30
                    }
                },
            },
        ]
    }
}

// Call Chart
export const callChart = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
    series: [
        [100, 300, 500, 700, 600, 400, 300, 100, 300, 500, 700, 600, 400, 100]
    ]
}
export const callChartOptions = {
    scaleShowLabels: false,
    stackBars: true,
    height: 85,
    chartPadding: {
        left: 0,
        bottom: 0,
        right: 0,
        top: 5,
    },
    axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
    },
    axisX: {
        low: 0,
        showLabel: false,
        showGrid: false,
        offset: 0
    }
}
export const callChartListener = {
    draw: function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 10px ; stroke-linecap: round'
            });
        }
    }
}

// Small Chart

export const smallChart = {
    series: [{
        data: [200, 250, 300, 400, 250]
    }],
    options: {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: '#000000',
        plotOptions: {
            bar: {
                borderRadius: 0,
                columnWidth: '50',
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            padding: {
                bottom: -40,
            },
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            show: true,
            min: 0,
            max: 400,
            logBase: 100,
            labels: {
                show: false
            }
        }
    }
}


/*===============================================================
                        Hospital Dashboard
=================================================================*/

export const smallChart1 = {
    series: [
        {
            data: [400, 900, 800, 1000, 700, 1200, 300]
        },
        {
            data: [1000, 500, 600, 400, 700, 200, 1100]
        }
    ],
    options: {
        chart: {
            type: "bar",
            height: 100,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "40px",
                borderRadius: 2,
                borderRadiusApplication: 'end',
            },
        },
        grid: {
            show: false,
            padding: {
                top: -1,
                left: -8,
                right: 15,
                bottom: -6
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#fb2e63', 'rgba(251, 46, 99, 0.1)'],
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
            {
                breakpoint: 1365,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
        ]
    }
}

export const smallChart2 = {
    series: [
        {
            data: [400, 600, 900, 800, 1000, 1200, 500]
        },
        {
            data: [1000, 800, 500, 600, 400, 200, 900]
        }
    ],
    options: {
        chart: {
            type: "bar",
            height: 100,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "40px",
                borderRadius: 2,
                borderRadiusApplication: 'end',
            },
        },
        grid: {
            show: false,
            padding: {
                top: -1,
                left: -8,
                right: 15,
                bottom: -6
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#fb740d', 'rgba(251, 116, 13, 0.1)'],
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
            {
                breakpoint: 1365,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
        ]
    }
}

export const smallChart3 = {
    series: [
        {
            data: [1100, 900, 600, 1000, 700, 1200, 300]
        },
        {
            data: [300, 500, 800, 400, 700, 200, 1100]
        }
    ],
    options: {
        chart: {
            type: "bar",
            height: 100,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "40px",
                borderRadius: 2,
                borderRadiusApplication: 'end',
            },
        },
        grid: {
            show: false,
            padding: {
                top: -1,
                left: -8,
                right: 15,
                bottom: -6
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#158df7', 'rgba(21, 141, 247, 0.1)'],
        xaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            marker: {
                show: false,
            },
            fixed: {
                enabled: false,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
            {
                breakpoint: 1365,
                options: {
                    chart: {
                        width: 80,
                    }
                },
            },
        ]
    }
}

// Hospital Curve

export const Animationline = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            fill: true,
            tension: 0.5,
            borderColor: '#ffffff',
            backgroundColor: '#000000',
            borderWidth: 4,
            data: [2, 2.4, 1.5, 2.7, 1, 2.3, 1.2],
        },
        {
            fill: false,
            tension: 0.5,
            borderColor: '#ffffff',
            borderDash: [4, 4, 4],
            borderWidth: 2,
            scaleShowLabels: false,
            data: [2.3, 1.8, 2.2, 1.8, 3, 1.5, 2.2]
        },
    ]
}

export const AnimationLineOptions = {
    animations: {
        tension: {
          duration: 1000,
          easing: 'easeInCubic',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        x: {
          
            display: false,
            grid: {
                display: false
            }
        },
        y: {
          display: false,
          grid: {
              display: false
          }
        }
      },
    layout: {
        padding: {
            bottom: 10
        }
    },
    legend: { display: false },
    responsive: true,
    elements: {
        point: {
            radius: 0
        }
    },
  
 
    plugins: false
}



export const AnimationChart = {
    series: [
        {
            data: [2, 2.4, 1.5, 2.7, 1, 2.3, 1.2]
        },
        {
            data: [2.3, 1.8, 2.2, 1.8, 3, 1.5, 2.2]
        }
    ],
    options: {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false
            },
        },
        colors: ['#ffffff', '#ffffff'],
        stroke: {
            width: 3,
            curve: 'smooth',
            dashArray: [0, 7, 5]
        },
        legend: {
            show: false,
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        grid: {
            show: false,
            borderColor: '#ffffff',
        },
        tooltip: {
            enabled: false
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    }
}

export const hospitalCurveChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [
        [2, 2.4, 1.5, 2.7, 1, 2.3, 1.2],
        [2.3, 1.8, 2.2, 1.8, 3, 1.5, 2.2]
    ]
}

export const hospitalCurveChartOptions = {
    fullWidth: true,
    height: 180,
    low: 0,
    offset: 0,
    showArea: true,
    showPoint: false,
    chartPadding: {
        left: -22,
        right: 0,
        bottom: -12,
        top: 10
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        scaleMinSpace: 40
    },
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    }
}

/*===============================================================
                        Sass Dashboard
=================================================================*/
export const sassSmallChartData = {
    series: [{
        data: [200, 400, 300, 100, 250]
    }],
    options: {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
            padding: {
                top: -15,
                bottom: -10,
                left: -10,
                right: 15

            }
        },
        colors: ['#ffffff'],
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false
            }
        }
    }
}



export const sassUserChart = {
    series: [
        {
            data: [0.3, 0.6, 0.5, 0.8, 0.5, 0.4, 0.65, 0.65, 0.65, 0.9, 0.3, 0.6, 0.3],
        },
        {
            data: [0.4, 0.2, 0.1, 0.1, 0.2, 0.2, 0.1, 0.2, 0.1, 0, 0.1, 0.2, 0.4]
        }
    ],
    options: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            }
        },
        colors: ['#fb2e63d9', 'rgba(21, 141, 247, 0.1)'],
        plotOptions: {
            bar: {
                borderRadius: 5,
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'all',
                horizontal: false,
                columnWidth: '10%',
            }
        },
        grid: {
            show: true,
            padding: {
                top: -35,
                right: 35,
                left: 30
            },
            xaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            labels: {
                show: false
            },
        },
        yaxis: {
            logBase: 0.10,
            tickAmount: 10,
            min: 0,
            max: 1,
        }
    }
}
export const sassUserChartOptions = {
    stackBars: true,
    fullWidth: true,
    height: 358,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }
}

export const sassUserChartListener = {
    draw: function (ctx) {
        if (ctx.type === 'bar') {
            ctx.element.attr({
                x1: ctx.x1 + 0.05,
                style: 'stroke-width: 10px ; stroke-linecap: round'
            });
        }
    },
    created: function (ctx) {
        var defs = ctx.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(234, 57, 103, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(255, 79, 96, 1)'
        });
    }
}



/*===============================================================
                        CRM Dashboard
=================================================================*/
export const ProjectData = {
    series: [{
        data: [75, 150, 220, 280, 220, 150, 75, 150, 220, 280, 220, 75]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            }
        },
        colors: ['rgb(83, 84, 255)'],
        plotOptions: {
            bar: {
                borderRadius: 14,
                borderRadiusApplication: 'top',
                columnWidth: '35%',
                horizontal: false,
            }
        },
        grid: {
            show: false,
            padding: {
                // top: -5,
                left: 30,
                right: 40,
                bottom: -10
            },
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        tooltip: {
            x: { show: false }
        }
    }
}


export const linechartsmooth = {
    series: [{
        data: [2, 1, 1.2, 0.8, 2, 1.5, 2.5, 1.3, 3, 2]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ['#fb2e63'],
        grid: {
            show: false,
            padding: {
                top: -15,
                left: -10
            }
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    }
}

export const ReflactChartData = {
    series: [{
        data: [150, 300, 500, 700, 600, 400, 300, 150, 300, 500, 700, 600, 400, 100]
    },
    {
        data: [-150, -300, -500, -700, -600, -400, -300, -150, -300, -500, -700, -600, -400, -100]
    }
    ],
    options: {
        chart: {
            type: 'bar',
            height: 440,
            toolbar: {
                show: false
            },
            stacked: true
        },
        colors: ['#fb2e63', '#fb2e6347'],
        plotOptions: {
            bar: {
                borderRadius: 5,
                borderRadiusApplication: 'arounded',
                borderRadiusWhenStacked: 'all',
                columnWidth: '43%',
                horizontal: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            padding: {
                left: 60,
                top: -20,
                bottom: 20
            },
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        yaxis: {
            show: false,
            min: -700,
            max: 700,
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 280,
                        offsetX: -30
                    }
                },
            },
        ]
    },
}

/*===============================================================
                        Common Options
=================================================================*/
export const smallChartListener = {
    draw: function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 3px'
            });
        }
    }
}
