import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { getBuyers } from '../../../api';
import RenderHomePage from './RenderHomePageBuyer';
import RenderHomePageAdmin from './RenderHomePageAdmin';
import RenderHomePageBuyer from './RenderHomePageBuyer';
function HomeContainer({ LoadingComponent, state, isAdmin }) {
  console.log('Is Admin.........');
  // console.log(this.props.state.isAdmin);
  // console.log(state.isAdmin);
  console.log(isAdmin());
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    // authState.accessToken

    getBuyers(authState).then(buyers => {
      console.log(buyers);
    });

    // console.log(authState.accessToken);
    let isSubscribed = true;
    // if buyer true maybe check the state here???
    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        console.log(info);
        if (isSubscribed) {
          setUserInfo(info);
          console.log(info.email, '#########');
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )}
      {authState.isAuthenticated && userInfo && isAdmin() && (
        <RenderHomePageAdmin userInfo={userInfo} authService={authService} />
      )}

      {authState.isAuthenticated && !isAdmin() && userInfo && (
        <RenderHomePageBuyer userInfo={userInfo} authService={authService} />
      )}
    </>
  );
}

export default HomeContainer;
