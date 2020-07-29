import axios from 'axios';
import getConfig from 'next/config';

import httpRequest from './httpRequest';
import { httpMethods } from '~/core';

const { publicRuntimeConfig } = getConfig();
const { API_BASE_URL } = publicRuntimeConfig;

export const restApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-CB-Platform': 'web',
    'X-CB-Retailer': 'vianch',
  },
});

export const httpGet = async (url, headers = null) =>
  httpRequest({ api: restApi, headers, method: httpMethods.get, url });

export const httpPost = async (url, body, headers = null) =>
  httpRequest({ api: restApi, headers, method: httpMethods.post, url, body });

export const httpPut = async (url, body, headers = null) =>
  httpRequest({ api: restApi, headers, method: httpMethods.put, url, body });

export const httpPatch = async (url, body, headers = null) =>
  httpRequest({ api: restApi, headers, method: httpMethods.patch, url, body });

export const httpDelete = async (url, headers = null) =>
  httpRequest({ api: restApi, headers, method: httpMethods.delete, url });
