import { useEffect, useState } from "react";
import CardDataStats from "../../../components/CardDataStats";
import MultiChart from "./multiChart";
import { executeGraphQLQuery, fetchData } from "../../../utils/connection/connection";
import { get_connection_details_cpp, get_connection_details_go } from "../../../utils/connectionProfiles/profiles";
interface Props {
    timestampStart: any;
    timestampEnd: any;
}
export const GeneralNetworkDash: React.FC<Props> = ({ timestampEnd, timestampStart }) => {
    const [cpu_variation_per_machine_perc_categories, set_cpu_variation_per_machine_perc_categories] = useState<any[]>([]);
    const [cpu_variation_per_machine_perc_data, set_cpu_variation_per_machine_perc_data] = useState<any[]>([]);

    const [disk_usage_per_machine_gb_categories, set_disk_usage_per_machine_gb_categories] = useState<any[]>([]);
    const [disk_usage_per_machine_gb_data, set_disk_usage_per_machine_gb_data] = useState<any[]>([]);

    const [disk_usage_per_machine_perc_categories, set_disk_usage_per_machine_perc_categories] = useState<any[]>([]);
    const [disk_usage_per_machine_perc_data, set_disk_usage_per_machine_perc_data] = useState<any[]>([]);

    const [ram_per_machine_gb_categories, set_ram_per_machine_gb_categories] = useState<any[]>([]);
    const [ram_per_machine_gb_data, set_ram_per_machine_gb_data] = useState<any[]>([]);

    const [ram_per_machine_gb_perc_categories, set_ram_per_machine_gb_perc_categories] = useState<any[]>([]);
    const [ram_per_machine_gb_perc_data, set_ram_per_machine_gb_perc_data] = useState<any[]>([]);

    const [number_of_nodes, set_number_of_nodes] = useState(0);

    const [alive_nodes, set_alive_nodes] = useState(0);

    const [dead_nodes, set_dead_nodes] = useState(0);

    const fetchAll = async () => {
        try {
            let profile = get_connection_details_cpp();
            //? GET CPU
            let urls: any = [];
            for (let i = 0; i < profile.urls.length; i++) {
                const element = profile.urls[i];
                urls[i] = element +
                    ":" +
                    profile.port +
                    "/" +
                    "cpu/variation/machine/perc" +
                    "?start=" +
                    timestampStart +
                    "&end=" +
                    timestampEnd +
                    "&step=60s"
            }
            let cpu_var_machine_perc_req = await fetchData(
                urls
            );
            let category = [];
            let values = [];
            for (let i = 0; i < cpu_var_machine_perc_req.data.result.values; i++) {
                category[i] = cpu_var_machine_perc_req.data.result.values[i][0];
                values[i] = cpu_var_machine_perc_req.data.result.values[i][1];
            }
            set_cpu_variation_per_machine_perc_categories(category);
            set_cpu_variation_per_machine_perc_data(values);

            //? GET DISK USAGE PER MACHINE
            urls = [];
            for (let i = 0; i < profile.urls.length; i++) {
                const element = profile.urls[i];
                urls[i] = element +
                    ":" +
                    profile.port +
                    "/" +
                    "disk/machine" +
                    "?start=" +
                    timestampStart +
                    "&end=" +
                    timestampEnd +
                    "&step=60s"
            }
            let disk_usage_per_machine_gb_req = await fetchData(
                urls
            );
            category = [];
            values = [];
            for (let i = 0; i < disk_usage_per_machine_gb_req.data.result.values; i++) {
                category[i] = disk_usage_per_machine_gb_req.data.result.values[i][0];
                values[i] = disk_usage_per_machine_gb_req.data.result.values[i][1];
            }
            set_disk_usage_per_machine_gb_categories(category);
            set_disk_usage_per_machine_gb_data(values);

            //? DISK USAGE PER MACHINE %
            urls = [];
            for (let i = 0; i < profile.urls.length; i++) {
                const element = profile.urls[i];
                urls[i] = element +
                    ":" +
                    profile.port +
                    "/" +
                    "disk/machine/perc" +
                    "?start=" +
                    timestampStart +
                    "&end=" +
                    timestampEnd +
                    "&step=60s"
            }
            let disk_usage_per_machine_perc = await fetchData(
                urls
            );
            category = [];
            values = [];
            for (let i = 0; i < disk_usage_per_machine_perc.data.result.values; i++) {
                category[i] = disk_usage_per_machine_perc.data.result.values[i][0];
                values[i] = disk_usage_per_machine_perc.data.result.values[i][1];
            }
            set_disk_usage_per_machine_perc_categories(category);
            set_disk_usage_per_machine_perc_data(values);

            /*  //? RAM PER MACHINE GB
             urls = [];
             for (let i = 0; i < profile.urls.length; i++) {
                 const element = profile.urls[i];
                 urls[i] = element +
                     ":" +
                     profile.port +
                     "/" +
                     "ram/machine" +
                     "?start=" +
                     timestampStart +
                     "&end=" +
                     timestampEnd +
                     "&step=60s"
             }
             let ram_per_machine_gb = await fetchData(
                 urls
             );
             category = [];
             values = [];
             for (let i = 0; i < ram_per_machine_gb.data.result.values; i++) {
                 category[i] = ram_per_machine_gb.data.result.values[i][0];
                 values[i] = ram_per_machine_gb.data.result.values[i][1];
             }
             set_ram_per_machine_gb_categories(category);
             set_ram_per_machine_gb_data(values); */

            //? RAM PER MACHINE %
            urls = [];
            for (let i = 0; i < profile.urls.length; i++) {
                const element = profile.urls[i];
                urls[i] = element +
                    ":" +
                    profile.port +
                    "/" +
                    "ram/machine/perc" +
                    "?start=" +
                    timestampStart +
                    "&end=" +
                    timestampEnd +
                    "&step=60s"
            }
            let ram_per_machine_perc = await fetchData(
                urls
            );
            category = [];
            values = [];
            for (let i = 0; i < ram_per_machine_perc.data.result.values; i++) {
                category[i] = ram_per_machine_perc.data.result.values[i][0];
                values[i] = ram_per_machine_perc.data.result.values[i][1];
            }
            set_ram_per_machine_gb_perc_categories(category);
            set_ram_per_machine_gb_perc_data(values);

            //? NUMBER OF NODES
            let profile_graphql = get_connection_details_go();
            urls = [];
            for (let i = 0; i < profile_graphql.urls.length; i++) {
                const element = profile_graphql.urls[i];
                urls[i] = element + ":" + profile_graphql.port;
            }
            let query: any = `
                        query{
                          Number_of_nodes{
                          result
                           }
                         }
            `;
            let number_of_nodes: any = await executeGraphQLQuery(urls, query, {});
            set_number_of_nodes(number_of_nodes.Number_of_nodes.result);
            //? Number of alive nodes
            query = `
            query{
                Number_of_nodes_alive{
                result
                }
            }
            `;
            let number_of_nodes_alive: any = await executeGraphQLQuery(urls, query, {});
            set_alive_nodes(number_of_nodes_alive.Number_of_nodes_alive.result);
            //? Number of dead nodes
            query = `
                        query{
                         Number_of_nodes_dead{
                           result
                         }
                        }                       
            `
            let number_of_dead_nodes: any = await executeGraphQLQuery(urls, query, {});
            set_dead_nodes(number_of_dead_nodes.Number_of_nodes_dead.result)
        } catch (error) {
            console.log("Error in something " + error);
        }
    }

    useEffect(() => {
        fetchAll();
    }, [timestampStart, timestampEnd]);

    return (
        <>
            {/*  <div className="pb-10">
                <K8NetworkSwitcher title="Kubernetes Profile Name" total="COMING SOON.." selector>
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Number of Nodes" total={number_of_nodes.toString()}>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z" clip-rule="evenodd" />
                    </svg>
                </CardDataStats>
                <CardDataStats title="Alive Nodes" total={alive_nodes.toString()}>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                    </svg>
                </CardDataStats>
                <CardDataStats title="Dead Nodes" total={dead_nodes.toString()}>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                    </svg>

                </CardDataStats>
                <CardDataStats title="Current Network Scheme" total="Coming soon">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11H4m15.5 5a.5.5 0 0 0 .5-.5V8a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44l-1.436-2.12a1 1 0 0 0-.828-.44H8a1 1 0 0 0-1 1M4 9v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44L9.985 8.44A1 1 0 0 0 9.157 8H5a1 1 0 0 0-1 1Z" />
                    </svg>
                </CardDataStats>
            </div>
            {/* THIS IS CPU METRICS*/}
            <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 w-full mt-8">
                    <MultiChart name={"CPU Variation %"} categories={cpu_variation_per_machine_perc_categories} data={cpu_variation_per_machine_perc_data} />
                </div>
                <div className="m-2"></div>
                {/*  <div className="w-6/12 mt-8">
                    <MultiChart name={"CPU Variation per Machine %"} categories={undefined} data={undefined} />
                </div> */}
            </div>
            {/* DISK METRICS PER COMPONENT */}
            {/* <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Disk usage per component GB"} categories={undefined} data={undefined} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Disk usage per component %"} categories={undefined} data={undefined} />
                </div>
            </div> */}
            {/* DISK METRICS PER MACHINE */}
            <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Disk usage per machine GB"} categories={disk_usage_per_machine_gb_categories} data={disk_usage_per_machine_gb_data} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Disk usage per machine %"} categories={disk_usage_per_machine_perc_categories} data={disk_usage_per_machine_perc_data} />
                </div>
            </div>
            {/* RAM MACHINES */}
            <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Ram per machine GB"} categories={ram_per_machine_gb_categories} data={ram_per_machine_gb_data} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Ram per machine %"} categories={ram_per_machine_gb_perc_categories} data={ram_per_machine_gb_perc_data} />
                </div>
            </div>
            {/* RAM PER COMPONENT */}
            {/* <div className="flex flex-row justify-between w-12/12">
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Ram per machine GB"} categories={undefined} data={undefined} />
                </div>
                <div className="m-2"></div>
                <div className="w-6/12 mt-8">
                    <MultiChart name={"Ram per machine %"} categories={undefined} data={undefined} />
                </div>
            </div> */}
        </>
    );
};