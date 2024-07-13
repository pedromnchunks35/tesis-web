import { Link } from "react-router-dom";
import { TreeOptionSelector } from "./gn-tree-selector";

export const TreeRequestor = () => {
    return (
        <div className="flex flex-col w-full rounded-sm border border-stroke bg-white px-5 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="flex flex-row justify-between w-full">
                <h1 className="mb-6 pt-5 w-10/12 text-xl font-semibold text-black dark:text-white">Tree requestor</h1>
                <div className="flex flex-col justify-end items-end">
                    <TreeOptionSelector>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                        </svg>
                    </TreeOptionSelector>
                    <Link
                        to="#"
                        className="inline-flex items-center justify-center rounded-full bg-primary py-1 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Request
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <h2 className="font-semibold text-black dark:text-white">Answer</h2>
                <div className="justify-start w-full min-h-20 p-5 mb-10 bg-zinc-600">
                    dklaoidhoaihdoihdadadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    aaaasdadadadfasa
                    dklaoidhoaihdoihdadadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    aaaasdadadadfasa
                    dklaoidhoaihdoihdadadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    aaaasdadadadfasa
                    dklaoidhoaihdoihdadadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    aaaasdadadadfasa

                </div>
            </div>
        </div>
    );
}