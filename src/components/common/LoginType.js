import React, { useState, useEffect, useMemo } from 'react';
// import { useOktaAuth } from '@okta/okta-react';

// import {getBuyers } from '../../api'
// import RenderHomePage from './RenderHomePageBuyer';
// import RenderHomePageAdmin from './RenderHomePageAdmin';
function LoginType(props) {
  //   const { authState, authService } = useOktaAuth();
  //   const [userInfo, setUserInfo] = useState(null);
  //   // eslint-disable-next-line
  //   const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    // console.log(props);
    // // authState.accessToken
    // getBuyers(authState).then(buyers => {
    //   console.log(buyers);
    // })
    // // console.log(authState.accessToken);
    // let isSubscribed = true;
    // // if buyer true maybe check the state here???
    // memoAuthService
    //   .getUser()
    //   .then(info => {
    //     // if user is authenticated we can use the authService to snag some user info.
    //     // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
    //     console.log(info);
    //     if (isSubscribed) {
    //       setUserInfo(info);
    //       console.log(info.email, '#########');
    //     }
    //   })
    //   .catch(err => {
    //     isSubscribed = false;
    //     return setUserInfo(null);
    //   });
    // return () => (isSubscribed = false);
  }, []);

  return (
    <div>
      <a onClick={() => props.toggleAdmin()}>Toggle Admin/Buyer</a>
    </div>
  );
}

export default LoginType;
