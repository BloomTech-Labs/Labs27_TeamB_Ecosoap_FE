import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getAdmins } from '../../../api';
import RenderHomePageAdmin from './RenderHomePageAdmin';
import RenderHomePageBuyer from './RenderHomePageBuyer';

function AdminContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    // authState.accessToken

    getAdmins(authState).then(admins => {
      console.log(admins);
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
      {authState.isAuthenticated && userInfo && (
        <RenderHomePageAdmin userInfo={userInfo} authService={authService} />
      )}
    </>
  );
}

export default AdminContainer;
