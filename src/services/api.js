import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/RonaldGuilhermePDS/Spotify-UI-Clone-Expo',
});

export default api;
