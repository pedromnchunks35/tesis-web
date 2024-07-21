import { Link } from "react-router-dom"

export const PeerConfigUploadForm = () => {
    const showResponse = () => {
        let box: HTMLElement = document.getElementById("checkbox-enabler");
        box.classList.remove("hidden");
        let response: HTMLElement = document.getElementById("response-enabler");
        response.classList.remove("hidden");
    }
    return (
        <>
            {/* <!-- File upload --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Upload Configs
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Attach file
                        </label>
                        <input
                            type="file"
                            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                    </div>

                    <div>
                        <div className="flex flex-row justify-center">
                            <Link
                                onClick={showResponse}
                                to="#"
                                className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            >
                                Upload Config
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}