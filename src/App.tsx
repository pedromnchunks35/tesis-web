import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import { Home } from './pages/Home/Home';
import { GeneralNetworkDash } from './pages/GeneralNetwork/Dashboard/dashboard';
import BlockExplorerDashboard from './pages/BlockExplorer/Dashboard/be-dashboard';
import { BlockExplorerNetwork } from './pages/BlockExplorer/Network/be-network';
import { BlockExplorerBlocks } from './pages/BlockExplorer/Blocks/be-blocks';
import { BlockExplorerTransactions } from './pages/BlockExplorer/Transactions/be-transactions';
import { BlockExplorerChaincodes } from './pages/BlockExplorer/Chaincodes/be-chaincodes';
import { BlockExplorerChannels } from './pages/BlockExplorer/Channels/be-channels';
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
              <PageTitle title="General Network Dashbord" />
              <GeneralNetworkDash />
            </>
          }
        />
        <Route
          path="/blockexplorer-dashboard"
          element={
            <>
              <PageTitle title="General Network Dashabord" />
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
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
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
        />
        <Route
          path="blockexplorer"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
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
