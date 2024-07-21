import { Link } from "react-router-dom";
import { TreeOptionSelector } from "./gn-tree-selector";

export const TreeRequestor = () => {
    const showResponse = () => {
        let box: HTMLElement = document.getElementById("checkbox-enabler");
        box.classList.remove("hidden");
        let response: HTMLElement = document.getElementById("response-enabler");
        response.classList.remove("hidden");
    }
    return (
        <div className="flex flex-col w-full rounded-sm border border-stroke bg-white px-5 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="flex  border-b border-stroke dark:border-strokedark flex-row justify-between w-full">
                <h1 className="text-xl mt-5 font-semibold text-black dark:text-white">Tree requestor</h1>
                <div className="flex flex-row justify-between items-start mt-5">
                    <h1 className="text-l font-semibold text-black dark:text-white">Component Selector</h1>
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
                </div>
            </div>
            <div className="mt-5 flex flex-col">
                <h1 className="text-l font-semibold text-black dark:text-white">Selected Component</h1>
                <h2>orgx-peer1</h2>
            </div>
            <div className="flex flex-row justify-start pb-10 mt-5">
                <Link
                    onClick={showResponse}
                    to="#"
                    className="inline-flex items-center justify-center rounded-full bg-primary py-1 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                    Request
                </Link>
            </div>
        </div>
    );
}