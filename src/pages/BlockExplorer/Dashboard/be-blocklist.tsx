import { Link } from "react-router-dom"

const block = [
    {
        "block_name": "Block 11",
        "channel_name": "Channel1",
        "data_hash": "sqhudhgsoihqiohdioahs",
        "number_of_tx": 1,
        "time": "22:12:00"
    },
    {
        "block_name": "Block 11",
        "channel_name": "Channel1",
        "data_hash": "sqhudhgsoihqiohdioahs",
        "number_of_tx": 1,
        "time": "22:12:00"
    },
    {
        "block_name": "Block 11",
        "channel_name": "Channel1",
        "data_hash": "sqhudhgsoihqiohdioahs",
        "number_of_tx": 1,
        "time": "22:12:00"
    },

]
const LoadMore = () => {
    block.push({
        "block_name": "Block 11",
        "channel_name": "Channel1",
        "data_hash": "sqhudhgsoihqiohdioahs",
        "number_of_tx": 1,
        "time": "22:12:00"
    });
}
export const BlockExplorerBlockList = () => {
    return (
        <div className="flex flex-row sm:px-7.5 rounded-sm border border-stroke px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
            <div className="h-100 bg-black w-2" />
            <div className="flex flex-col w-full h-100 shadow-default overflow-y-scroll items-center">
                {block.map(() => (
                    <div className="p-5 flex flex-row w-full h-fit">
                        <div className="p-2 pl-5">
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex flex-col w-11/12 p-5 bg-indigo-50 rounded-lg ml-5">
                            <div className="flex flex-row justify-between w-12/12 shadow-default bg-blue-900 p-2 rounded-lg">
                                <h1 className="font-bold">{block[0].block_name}</h1>
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
                                    <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
                                </svg>
                            </div>
                            <div className="flex flex-row justify-initial w-6/12 pl-2 pt-2">
                                <p className="text-zinc-950 font-bold">Channel Name:</p>
                                <p className="pl-2 text-zinc-600">{block[0].channel_name}</p>
                            </div>
                            <div className="flex flex-row justify-initial w-6/12 pl-2">
                                <p className="text-zinc-950 font-bold">Datahash:</p>
                                <p className="pl-2 text-zinc-600">{block[0].data_hash}</p>
                            </div>
                            <div className="flex flex-row justify-initial w-6/12 pl-2">
                                <p className="text-zinc-950 font-bold">Number of Tx:</p>
                                <p className="pl-2 text-zinc-600">{block[0].number_of_tx}</p>
                            </div>
                            <div className="flex flex-row justify-initial w-6/12 pl-2">
                                <p className="text-zinc-950 font-bold">Time:</p>
                                <p className="pl-2 text-zinc-600">{block[0].time}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="w-full flex flex-row justify-center p-10">
                    <Link
                        to="#"
                        className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                        onClick={LoadMore}
                    >
                        Load More
                    </Link>
                </div>
            </div>
            <div />
        </div>
    )
}