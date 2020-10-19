import React, { useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import * as logo from '../../../styles/logo.png';
import LoginType from '../../common/LoginType';
import { config } from '../../../utils/oktaConfig';

const BuyerLoginContainer = props => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      redirectUri,
      registration: {
        // there is more we can do to handle some errors here.
      },
      features: { registration: false },
      // turning this feature on allows your widget to use Okta for user registration
      logo: logo,
      // add your custom logo to your signing/register widget here.
      colors: {
        brand: '#3BB54A',
      },
      helpLinks: {
        help: 'https://example.com/help',
        forgotPassword: 'https://example.com/forgot-password',
        unlock: 'https://example.com/unlock-account',
        custom: [
          {
            text: 'Login as Administrator',
            href: 'https://example.com/what-is-okta',
          },
        ],
      },
      i18n: {
        en: {
          // 'primaryauth.title': 'Buyer login to Eco-Soap-Bank',
          'primaryauth.title': props.title,
          // change title for your app
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });
    widget.remove();

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
  }, []);

  return (
    <div>
      <div id="sign-in-widget" />
      <LoginType {...props} />
    </div>
  );
};

export default BuyerLoginContainer;
