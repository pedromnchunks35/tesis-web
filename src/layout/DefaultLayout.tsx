import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode,
  startTimestamp: any;
  endTimestamp: any;
  setStartTimestamp: any;
  setEndTimestamp: any;
}

function isInteger(str: string): boolean {
  const parsed = parseInt(str, 10);
  return !isNaN(parsed) && parsed.toString() === str;
}

const DefaultLayout: React.FC<Props> = ({ children, endTimestamp, setEndTimestamp, setStartTimestamp, startTimestamp }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const disableTimeFrame = () => {
    let input_start: HTMLInputElement = document.getElementById("startTimestampInput");
    let input_end: HTMLInputElement = document.getElementById("endTimestampInput");
    if (isInteger(input_start.value) && isInteger(input_end.value) && Number(input_start.value) < Number(input_end.value)) {
      setStartTimestamp(input_start.value);
      setEndTimestamp(input_end.value);
    } else {
      input_start.value = startTimestamp;
      input_end.value = endTimestamp;
    }
    let box: HTMLElement = document.getElementById("checkbox-enabler");
    box.classList.add("hidden");
    let timeframe: HTMLElement = document.getElementById("timeframe-enabler");
    timeframe.classList.add("hidden");
  }
  const disableResponse = () => {
    let box: HTMLElement = document.getElementById("checkbox-enabler");
    box.classList.add("hidden");
    let response: HTMLElement = document.getElementById("response-enabler");
    response.classList.add("hidden");
  }
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark relative">
      <div id='checkbox-enabler' className='hidden flex flex-row justify-center items-center w-screen h-screen bg-black absolute inset-0 z-9999 css-boundarie-opacity'>
        {/** THIS IS THE FORM FOR THE TIME */}
        <div id='timeframe-enabler' className='hidden opacity-100 flex flex-col items-center justify-start w-auto h-auto bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-xl'>
          <div className='m-5 w-full flex flex-col items-center'>
            <h1 className='text-xl mt-5 font-semibold text-black dark:text-white'>Select the timeframe</h1>
            <div className='w-full border-b border-stroke pt-4 dark:border-strokedark min-w-80' />
          </div>
          <div className='p-2 w-full flex flex-col'>
            <input
              id='startTimestampInput'
              type="number"
              defaultValue={startTimestamp}
              placeholder="Init"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 m-full mb-6 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
            <input
              id='endTimestampInput'
              defaultValue={endTimestamp}
              type="number"
              placeholder="End"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
          </div>
          <Link
            onClick={disableTimeFrame}
            to="#"
            className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 m-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Apply
          </Link>
        </div>
        {/** THIS IS THE RESPONSE OF MAKING CALLS TO A COMPONENT */}
        <div id='response-enabler' className="hidden flex flex-col w-2/5 h-4/6 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Response
            </h3>
          </div>
          <div className="flex flex-col overflow-y-scroll w-full h-4/6 gap-5.5 p-5">
           <p id='content-to-display'></p>
          </div>
          <div className='flex flex-row justify-center m-10'>
            <Link
              onClick={disableResponse}
              to="#"
              className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Ok
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
