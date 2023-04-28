import axios, { AxiosError } from 'axios';
import { Params, PeopleAttr } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const COUNTY_API = process.env.NEXT_PUBLIC_COUNTY_API;
const TOWN_API = process.env.NEXT_PUBLIC_TOWN_API;
const DOCUMENT_API = process.env.NEXT_PUBLIC_DOCUMENT_API;

const getRequest = async (url: string, params?: Params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    const err = error as AxiosError;
    return err;
  }
};

export const getDocument = async () => {
  return await getRequest(`${DOCUMENT_API}`);
};

export const getCounty = async () => {
  return getRequest(`${COUNTY_API}`);
};

export const getTown = async (code: string) => {
  return getRequest(`${TOWN_API}/${code}`);
};

export const getPeopleData = async (data: PeopleAttr) => {
  const { COUNTY, TOWN } = data.params;
  return await getRequest(`${API_URL}/ODRP019/${data.year}`, { COUNTY, TOWN });
};
