import CardDataStats from "../../../components/CardDataStats";
import MultiChart from "./multiChart";
export const GeneralNetworkDash = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Number of Nodes" total="4">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z" clip-rule="evenodd" />
                    </svg>
                </CardDataStats>
                <CardDataStats title="Alive Nodes" total="2">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                    </svg>
                </CardDataStats>
                <CardDataStats title="Dead Nodes" total="1">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                    </svg>

                </CardDataStats>
                <CardDataStats title="Current Network Scheme" total="CHP-69-HOSPITAL">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11H4m15.5 5a.5.5 0 0 0 .5-.5V8a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44l-1.436-2.12a1 1 0 0 0-.828-.44H8a1 1 0 0 0-1 1M4 9v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44L9.985 8.44A1 1 0 0 0 9.157 8H5a1 1 0 0 0-1 1Z" />
                    </svg>
                </CardDataStats>
            </div>
            {/* THIS IS CPU METRICS*/}
            <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"CPU Variation %"} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                   <MultiChart name={"CPU Variation per Machine %"} /> 
                </div>
            </div>
            {/* DISK METRICS PER COMPONENT */}
            <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Disk usage per component GB"} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                   <MultiChart name={"Disk usage per component %"} /> 
                </div>
            </div>
            {/* DISK METRICS PER MACHINE */}
            <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Disk usage per machine GB"} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                   <MultiChart name={"Disk usage per machine %"} /> 
                </div>
            </div>
            {/* RAM MACHINES */}
            <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Ram per machine GB"} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                   <MultiChart name={"Ram per machine %"} /> 
                </div>
            </div>
            {/* RAM PER COMPONENT */}
            <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Ram per machine GB"} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                   <MultiChart name={"Ram per machine %"} /> 
                </div>
            </div>
        </>
    );
};