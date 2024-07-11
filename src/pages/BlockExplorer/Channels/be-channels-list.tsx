import { useState } from "react";
interface datai {
    id: String,
    channel: String,
    blocks: number,
    transactions: number,
    timestamp: String
}
const data: datai[] = [
    {
        id: "ndsniohdnoih",
        channel: "channel1",
        blocks: 3,
        transactions: 4,
        timestamp: "2024..."
    }
]
const icon1 = (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z" />
</svg>)
export const BlockExplorerChannelsList = () => {
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
                    Chaincodes List
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
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Chaincode Name
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Channel
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Transactions
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Version
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Timestamp
                        </h5>
                    </div>
                </div>

                {data.map((obj, key) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-5 ${key === data.length - 1
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
                                {obj.id}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{obj.channel}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.blocks}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.transactions}</p>
                        </div>
                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}