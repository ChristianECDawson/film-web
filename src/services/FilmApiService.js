const axios = require('axios');

const filmApiClient = axios.create({
    // TODO auto-discovery of API url
    // baseURL: 'http://node-express-env.eba-nxayhyi3.us-east-1.elasticbeanstalk.com/'
    baseURL: 'http://localhost:8000/'
  });

export async function createFilm({title}) {
    return await filmApiClient.post('/films', {title: title}) 
};

export async function fetchFilms({title}){
  const response = await filmApiClient.get('/films', {params : {title: title}}) // TODO cleanup -might crash under some circumstances
  console.log("FETCH RETURNED", response)
  return response.data;
};
