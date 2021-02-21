import { Plugin } from '@nuxt/types';

const axios: Plugin = ({ $axios }) => {
  $axios.defaults.baseURL = process.env.NUXT_ENV_API_URL;
};

export default axios;
