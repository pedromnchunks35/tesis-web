import { useEffect, useState } from "react";
import { K8NetworkSwitcher } from "../components/K8NetworkSwitcher";
import { GeneralNetworkVisualizationSquare } from "./gn-visualization-square";
import { get_connection_details_go } from "../../../utils/connectionProfiles/profiles";
import { executeGraphQLQuery } from "../../../utils/connection/connection";
export const GeneralNetworkNetworkVisualization = () => {
    const [network_visualization, set_network_visualization] = useState<any[]>([])
    const fetchAll = async () => {
        let profile_graphql = get_connection_details_go();
        let urls: any = [];
        for (let i = 0; i < profile_graphql.urls.length; i++) {
            const element = profile_graphql.urls[i];
            urls[i] = element + ":" + profile_graphql.port;
        }
        let query: any = `
            query{
             Network_visualization{
               response{
                 index
                 machine_name
                 orderers{
                   orderer_name
                 }
                 peers{
                   couch_name
                   peer_name
                 }
               }
             }
            }           
        `;
        let network_visualization_req = await executeGraphQLQuery(urls, query, {});
        set_network_visualization(network_visualization_req.Network_visualization.response);
    }
    useEffect(() => {
        fetchAll();
    });
    return (
        <>
            {/* <div className="pb-10">
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
            </div> */}
            <div className="grid grid-cols-2">
                {
                    network_visualization.map((obj: any) => {
                        return (
                            <GeneralNetworkVisualizationSquare data={
                                obj
                            } />
                        );
                    })
                }
            </div>
        </>
    );
}