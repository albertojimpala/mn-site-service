import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';

import {
  EmployeesScreen,
  PlacesScreen,
  RolesScreen,
  MachinesScreen,
  UsersScreen,
  InitialScreen,
} from '../../Screens';

const SubRouter = ({ match: { url }, locations }) => {
  return (
    <Switch>
      <Route
        component={UsersScreen}
        exact
        location={locations}
        path={`${url}/users`}
      />
      <Route
        component={InitialScreen}
        exact
        location={locations}
        path={`${url}`}
      />
      <Route
        component={PlacesScreen}
        exact
        location={locations}
        path={`${url}/places`}
      />
      <Route
        component={RolesScreen}
        exact
        location={locations}
        path={`${url}/roles`}
      />
      <Route
        component={EmployeesScreen}
        exact
        location={locations}
        path={`${url}/employees`}
      />

      <Route
        component={MachinesScreen}
        exact
        location={locations}
        path={`${url}/machines`}
      />
    </Switch>
  );
};

SubRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  locations: PropTypes.object,
};

export default withRouter(SubRouter);
