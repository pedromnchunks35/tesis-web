import { useEffect, useState } from "react";
import CardDataStats from "../../../components/CardDataStats";
import { BlockExplorerBlocksList } from "./be-blocks-list";
import { get_connection_details_quarkus } from "../../../utils/connectionProfiles/profiles";
import { fetchData } from "../../../utils/connection/connection";

export const BlockExplorerBlocks = () => {
    const [channel, set_current_channel] = useState('');
    const [channel_list, set_channel_list] = useState<any[]>([]);
    const [block_list, set_block_list] = useState<any[]>([]);
    const [block_list_size, set_block_list_size] = useState(5);
    const [block_list_page, set_block_list_page] = useState(0);

    const fetchAllChannels = async () => {
        let connection_details = get_connection_details_quarkus();
        //? Fetch block list
        let urls: any = [];
        for (let i = 0; i < connection_details.urls.length; i++) {
            const element = connection_details.urls[i];
            urls[i] = element +
                ":" +
                connection_details.port +
                "/" +
                "block/getBlocks/list/" +
                block_list_page +
                "/" +
                block_list_size
        }
        let block_list_req = await fetchData(
            urls
        );
        set_block_list(block_list_req);
        //? FETCH CHANNELS LIST
        urls = [];
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
    }
    useEffect(() => {
        fetchAllChannels();  // Fetch channels and update state
    }, [channel, block_list_page, block_list_size]);
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
            <BlockExplorerBlocksList currentPage={block_list_page} list={block_list} pageSize={block_list_size} setCurrentPage={set_block_list_page} setPageSize={set_block_list_size} />
        </>
    );
}