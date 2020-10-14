import React from 'react';
import { Layout, Menu } from 'antd';

import { useOktaAuth } from '@okta/okta-react';

const Navbar = () => {
  const { authService } = useOktaAuth();
  return (
    <Layout className="layout">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2">Example</Menu.Item>
        <Menu.Item key="3">Data</Menu.Item>
        <Menu.Item key="4" onClick={() => authService.logout()}>
          Logout
        </Menu.Item>
      </Menu>
    </Layout>
  );
};

export default Navbar;
