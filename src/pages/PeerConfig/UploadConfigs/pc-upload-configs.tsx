import { useEffect, useState } from "react";
import { ServiceNameSelector } from "../components/ServiceNameSelector";
import { PeerConfigUploadForm } from "./pc-upload-form";
import { get_connection_details_go } from "../../../utils/connectionProfiles/profiles";
import { executeGraphQLQuery } from "../../../utils/connection/connection";
import { uploadFile } from "../../../utils/peerAndOrderer/ops";

export const PeerConfigsUploadConfig = () => {
    const [currentComponent, setCurrentComponent] = useState('');
    const [list_component, set_list_component] = useState<any[]>([]);
    const fetchAll = async () => {
        let profile_graphql = get_connection_details_go();
        let urls: any = [];
        for (let i = 0; i < profile_graphql.urls.length; i++) {
            const element = profile_graphql.urls[i];
            urls[i] = element + ":" + profile_graphql.port;
        }
        let query: any = `
        query{
          List_components(component_type:"peer",size:0,page:100000){
            services
          }
        }`
        let components: any = await executeGraphQLQuery(urls, query, {});
        if (components.List_components.services.length > 0 && currentComponent == '') {
            setCurrentComponent(components.List_components.services[0]);
        }
        set_list_component(components.List_components.services);
    }
    const uplaod_file_wrapper = async () => {
        let profile_graphql = get_connection_details_go();
        let urls: any = [];
        for (let i = 0; i < profile_graphql.urls.length; i++) {
            const element = profile_graphql.urls[i];
            urls[i] = element + ":" + profile_graphql.port;
        }
        await uploadFile("peer_chaincode_form_file", currentComponent, urls);
    }
    useEffect(() => {
        fetchAll();
    }, [currentComponent, list_component]);
    return (
        <>
            <div className="flex flex-col justify-between">
                <ServiceNameSelector list={list_component} set_list_member={setCurrentComponent} title={"Selected Peer Component"} total={currentComponent} selector>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                    </svg>
                </ServiceNameSelector>
                <PeerConfigUploadForm uploadFile={uplaod_file_wrapper} />
            </div>
        </>
    );
}