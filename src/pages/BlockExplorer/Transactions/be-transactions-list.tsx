import { useState } from "react";
interface datai {
    creator: String
    channel: String
    tx_id: String
    type: String
    chaincode: String
    timestamp: String
}
const data: datai[] = [
    {
        creator: "orgxMSP",
        channel: "channel1",
        tx_id: "aodhjaoihdioahd",
        type: "endorse",
        chaincode: "basic",
        timestamp: "2023..."
    }
]
const icon1 = (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
</svg>);
export const BlockExplorerTransactionsList = () => {
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
                    Transactions List
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
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Creator
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Channel
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Tx id
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Type
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Chaincode
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Timestamp
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Info
                        </h5>
                    </div>
                </div>

                {data.map((obj, key) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-7 ${key === data.length - 1
                            ? ''
                            : 'border-b border-stroke dark:border-strokedark'
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                {icon1}
                            </div>
                            <p className="hidden text-black dark:text-white sm:block">
                                {obj.creator}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{obj.channel}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.tx_id}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.type}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.chaincode}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.timestamp}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}