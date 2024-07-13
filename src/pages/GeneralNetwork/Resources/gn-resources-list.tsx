import { useState } from "react";
import { returnCorrectIcon } from "./gn-icons";
interface datai {
    icon: number
    service_type: String
    service_name: String
    machine: String
    ip_address: String
}
const data: datai[] = [
    {
        icon: 1,
        service_type: "ClusterIP",
        service_name: "orgx-peer1",
        machine: "archlinux-machine",
        ip_address: "178.77.20.10:30001"
    },
    {
        icon: 2,
        service_type: "NodePort",
        service_name: "orgx-peer1",
        machine: "archlinux-machine",
        ip_address: "178.77.20.10:30001"
    },
    {
        icon: 3,
        service_type: "LoadBalancer",
        service_name: "orgx-peer1",
        machine: "archlinux-machine",
        ip_address: "178.77.20.10:30001"
    }
]

export const GeneralNetworkResourcesList = () => {
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const setPageAndUpdateQuery = (num: number) => {
        setPageSize(num);
    }
    const setCurrentPageAndUpdateQuery = (num: number) => {
        setCurrentPage(num);
    }
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className='flex flex-row w-full justify-between'>
                <h4 className="mb-6 pt-5 w-10/12 text-xl font-semibold text-black dark:text-white">
                    Resources List
                </h4>
                <div className={currentPage == 0 || data.length != pageSize ? 'flex flex-row justify-between w-3/12 bg-gray-2 dark:bg-meta-4 rounded-xl mt-2 mb-2' : 'flex flex-row justify-between w-3/12 bg-gray-2 dark:bg-meta-4 rounded-xl m-2'}>
                    <div onClick={() => setPageAndUpdateQuery(5)} className={pageSize == 5 ? 'm-5 p-2 font-bold text-black bg-white cursor-pointer border' : 'm-5 p-2 font-bold cursor-pointer border'}>
                        <h1>5</h1>
                    </div>
                    <div onClick={() => setPageAndUpdateQuery(10)} className={pageSize == 10 ? 'm-5 p-1 pt-2 font-bold text-black bg-white cursor-pointer border' : 'm-5 p-1 pt-2 font-bold cursor-pointer border'}>
                        <h1>10</h1>
                    </div>
                    <div onClick={() => setPageAndUpdateQuery(15)} className={pageSize == 15 ? 'm-5 p-1 pt-2 font-bold bg-white text-black cursor-pointer border' : 'm-5 p-1 pt-2 font-bold cursor-pointer border'}>
                        <h1>15</h1>
                    </div>
                </div>
                <div className={data.length != pageSize ? 'hidden' : 'flex flex-row pt-9 pl-10'}>
                    {
                        currentPage != 0 ?
                            <svg
                                onClick={() => setCurrentPageAndUpdateQuery(currentPage - 1)}
                                className={currentPage != 0 ? "cursor-pointer w-6 h-6 text-gray-800 dark:text-white" : "hidden"}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                            </svg>
                            :
                            <div />
                    }
                    {
                        data.length == pageSize ?
                            <svg
                                onClick={() => setCurrentPageAndUpdateQuery(currentPage + 1)}
                                className={data.length == pageSize ? "cursor-pointer w-6 h-6 text-gray-800 dark:text-white" : "hidden"}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                            </svg>
                            :
                            <div />
                    }
                </div>
            </div>
            <div className="flex flex-col">
                <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Service Type
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Service Name
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Machine
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Ip Address
                        </h5>
                    </div>
                </div>

                {data.map((obj, key) => (
                    <div
                        className={`grid grid-cols-4 sm:grid-cols-4 ${key === data.length - 1
                            ? ''
                            : 'border-b border-stroke dark:border-strokedark'
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                {returnCorrectIcon(obj.icon)}
                            </div>
                            <p className="hidden text-black dark:text-white sm:block">
                                {obj.service_type}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{obj.service_name}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.machine}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.ip_address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}