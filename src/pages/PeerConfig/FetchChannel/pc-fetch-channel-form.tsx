import { Link } from "react-router-dom";

export const PeerConfigFetchChannelForm = () => {
    const showResponse = () => {
        let box: HTMLElement = document.getElementById("checkbox-enabler");
        box.classList.remove("hidden");
        let response: HTMLElement = document.getElementById("response-enabler");
        response.classList.remove("hidden");
    }
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Fetch Channel
                </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
                <div className="m-5">
                    <label className="mb-3 block text-black dark:text-white">
                        Channel Name
                    </label>
                    <input
                        type="text"
                        placeholder="Insert the channel name"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="flex flex-row justify-center">
                    <Link
                    onClick={showResponse}
                        to="#"
                        className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Fetch Channel
                    </Link>
                </div>
            </div>
        </div>
    );
}