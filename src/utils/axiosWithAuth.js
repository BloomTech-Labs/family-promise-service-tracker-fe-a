import axios from 'axios';

export const axiosWithAuth = () => {
  const tokenObj = JSON.parse(localStorage.getItem('okta-token-storage'));
  let token = tokenObj.idToken.idToken;
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: 'https://fp-service-tracker.herokuapp.com',
  });
};
