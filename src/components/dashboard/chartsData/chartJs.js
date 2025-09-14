/*===============================================================
                        Default Dashboard
=================================================================*/

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement,
    ArcElement,
    RadialLinearScale,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement,
    ArcElement,
    RadialLinearScale
);



// LineChart



export const LineChartdata = {
    
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "aug", "sup"],
    datasets: [{
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(255, 84, 24)',
        borderWidth: 4,
        pointRadius: 60,
        pointBorderWidth: 3,
        pointBorderColor: 'rgb(255, 84, 24) ',
        pointBackgroundColor: '#fff',
        scaleShowLabels: false,
        pointHoverRadius: '6',
        pointHoverBorderWidth: '3',
        data: [28, 45, 28, 55, 40, 60, 50, 80, 60]
    }]
}


export const lineChartOptions = {
    
    layout: {
        padding: 10
    },
    responsive: true,
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
    plugins: false
}

/*===============================================================
                        CRM Dashboard
=================================================================*/
// LineChart
export const crmlineChartData = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop(0, 'rgb(85, 77, 255)');
    gradient.addColorStop(0.3, 'rgb(82, 86, 255)');
    gradient.addColorStop(0.4, 'rgb(80, 102, 255)');
    gradient.addColorStop(0.5, 'rgb(79, 113, 255)');
    gradient.addColorStop(0.7, 'rgb(78, 114, 255)');
    gradient.addColorStop(0.8, 'rgb(75, 130, 255)');
    gradient.addColorStop(0.9, 'rgb(71, 154, 255)');
    gradient.addColorStop(1, 'rgb(64, 200, 255)');
    return {
        labels: ["", "2013", "2014", "2015", "2016", "2017", "2018", "2023"],
        datasets: [{
            fill: false,
            fillColor: "transparent",
            borderColor: gradient,
            pointHighlightFill: "#fff",
            pointBorderColor: gradient,
            pointColor: "#fff",
            borderWidth: 3,
            backgroundColor: "#fff",
            radius: 5,
            hoverRadius: 5,
            hoverBorderWidth: 4,
            pointHoverBackgroundColor: "#fff",
            pointHighlightStroke: gradient,
            data: [5, 0, 15, 0, 5, 0, 10, 0]
        }]
    }
}
export const crmlineChartDataOption = {
    layout: {
        padding: 10
    },
    scales: {
        x: { display: false },
        y: { display: false }
    },
    legend: {
        display: false
    },
    scaleShowLabels: false,
    responsive: true,
    elements: {
        line: {
            tension: 0
        }
    },
    pointDotRadius: 8,
    plugins: {
        legend: {
            display: false,
        }
    }
}
export const newProjectLineChartData = {
    labels: ["", "2013", "2014", "2015", "2016", "2017", "2018", "2023"],
    datasets: [
        {
            fill: false,
            fillColor: "transparent",
            borderColor: '#fb2e63',
            pointBorderColor: '#fb2e63',
            pointHighlightFill: "#fff",
            pointColor: "#fff",
            pointHighlightStroke: '#fb2e63',
            pointBorderWidth: 3,
            pointRadius: 6,
            borderWidth: 4,
            backgroundColor: "#fff",
            radius: 5,
            hoverRadius: 5,
            hoverBorderWidth: 4,
            pointHoverBackgroundColor: "#fff",
            data: [0, 5, 0, 15, 10, 13, 0, 5],
        }
    ]
}

export const newProjectLineChartOption = {
    layout: {
        padding: 10
    },
    legend: {
        display: false
    },
    scales: {
        x: { display: false },
        y: { display: false }
    },
    scaleShowLabels: false,
    responsive: true,
    elements: {
        line: {
            tension: 0
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    }
}

export const SliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1660,
            settings: { slidesToShow: 8 }
        },
        {
            breakpoint: 1366,
            settings: { slidesToShow: 6 }
        },
        {
            breakpoint: 1199,
            settings: { slidesToShow: 4 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 360,
            settings: { slidesToShow: 1 }
        },
    ]
};