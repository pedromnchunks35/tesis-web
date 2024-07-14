import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import DefaultLayout from './layout/DefaultLayout';
import { Home } from './pages/Home/Home';
import { GeneralNetworkDash } from './pages/GeneralNetwork/Dashboard/dashboard';
import BlockExplorerDashboard from './pages/BlockExplorer/Dashboard/be-dashboard';
import { BlockExplorerNetwork } from './pages/BlockExplorer/Network/be-network';
import { BlockExplorerBlocks } from './pages/BlockExplorer/Blocks/be-blocks';
import { BlockExplorerTransactions } from './pages/BlockExplorer/Transactions/be-transactions';
import { BlockExplorerChaincodes } from './pages/BlockExplorer/Chaincodes/be-chaincodes';
import { BlockExplorerChannels } from './pages/BlockExplorer/Channels/be-channels';
import { GeneralNetworkResources } from './pages/GeneralNetwork/Resources/gn-resources';
import { GeneralNetworkNetworkVisualization } from './pages/GeneralNetwork/NetworkVisualization/gn-network-visualization';
import { GeneralNetworkTreeConfig } from './pages/GeneralNetwork/TreeConfig/gn-treeconfig';
import { GeneralNetworkMappingOfNodes } from './pages/GeneralNetwork/MappingOfNodes/gn-mapping-nodes';
import { PeerConfigsUploadConfig } from './pages/PeerConfig/UploadConfigs/pc-upload-configs';
import { PeerConfigQueryChannel } from './pages/PeerConfig/QueryChannel/pc-query-channel';
import { PeerConfigFetchChannel } from './pages/PeerConfig/FetchChannel/pc-fetch-channel';
import { PeerConfigJoinChannel } from './pages/PeerConfig/JoinChannel/pc-join-channel';
import { PeerConfigInstallChaincode } from './pages/PeerConfig/InstallChaincode/pc-install-chaincode';
import { PeerConfigQueryInstalledChaincode } from './pages/PeerConfig/QueryInstalledChaincode/pc-query-installed-chaincode';
import { PeerConfigApproveChaincode } from './pages/PeerConfig/ApproveChaincode/pc-approve-chaincode';
import { PeerConfigQueryChaincodeApprovals } from './pages/PeerConfig/QueryChaincodeApprovals/pc-query-chaincode-approvals';
import { PeerConfigCommitChaincode } from './pages/PeerConfig/CommitChaincode/pc-commit-chaincode';
import { PeerConfigInvokeChaincode } from './pages/PeerConfig/InvokeChaincode/pc-invoke-chaincode';
import { PeerConfigCustomCommands } from './pages/PeerConfig/CustomCommands/pc-custom-commands';
import { OrdererConfigCreatingChannel } from './pages/OrdererConfig/CreatingChannel/oc-creating-channel';
import { OrdererConfigJoinChannel } from './pages/OrdererConfig/JoinChannel/oc-join-channel';
import { OrdererConfigQueryChannels } from './pages/OrdererConfig/QueryChannels/oc-query-channels';
import { OrdererConfigCustomCommands } from './pages/OrdererConfig/CustomCommands/oc-custom-commands';
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Home" />
              <Home />
            </>
          }
        />
        <Route
          path="/generalnetwork-dashboard"
          element={
            <>
              <PageTitle title="General Network Dashboard" />
              <GeneralNetworkDash />
            </>
          }
        />
        <Route
          path="/generalnetwork-resources"
          element={
            <>
              <PageTitle title="General Network Resources" />
              <GeneralNetworkResources />
            </>
          }
        />
        <Route
          path="/generalnetwork-network-visualization"
          element={
            <>
              <PageTitle title="General Network, Network Visualization" />
              <GeneralNetworkNetworkVisualization />
            </>
          }
        />
        <Route
          path="/generalnetwork-tree-config"
          element={
            <>
              <PageTitle title="General Network Tree Config" />
              <GeneralNetworkTreeConfig />
            </>
          }
        />
        <Route
          path="/generalnetwork-mapping-nodes"
          element={
            <>
              <PageTitle title="General Network Mapping of Nodes" />
              <GeneralNetworkMappingOfNodes />
            </>
          }
        />
        <Route
          path="/blockexplorer-dashboard"
          element={
            <>
              <PageTitle title="Block Explorer Network" />
              <BlockExplorerDashboard />
            </>
          }
        />
        <Route
          path="/blockexplorer-network"
          element={
            <>
              <PageTitle title="Block Explorer Network" />
              <BlockExplorerNetwork />
            </>
          }
        />
        <Route
          path="/blockexplorer-blocks"
          element={
            <>
              <PageTitle title="Block Explorer Blocks" />
              <BlockExplorerBlocks />
            </>
          }
        />
        <Route
          path="/blockexplorer-transactions"
          element={
            <>
              <PageTitle title="Block Explorer Transactions" />
              <BlockExplorerTransactions />
            </>
          }
        />
        <Route
          path="/blockexplorer-chaincodes"
          element={
            <>
              <PageTitle title="Block Explorer Chaincodes" />
              <BlockExplorerChaincodes />
            </>
          }
        />
        <Route
          path="/blockexplorer-channels"
          element={
            <>
              <PageTitle title="Block Explorer Channels" />
              <BlockExplorerChannels />
            </>
          }
        />
        <Route
          path="/peer-config-upload-configs"
          element={
            <>
              <PageTitle title="Peer Config Upload Configs" />
              <PeerConfigsUploadConfig />
            </>
          }
        />
        <Route
          path="/peer-config-query-channels"
          element={
            <>
              <PageTitle title="Peer Config Query Channels" />
              <PeerConfigQueryChannel />
            </>
          }
        />
        <Route
          path="/peer-config-fetch-channel"
          element={
            <>
              <PageTitle title="Peer Config Fetch Channel" />
              <PeerConfigFetchChannel />
            </>
          }
        />
        <Route
          path="/peer-config-query-channels"
          element={
            <>
              <PageTitle title="Peer Config Query Channels" />
              <PeerConfigQueryChannel />
            </>
          }
        />
        <Route
          path="/peer-config-join-channel"
          element={
            <>
              <PageTitle title="Peer Config Join Channel" />
              <PeerConfigJoinChannel />
            </>
          }
        />
        <Route
          path="/peer-config-install-chaincode"
          element={
            <>
              <PageTitle title="Peer Config Install Chaincode" />
              <PeerConfigInstallChaincode />
            </>
          }
        />
        <Route
          path="/peer-config-query-installed-chaincode"
          element={
            <>
              <PageTitle title="Peer Config Query Installed Chaincode" />
              <PeerConfigQueryInstalledChaincode />
            </>
          }
        />
        <Route
          path="/peer-config-approve-chaincode"
          element={
            <>
              <PageTitle title="Peer Config Approve Chaincode" />
              <PeerConfigApproveChaincode />
            </>
          }
        />
        <Route
          path="/peer-config-query-approvals"
          element={
            <>
              <PageTitle title="Peer Config Query Chaincode Approvals" />
              <PeerConfigQueryChaincodeApprovals />
            </>
          }
        />
        <Route
          path="/peer-config-commit-chaincode"
          element={
            <>
              <PageTitle title="Peer Config Commit Chaincode" />
              <PeerConfigCommitChaincode />
            </>
          }
        />
        <Route
          path="/peer-config-invoke-chaincode"
          element={
            <>
              <PageTitle title="Peer Config Invoke Chaincode" />
              <PeerConfigInvokeChaincode />
            </>
          }
        />
        <Route
          path="/peer-config-query-approvals"
          element={
            <>
              <PageTitle title="Peer Config Query Chaincode Approvals" />
              <PeerConfigQueryChaincodeApprovals />
            </>
          }
        />
        <Route
          path="/peer-config-custom-commands"
          element={
            <>
              <PageTitle title="Peer Config Custom Commands" />
              <PeerConfigCustomCommands />
            </>
          }
        />
        <Route
          path="/orderer-config-create-channels"
          element={
            <>
              <PageTitle title="Orderer Config Create Channels" />
              <OrdererConfigCreatingChannel />
            </>
          }
        />
        <Route
          path="/orderer-config-join-channel"
          element={
            <>
              <PageTitle title="Orderer Config Join Channel" />
              <OrdererConfigJoinChannel />
            </>
          }
        />
        <Route
          path="/orderer-config-query-channels"
          element={
            <>
              <PageTitle title="Orderer Config Query Channels" />
              <OrdererConfigQueryChannels />
            </>
          }
        />
        <Route
          path="/orderer-config-custom-commands"
          element={
            <>
              <PageTitle title="Orderer Config Custom Commands" />
              <OrdererConfigCustomCommands />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
