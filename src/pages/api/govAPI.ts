import axios, { AxiosError } from 'axios';
import { PeopleAttr } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const request = axios.create({
  baseURL: API_URL,
});

export const getRequest = async (url: string, params: any) => {
  try {
    return await request.get(url, params);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err);
    return false;
  }
};

export const getDocument = async () => {
  return await axios.get('https://www.ris.gov.tw/rs-opendata/api/Main/docs/v1');
};

export const getCounty = async () => {
  return axios.get('https://api.nlsc.gov.tw/other/ListCounty');
};

export const getTown = async (code: string) => {
  return axios.get(`https://api.nlsc.gov.tw/other/ListTown1/${code}`);
};

export const getPeopleData = async (data: PeopleAttr) => {
  return await getRequest(`/ODRP019/${data.year}`, { params: data.params });
};
