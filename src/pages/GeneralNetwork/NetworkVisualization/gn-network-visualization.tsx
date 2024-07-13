import { K8NetworkSwitcher } from "../components/K8NetworkSwitcher";
import { GeneralNetworkVisualizationSquare } from "./gn-visualization-square";
export const GeneralNetworkNetworkVisualization = () => {
    return (
        <>
            <div className="pb-10">
                <K8NetworkSwitcher title="Kubernetes Profile Name" total="CHP69-HOSPITAL" selector>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z" clip-rule="evenodd" />
                    </svg>
                </K8NetworkSwitcher>
            </div>
            <div className="grid grid-cols-2">
                <GeneralNetworkVisualizationSquare data={{
                    machineName: "MACHINE50",
                    peers: [
                        {
                            peerName: "orgx-peer1",
                            couchName: "orgx-couch-peer1"
                        }
                    ],
                    orderers: [
                        {
                            ordererName: "orgx-orderer"
                        },
                        {
                            ordererName: "orgx-orderer",
                        },
                        {
                            ordererName: "orgx-orderer",
                        },
                        {
                            ordererName: "orgx-orderer",
                        },
                        {
                            ordererName: "orgx-orderer",
                        }
                    ]
                }} />
                <GeneralNetworkVisualizationSquare data={{
                    machineName: "MACHINE69",
                    peers: [
                        {
                            peerName: "orgx-peer1",
                            couchName: "orgx-couch-peer1"
                        },
                        {
                            peerName: "orgy-peer1",
                            couchName: "orgy-couch-peer1"
                        },
                        {
                            peerName: "orgy-peer1",
                            couchName: "orgy-couch-peer1"
                        },
                        {
                            peerName: "orgy-peer1",
                            couchName: "orgy-couch-peer1"
                        },
                        {
                            peerName: "orgy-peer1",
                            couchName: "orgy-couch-peer1"
                        },
                    ],
                    orderers: [
                        {
                            ordererName: "orgx-orderer",
                        },
                        {
                            ordererName: "orgx-orderer",
                        },
                        {
                            ordererName: "orgx-orderer",
                        }
                    ]
                }} />
                <GeneralNetworkVisualizationSquare data={{
                    machineName: "MACHINE70",
                    peers: [
                        {
                            peerName: "orgx-peer1",
                            couchName: "orgx-couch-peer1"
                        },
                        {
                            peerName: "orgy-peer1",
                            couchName: "orgy-couch-peer1"
                        },
                        {
                            peerName: "orgy-peer1",
                            couchName: "orgy-couch-peer1"
                        },
                        {
                            peerName: "orgy-peer1",
                            couchName: "orgy-couch-peer1"
                        },
                        {
                            peerName: "orgy-peer1",
                            couchName: "orgy-couch-peer1"
                        },
                    ],
                    orderers: [
                        {
                            ordererName: "orgx-orderer",
                        },
                        {
                            ordererName: "orgx-orderer",
                        },
                        {
                            ordererName: "orgx-orderer",
                        }
                    ]
                }} />
            </div>
        </>
    );
}