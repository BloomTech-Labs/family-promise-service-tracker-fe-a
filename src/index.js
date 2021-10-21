import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import { Provider } from 'react-redux';
import { store } from './state/index';

import 'antd/dist/antd.less';
import './app.scss';

import { MyProfile } from './components/pages/MyProfile';
import { DashboardPage } from './components/pages/Dashboard';
import { EmployeesPage } from './components/pages/Employees';
import { ProgramsPage } from './components/pages/Programs';
import { RecipientsPage } from './components/pages/Recipients';
import { ServicesPage } from './components/pages/Services';
import { NotFoundPage } from './components/pages/NotFound';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { LoadingOutlined } from '@ant-design/icons';
// import { NavbarHeader } from './components/common/index';
import NavbarHeader from './components/common/Navbar/NavbarHeader.js';
import CC_NumberInput from './components/forms/CustomizableComponents/CC_NumberInput';
import { ReportsPage } from './components/pages/Reports';

//const store = createStore(
//allReducers,
//);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <NavbarHeader />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}

        <SecureRoute
          path="/"
          exact
          component={() => <DashboardPage LoadingOutlined={LoadingOutlined} />}
        />
        <SecureRoute path="/profile" component={MyProfile} />
        <SecureRoute path="/employees" component={EmployeesPage} />
        <SecureRoute path="/programs" component={ProgramsPage} />
        <SecureRoute path="/recipients" component={RecipientsPage} />
        <SecureRoute path="/services" component={ServicesPage} />
        <SecureRoute path="/dashboard" component={DashboardPage} />
        <SecureRoute path-="/reports" component={ReportsPage} />
        <Route path="/customcomponent" component={CC_NumberInput} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
