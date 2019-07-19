/* eslint no-restricted-syntax: "off", no-param-reassign: "off" */

import axios from "axios";
import Qs from "qs";
import { API_BASE_URL } from "../app.constants";

const client = axios.create({
  baseURL: API_BASE_URL
});

/**
 * The default url param serializer. For all those GET methods with filters.
 * @param params
 * @returns {*|string}
 */
axios.paramsSerializer = params =>
  Qs.stringify(params, { arrayFormat: "brackets" });

client.interceptors.response.use(
  response => response.data,
  error => console.log(error)
);

export default client;
