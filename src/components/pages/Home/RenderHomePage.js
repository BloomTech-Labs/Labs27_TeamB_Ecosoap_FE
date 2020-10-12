import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Navbar from '../../common/Navbar';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <Navbar></Navbar>
      <h1>Hi {userInfo.name} Welcome Administrator</h1>
      <div>
        <p>This is your user Dashboard.</p>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
