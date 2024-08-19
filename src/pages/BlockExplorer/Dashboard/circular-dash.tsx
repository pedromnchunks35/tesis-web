import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface Props {
  result: any;
}
function generateRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export const CircularBeDashboard: React.FC<Props> = ({ result }) => {
  //? LABELS IN THE CIRCULAR GRAPH
  const [labels, setLabels] = useState<any[]>([]);

  //? VALUES ITSELF
  const [values, setValues] = useState<any[]>([]);

  const [result_filtered, set_result_filtered] = useState<any[]>([]);

  const [colors, set_colors] = useState<any[]>([]);

  useEffect(() => {
    let result_filtered_arr = [];
    let labels_arr = [];
    let values_arr = [];
    let colors = [];
    let j = 0;
    for (let i = 0; i < result.length; i++) {
      if (!(result[i].orgName == '')) {
        console.log("im empty");
        let color: string = generateRandomColor();
        result[j].color = color;
        result_filtered_arr[j] = result[i];
        labels_arr[j] = result[i].orgName;
        values_arr[j] = result[i].percentage;
        colors[j] = color;
        j++;
      }
    }
    setLabels(labels_arr);
    setValues(values_arr);
    set_result_filtered(result_filtered_arr);
    set_colors(colors);
  }, [
    result
  ]);


  let options: ApexOptions = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'donut',
    },
    colors: colors,
    labels: labels,
    legend: {
      show: false,
      position: 'bottom',
    },

    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Transactions By Organization
          </h5>
        </div>
        <div>
        </div>
      </div>
      {

      }
      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={values}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {
          result_filtered.map((item: any) => (
            <div key={item.orgName} className="w-full px-8">
              <div className="flex w-full items-center">
                <span style={{ backgroundColor: item.color }} className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
                <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                  <span> {item.orgName} </span>
                  <span> {item.percentage} </span>
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
