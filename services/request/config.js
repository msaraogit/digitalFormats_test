const axios = require("axios");
// const getToken = require("./getToken");

const DIGITALFORMATS = () => {
  try {
    // const token = await getToken();
    const DIGITALFORMATS = axios.create({
      baseURL: 'http://localhost:3900/digital-formats',
    });
    return DIGITALFORMATS;
  } catch (err) {
    console.error(err.response);
    return null;
  }
};

module.exports = DIGITALFORMATS;