import { useState } from "react";
import { Link } from "react-router-dom";

export const PeerConfigJoinChannelForm = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };
    return (
        <div className="flex flex-col justify-center rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Join Channel
                </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                    <div className="relative z-20 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                            </svg>
                        </span>

                        <select
                            value={selectedOption}
                            onChange={(e) => {
                                setSelectedOption(e.target.value);
                                changeTextColor();
                            }}
                            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? 'text-black dark:text-white' : ''
                                }`}
                        >
                            <option value="" disabled className="text-body dark:text-bodydark">
                                Select a channel config file
                            </option>
                            <option value="channel1.config" className="text-body dark:text-bodydark">
                                channel1.config
                            </option>
                            <option value="channel2.config" className="text-body dark:text-bodydark">
                                channel2.config
                            </option>
                        </select>
                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.8">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill="#637381"
                                    ></path>
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center m-5">
                <Link
                    to="#"
                    className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                    Join Channel
                </Link>
            </div>
        </div>
    );
}