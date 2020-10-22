import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Navbar from '../../common/Navbar';
import './home.css';
import Form from '../../common/Form';

function RenderHomePageBuyer(props) {
  const { userInfo, authService } = props;
  return (
    <div className="home">
      <Navbar></Navbar>
      <h1>Hi {userInfo.name} Welcome Buyer</h1>
      <p>This is your user Dashboard.</p>
      <section className="header">
        <div className="banner"></div>
        <div className="header-info"></div>
        <section className="top-info">
          <div className="top-img">
            <img src="soaptest.jpg" alt="soaptest" />
          </div>
          <div className="top-para">
            <div className="form">
              <Form></Form>
            </div>
            <p className="app-info">
              <h2>Profile</h2>
              <h2>Name: {userInfo.name}</h2>
              <h2>Email: {userInfo.email}</h2>
              <h2>Location: {userInfo.locale}</h2>
            </p>
          </div>
        </section>
        <div class="footer">
          <p>Eco-Soap 2020 footer</p>
        </div>
      </section>
    </div>
  );
}
export default RenderHomePageBuyer;
{
  /* 
        <div>
        <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
        </div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>

        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p> */
}

{
  /* <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p> */
}
