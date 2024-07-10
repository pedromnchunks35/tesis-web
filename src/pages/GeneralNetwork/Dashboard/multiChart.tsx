import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
    },
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        height: 335,
        type: 'area',
        dropShadow: {
            enabled: true,
            color: '#623CEA14',
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
        },

        toolbar: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: 'straight',
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 4,
        colors: '#fff',
        strokeColors: ['#3056D3', '#80CAEE'],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        },
    },
    xaxis: {
        type: 'category',
        categories: [
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        title: {
            style: {
                fontSize: '0px',
            },
        },
        min: 0,
        max: 100,
    },
};

interface ChartOneState {
    series: {
        name: string;
        data: number[];
    }[];
}

interface Props {
    name: String;
}

const MultiChart: React.FC<Props> = ({ name }) => {
    const [state, setState] = useState<ChartOneState>({
        series: [
            {
                name: 'Product One',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },

            {
                name: 'Product Two',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
            },
        ],
    });

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
        }));
    };
    handleReset;

    return (
        <div className="p-5 rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <div className="flex p-5 flex-row justify-between sm:flex-nowrap">
                <div className="flex w-full flex-wrap sm:gap-5">
                    <div className="flex">
                        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-primary">{name}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end hover:bg-whiter">
                    <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
                        <svg
                            className="cursor-pointer w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <div id="chartOne" className="-ml-5">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="area"
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
};

export default MultiChart;