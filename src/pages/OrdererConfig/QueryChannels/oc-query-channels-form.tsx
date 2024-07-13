import { Link } from "react-router-dom";

export const OrdererConfigQueryChannelForm = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Query Channels
                </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
                <div className="flex flex-row justify-center">
                    <Link
                        to="#"
                        className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Query Channels
                    </Link>
                </div>
            </div>
        </div>
    );
}