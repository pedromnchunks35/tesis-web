import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import { Link } from 'react-router-dom';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const checkBoxEnablerTrigger = () => {
    let box: HTMLDivElement = document.getElementById("checkbox-enabler");
    box.classList.add("hidden");
  }
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark relative">
      <div id='checkbox-enabler' className='hidden flex flex-row justify-center items-center w-screen h-screen bg-black absolute inset-0 z-9999 css-boundarie-opacity'>
        <div className='opacity-100 flex flex-col items-center justify-start w-auto h-auto bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-xl'>
          <div className='m-5 w-full flex flex-col items-center'>
            <h1 className='text-lg opacity-100 text-white'>Select the timeframe</h1>
            <div className='w-full border-b border-stroke pt-4 dark:border-strokedark min-w-80' />
          </div>
          <div className='p-2 w-full flex flex-col'>
            <input
              type="text"
              placeholder="Init"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 m-full mb-6 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
            <input
              type="text"
              placeholder="End"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
          </div>
          <Link
            onClick={checkBoxEnablerTrigger}
            to="#"
            className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 m-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Apply
          </Link>
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
