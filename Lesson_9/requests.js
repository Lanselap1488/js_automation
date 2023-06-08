/* eslint-disable consistent-return */
const { default: axios } = require('axios');

async function getUsers(id) {
  try {
    const resp = await axios.get(`https://reqres.in/api/users/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = getUsers;