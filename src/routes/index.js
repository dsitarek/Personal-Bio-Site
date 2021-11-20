import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  About, Contact, Tech, Projects, AdminTools,
} from '../views/index';

export default function Routes({ isAdmin }) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/tech">
          <Tech />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {isAdmin ? (
          <Route exact path="/adminTools">
            <AdminTools />
          </Route>
        ) : ''}
      </Switch>
    </>
  );
}

Routes.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};
