import { useEffect } from "react";

const icon1 = (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z" />
</svg>

)

interface Props {
    list: any;
    currentPage: any;
    setCurrentPage: any;
    pageSize: any;
    setPageSize: any;
}

export const BlockExplorerBlocksList: React.FC<Props> = ({ list, currentPage, pageSize, setCurrentPage, setPageSize }) => {
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
                    Blocks List
                </h4>
                <div className={currentPage == 0 || list.length != pageSize ? 'flex flex-row justify-between w-3/12 bg-gray-2 dark:bg-meta-4 rounded-xl mt-2 mb-2' : 'flex flex-row justify-between w-3/12 bg-gray-2 dark:bg-meta-4 rounded-xl m-2'}>
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
                <div className={list.length != pageSize ? 'hidden' : 'flex flex-row pt-9 pl-10'}>
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
                        list.length == pageSize ?
                            <svg
                                onClick={() => setCurrentPageAndUpdateQuery(currentPage + 1)}
                                className={list.length == pageSize ? "cursor-pointer w-6 h-6 text-gray-800 dark:text-white" : "hidden"}
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
                            Block Number
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Channel
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Data Hash
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Transactions
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Size
                        </h5>
                    </div>
                </div>

                {list.map((obj: any, key: any) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-5 ${key === list.length - 1
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
                                {obj.blockNumber}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{obj.channelName}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.dataHash.length < 10 ? obj.dataHash : obj.dataHash.substring(0, 15) + "..."}</p>
                        </div>


                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.numberOfTransactions}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{obj.size}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}