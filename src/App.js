import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Launches from './components/pages/Launches';
import Rockets from './components/pages/Rockets';
import PageNotFound from './components/pages/PageNotFound';
import Header from './components/Header';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3F51B5',
    },
    secondary: {
      main: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className='App'>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/launches' component={Launches} />
              <Route exact path='/rockets' component={Rockets} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
