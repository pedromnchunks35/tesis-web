import { Link } from "react-router-dom";

export const PeerConfigInvokeChaincodeForm = () => {
    const showResponse = () => {
        let box: HTMLElement = document.getElementById("checkbox-enabler");
        box.classList.remove("hidden");
        let response: HTMLElement = document.getElementById("response-enabler");
        response.classList.remove("hidden");
    }
    return (
        <>
            <>
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Invoke Chaincode
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Chaincode Name
                            </label>
                            <input
                                type="text"
                                placeholder="Chaincode Name"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Channel Name
                            </label>
                            <input
                                type="text"
                                placeholder="Channel Name"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Function Name
                            </label>
                            <input
                                type="text"
                                placeholder="Function Name"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Arguments Separed By Comma
                            </label>
                            <input
                                type="text"
                                placeholder="Arguments Separed By Comma"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center m-5">
                        <Link
                        onClick={showResponse}
                            to="#"
                            className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                        >
                            Invoke Chaincode
                        </Link>
                    </div>
                </div>
            </>
        </>
    );
}