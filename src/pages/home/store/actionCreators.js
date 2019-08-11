import axios from 'axios';
import * as actionTypes from './actionTypes';

const updateAccessToken = (clientId, accessToken) => ({
  type: actionTypes.UPDATE_ACCESS_TOKEN,
  clientId,
  accessToken,
});

export const getAccessToken = (clientId, clientSecret) => (dispatch) => {
  axios.post('/oauth/token', {
    client_id: clientId,
    client_secret: clientSecret,
    audience: 'https://api.sypht.com',
    grant_type: 'client_credentials',
  })
    .then((res) => {
      dispatch(updateAccessToken(clientId, res.data.access_token));
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e);
    });
};
