import { useEffect, useState } from "react";
import { K8NetworkSwitcher } from "../components/K8NetworkSwitcher";
import { GeneralNetworkResourcesList } from "./gn-resources-list";
import { get_connection_details_go } from "../../../utils/connectionProfiles/profiles";
import { executeGraphQLQuery } from "../../../utils/connection/connection";


export const GeneralNetworkResources = () => {
    const [resources_list, set_resources_list] = useState<any[]>([]);
    const [resources_list_size, set_resources_list_size] = useState(5);
    const [resources_list_page, set_resources_list_page] = useState(0);
    const fetchAll = async () => {
        let profile_graphql = get_connection_details_go();
        let urls: any = [];
        for (let i = 0; i < profile_graphql.urls.length; i++) {
            const element = profile_graphql.urls[i];
            urls[i] = element + ":" + profile_graphql.port;
        }
        console.log(resources_list_size);
        console.log(resources_list_page);
        let variables: any = { "size": resources_list_size, "page": resources_list_page };
        let query: any = `
         query GetResources($size: Int!, $page: Int!) {
        Resources(size: $size, page: $page) {
            response {
                ip_address
                selector
                service_name
                service_type
            }
        }
    }
        `
        let resource_result: any = await executeGraphQLQuery(urls, query, variables);
        set_resources_list(resource_result.Resources.response)
    }
    useEffect(() => {
        fetchAll();
    }, [resources_list_page, resources_list_size]);
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
            <GeneralNetworkResourcesList currentPage={resources_list_page} pageSize={resources_list_size} result={resources_list} setCurrentPage={set_resources_list_page} setPageSize={set_resources_list_size} />
        </>
    );
}