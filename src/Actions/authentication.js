import axios from 'axios';

export async function login(data) {
  try {
    const result = (await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/users/login`, data)).data;
    return result.data;
  } catch (err) {
    if (err.response) return err.response;
    return undefined;
  }
}

export async function signup(data) {
  try {
    const result = (await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/users/signup`, data)).data;
    return result.data;
  } catch (err) {
    if (err.response) return err.response;
    return undefined;
  }
}
