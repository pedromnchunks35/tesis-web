interface PeerData {
    peerName: String
    couchName: String
}
interface OrderersData {
    ordererName: String
}
interface Props {
    machineName: String
    peers: PeerData[]
    orderers: OrderersData[]
    index: number
}
export const GeneralNetworkVisualizationSquare: React.FC<Props> = ({ data }) => {
    return (
        <div className="relative rounded-sm border border-stroke bg-white py-15 px-10 pt-10 mt-8 m-2 shadow-default dark:border-strokedark dark:bg-boxdark grid grid-cols-2">
            <h1 className="absolute w-full bottom-full">{data.machineName}</h1>
            {
                data.peers.map((obj) => {
                    return (
                        <div className="flex flex-row justify-between border-2 border-zinc-600">
                            <div className="p-2">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z" clip-rule="evenodd" />
                                </svg>
                                <h1>{obj.peerName}</h1>
                            </div>
                            <div className="p-2">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6" />
                                </svg>
                                <h1>{obj.couchName}</h1>
                            </div>
                        </div>
                    );
                })
            }
            {
                data.orderers.map((obj) => {
                    return (
                        <div className="flex flex-row justify-start border-2 border-zinc-600">
                            <div className="p-2 flex flex-col">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clip-rule="evenodd" />
                                </svg>
                                <h1>orgx-orderer</h1>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}