const axios = require('axios');

const filmApiClient = axios.create({
    // TODO auto-discovery of API url
    // baseURL: 'http://node-express-env.eba-nxayhyi3.us-east-1.elasticbeanstalk.com/'
    baseURL: 'http://localhost:8000/'
  });

export async function createFilm({ title }) {
    return await filmApiClient.post('/films', { title: title }) 
};
