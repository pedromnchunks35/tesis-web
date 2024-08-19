import { useEffect, useState } from "react";
import CardDataStats from "../../../components/CardDataStats"
import { BlockExplorerBlockList } from "./be-blocklist";
import { CircularBeDashboard } from "./circular-dash";
import { PeerList } from "./peer-list";
import { fetchData } from "../../../utils/connection/connection";
import { get_connection_details_quarkus } from "../../../utils/connectionProfiles/profiles";
interface Props {
    per_minute_start: any;
    per_minute_end: any;
}
const BlockExplorerDashboard: React.FC<Props> = ({ per_minute_end, per_minute_start }) => {
    //? PUT HERE ALL OF THE DATA NEEDED
    const [channel, set_current_channel] = useState('');

    const [channel_list, set_channel_list] = useState<any[]>([]);

    const [number_of_blocks, set_number_of_blocks] = useState(0);

    const [number_of_transactions, set_number_of_transactions] = useState(0);

    const [number_of_nodes, set_number_of_nodes] = useState(0);

    const [number_of_chaincodes, set_number_of_chaincodes] = useState(0);

    const [peer_list, set_peer_list] = useState([]);
    const [peer_list_page, set_peer_list_page] = useState(0);
    const [peer_list_number_of_elements, peer_list_set_number_of_elements] = useState(5);

    /*    const [blocks_per_minute, set_blocks_per_minute] = useState<any[]>([]);
       const [transactions_per_minute, set_transactions_per_minute] = useState<any[]>([]); */


    const [transactions_per_organization, set_transactions_per_organization] = useState([]);

    const [blocks_tree, set_blocks_tree] = useState([]);
    const [blocks_tree_couter, set_blocks_tree_counter] = useState(20);

    const fetchAll = async (): Promise<void> => {
        try {
            let connection_details = get_connection_details_quarkus();

            //? FETCH CHANNELS LIST
            let urls: any = [];
            for (let i = 0; i < connection_details.urls.length; i++) {
                const element = connection_details.urls[i];
                urls[i] = element +
                    ":" +
                    connection_details.port +
                    "/" +
                    "channel";
            }
            let channels_req = await fetchData(
                urls
            );
            //? RETRIEVE FIRST CHANNEL
            if (channels_req.length != 0) {
                set_current_channel(channels_req[0].channelName);
            }

            set_channel_list(channels_req);

            //? FETCH NUMBER OF BLOCKS
            urls = [];
            for (let i = 0; i < connection_details.urls.length; i++) {
                const element = connection_details.urls[i];
                urls[i] = element +
                    ":" +
                    connection_details.port +
                    "/" +
                    "block/" +
                    "totalOfBlocks"
            }
            let number_of_blocks_req = await fetchData(
                urls
            );
            set_number_of_blocks(number_of_blocks_req);

            //? FETCH NUMBER OF TRANSACTIONS
            urls = [];
            for (let i = 0; i < connection_details.urls.length; i++) {
                const element = connection_details.urls[i];
                urls[i] = element +
                    ":" +
                    connection_details.port +
                    "/" +
                    "transaction/" +
                    "numberOfTransactions"
            }
            let number_of_transactions_req = await fetchData(
                urls
            );
            set_number_of_transactions(number_of_transactions_req);

            //? FETCH NUMBER OF NODES
            urls = [];
            for (let i = 0; i < connection_details.urls.length; i++) {
                const element = connection_details.urls[i];
                urls[i] = element +
                    ":" +
                    connection_details.port +
                    "/" +
                    "network/" +
                    "nodes"
            }
            let number_of_nodes = await fetchData(
                urls
            );
            set_number_of_nodes(number_of_nodes);

            //? NUMBER OF CHAINCODES
            urls = [];
            for (let i = 0; i < connection_details.urls.length; i++) {
                const element = connection_details.urls[i];
                urls[i] = element +
                    ":" +
                    connection_details.port +
                    "/" +
                    "Chaincode/" +
                    "numberOfChaincodes"
            }
            let number_of_chaincodes_req = await fetchData(
                urls
            );
            set_number_of_chaincodes(number_of_chaincodes_req);

            //? FETCH PEER LIST
            urls = [];
            for (let i = 0; i < connection_details.urls.length; i++) {
                const element = connection_details.urls[i];
                urls[i] = element +
                    ":" +
                    connection_details.port +
                    "/" +
                    "network/" +
                    "peerComps/" +
                    peer_list_page +
                    "/" +
                    peer_list_number_of_elements
            }
            let peer_list = await fetchData(
                urls
            );
            set_peer_list(peer_list);

            //? FETCH TRANSACTIONS PER ORGANIZATION
            urls = [];
            for (let i = 0; i < connection_details.urls.length; i++) {
                const element = connection_details.urls[i];
                urls[i] = element +
                    ":" +
                    connection_details.port +
                    "/" +
                    "transaction/" +
                    "transactionsPerOrganization"
            }
            let transactions_per_organization_req = await fetchData(
                urls
            );
            set_transactions_per_organization(transactions_per_organization_req);

            //? FETCH BLOCKS TREE
            urls = [];
            for (let i = 0; i < connection_details.urls.length; i++) {
                const element = connection_details.urls[i];
                urls[i] = element +
                    ":" +
                    connection_details.port +
                    "/" +
                    "block/" +
                    "getBlocks/" +
                    "tree/" +
                    "0/" +
                    blocks_tree_couter
            }
            let block_list_tree_req = await fetchData(
                urls
            );
            set_blocks_tree(block_list_tree_req);
        } catch (error) {
            console.log("Error in one of the requests " + error);
        }
    }

    useEffect(() => {
        fetchAll();
    }, [
        channel, peer_list_page, peer_list_number_of_elements, per_minute_start, per_minute_end, blocks_tree_couter
    ]);
    return (
        <>
            <div className="pb-10">
                <CardDataStats title="Channel" total={channel} set_channel={set_current_channel} some_list={channel_list} selector>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11 4a1 1 0 0 0-1 1v10h10.459l.522-3H16a1 1 0 1 1 0-2h5.33l.174-1H16a1 1 0 1 1 0-2h5.852l.117-.67v-.003A1.983 1.983 0 0 0 20.06 4H11ZM9 18c0-.35.06-.687.17-1h11.66c.11.313.17.65.17 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1Zm-6.991-7a17.8 17.8 0 0 0 .953 6.1c.198.54 1.61.9 2.237.9h1.34c.17 0 .339-.032.495-.095a1.24 1.24 0 0 0 .41-.27c.114-.114.2-.25.254-.396a1.01 1.01 0 0 0 .055-.456l-.242-2.185a1.073 1.073 0 0 0-.395-.71 1.292 1.292 0 0 0-.819-.286H5.291c-.12-.863-.17-1.732-.145-2.602-.024-.87.024-1.74.145-2.602H6.54c.302 0 .594-.102.818-.286a1.07 1.07 0 0 0 .396-.71l.24-2.185a1.01 1.01 0 0 0-.054-.456 1.088 1.088 0 0 0-.254-.397 1.223 1.223 0 0 0-.41-.269A1.328 1.328 0 0 0 6.78 4H4.307c-.3-.001-.592.082-.838.238a1.335 1.335 0 0 0-.531.634A17.127 17.127 0 0 0 2.008 11Z" clip-rule="evenodd" />
                    </svg>
                </CardDataStats>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Blocks" total={number_of_blocks.toString()}>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm0 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5Zm12 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm0-12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2Z" />
                        <path fill-rule="evenodd" d="M10 6.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM10 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-4-4a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Zm12 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Z" clip-rule="evenodd" />
                    </svg>

                </CardDataStats>
                <CardDataStats title="Transactions" total={number_of_transactions.toString()}>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd" />
                    </svg>

                </CardDataStats>
                <CardDataStats title="Nodes" total={number_of_nodes.toString()}>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                    </svg>
                </CardDataStats>
                <CardDataStats title="Chaincodes" total={number_of_chaincodes.toString()}>
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
                </CardDataStats>
            </div>
            <div className="pt-10">
                <PeerList peer_list_number_of_elements={peer_list_number_of_elements} peer_list_page={peer_list_page} set_peer_list_number_of_elements={peer_list_set_number_of_elements} set_peer_list_page={set_peer_list_page} result={peer_list} />
            </div>
            {/* <div className="pt-10">
                <MultiChart name={"Block & Tx Statistics"} categories={undefined} data={undefined} />
            </div> */}
            <div className="pt-10">
                <CircularBeDashboard result={transactions_per_organization} />
            </div>
            <div className="pt-10">
                <BlockExplorerBlockList block={blocks_tree} counter={blocks_tree_couter} setCounter={set_blocks_tree_counter} />
            </div>
        </>

    );
}

export default BlockExplorerDashboard;