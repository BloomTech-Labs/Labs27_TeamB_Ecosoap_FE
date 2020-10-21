import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, useHistory } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import './home.css';
import RenderProfileListPage from '../ProfileList/RenderProfileListPage';

function RenderHomePageAdmin(props) {
  const { userInfo, authService } = props;
  console.log(userInfo);
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
            <p className="app-info">
              <h2>Profile</h2>
              <h2>Name: {userInfo.name}</h2>
              <h2>Email: {userInfo.email}</h2>
              <h2>Location: {userInfo.locale}</h2>
            </p>
          </div>
          <div className="top-para">
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
export default RenderHomePageAdmin;
