import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  // return { Authorization: `Bearer ${authState.idToken}` };
  return { Authorization: `Bearer ${authState.accessToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const getPrice = authState => {
  try {
    var auth = getAuthHeader(authState);
    return axios({
      url: 'http://35.208.9.187:9192/web-api-2',
      method: 'post',
    })
      .then(result => {
        // console.log(result)
        return result;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getOrders = authState => {
  try {
    var auth = getAuthHeader(authState);
    return axios({
      url: 'https://labs27-ecosoap-teamb-api.herokuapp.com/purchase',
      method: 'post',
    })
      .then(result => {
        // console.log(result)
        return result;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getBuyers = authState => {
  try {
    var auth = getAuthHeader(authState);
    return axios({
      url: 'http://35.208.9.187:9192/web-api-2',
      method: 'post',
      data: {
        query: `
          {
            buyers {
              contactName
              }
            }
          `,
      },
    })
      .then(result => {
        // console.log(result)
        return result.data.data.buyers;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getAdmins = authState => {
  try {
    var auth = getAuthHeader(authState);
    return axios({
      url: 'http://35.208.9.187:9192/web-api-2',
      method: 'post',
      data: {
        query: `
          {
            administrators {
              email
              }
            }
          `,
      },
    })
      .then(result => {
        // console.log(result)
        return result.data.data.admins;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  getBuyers,
  getAdmins,
  getPrice,
  getOrders,
};
