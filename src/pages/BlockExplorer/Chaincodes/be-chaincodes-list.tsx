import React, { useState } from "react";
interface resulti {
    chaincode_name: String,
    channel: String,
    transactions: number,
    version: String
}
const result: resulti[] = [
    {
        chaincode_name: "basic",
        channel: "channel1",
        transactions: 2,
        version: "1.0"
    }
]
const icon1 = (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M6 5a2 2 0 0 1 2-2h4.157a2 2 0 0 1 1.656.879L15.249 6H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v-5a3 3 0 0 0-3-3h-3.22l-1.14-1.682A3 3 0 0 0 9.157 6H6V5Z" clip-rule="evenodd" />
    <path fill-rule="evenodd" d="M3 9a2 2 0 0 1 2-2h4.157a2 2 0 0 1 1.656.879L12.249 10H3V9Zm0 3v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7H3Z" clip-rule="evenodd" />
</svg>
)

interface Props {
    result: any;
    pageSize: any;
    setPageSize: any;
    currentPage: any;
    setCurrentPage: any;
}
export const BlockExplorerChaincodesList: React.FC<Props> = ({ result, pageSize, setPageSize, currentPage, setCurrentPage }) => {
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
                <div className={currentPage == 0 || result.length != pageSize ? 'flex flex-row justify-between w-3/12 bg-gray-2 dark:bg-meta-4 rounded-xl mt-2 mb-2' : 'flex flex-row justify-between w-3/12 bg-gray-2 dark:bg-meta-4 rounded-xl m-2'}>
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
                <div className={result.length != pageSize ? 'hidden' : 'flex flex-row pt-9 pl-10'}>
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
                        result.length == pageSize ?
                            <svg
                                onClick={() => setCurrentPageAndUpdateQuery(currentPage + 1)}
                                className={result.length == pageSize ? "cursor-pointer w-6 h-6 text-gray-800 dark:text-white" : "hidden"}
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
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
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
                </div>

                {result.map((obj: any, key: any) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-4 ${key === result.length - 1
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
                                {obj.chaincodeName}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{obj.channelName}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.numberOfTransactions}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.version}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}