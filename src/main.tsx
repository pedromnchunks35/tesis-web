import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { graphqlClient } from './utils/connection/connection';
import { get_connection_details_go } from './utils/connectionProfiles/profiles';

const getUrl = () => {
  let profile = get_connection_details_go();
  return profile.url;
}

const url = getUrl();

const client = graphqlClient(url);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);
