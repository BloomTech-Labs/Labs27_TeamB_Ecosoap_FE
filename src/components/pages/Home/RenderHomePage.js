import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Navbar from '../../common/Navbar';
import './home.css';
import Form from '../../common/Form';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div className="home">
      <Navbar></Navbar>
      <h1>Hi {userInfo.name} Welcome Administrator</h1>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              non mi nec augue consectetur venenatis tempus et metus. Duis
              suscipit convallis consectetur. Sed ut ullamcorper ligula. Nam nec
              volutpat tellus. Curabitur fringilla bibendum neque quis
              consectetur. Donec mattis purus et ornare tincidunt. Suspendisse
              potenti. Sed auctor mi et nulla scelerisque ultrices. Phasellus id
              nisl mollis ligula tincidunt pellentesque. Integer commodo ornare
              ipsum, at commodo augue ultrices nec. Quisque pharetra ultrices
              imperdiet.
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
export default RenderHomePage;
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
