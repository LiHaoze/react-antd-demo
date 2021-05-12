import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { ROUTER_PATH } from './routes';

import IHeader from './components/IHeader';
import ISider from './components/ISider';
import logo from './logo.svg';

import './App.css';

function App() {
  const [isCollapsed, setCollapse] = useState(false);

  return (
    <div className="app">
      <Router>
        <Layout className="site-layout">
          <IHeader isCollapsed={isCollapsed} toggleCollapse={setCollapse} />
          <Layout>
            <Switch>
              {
                ROUTER_PATH.map(config => (
                  <Route
                    exact
                    path={config.path}
                    component={(params: any) => {
                      console.log('router params', params);
                      return (
                        <>
                          <ISider isCollapsed={isCollapsed} />
                          <Layout.Content className={isCollapsed ? 'collapse wrap-container' : 'wrap-container'}>
                            {React.createElement(config.component, params)}
                          </Layout.Content>
                        </>
                      )
                    }}
                  />
                ))
              }
            </Switch>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
