import { PeopleAttr } from '@/pages/api/types';

export interface UseYearsState {
  yearsList: string[] | null;
  handleGetYearsList: () => void;
}

export interface CountyItems {
  countyItems: {
    countyItem: CountyItem[];
  };
}

export interface CountyItem {
  countycode: string[];
  countyname: string[];
  countycode01: string[];
}

export interface TownItem {
  towncode: string;
  towncode01: string;
  townname: string;
}
export interface PeopleResData {
  statistic_yyy: string;
  district_code: string;
  site_id: string;
  village: string;
  household_ordinary_total: string;
  household_business_total: string;
  household_single_total: string;
  household_ordinary_m: string;
  household_business_m: string;
  household_single_m: string;
  household_ordinary_f: string;
  household_business_f: string;
  household_single_f: string;
}

export interface PeopleData {
  year: string; //民國年
  county: string;
  town: string;
  values: {
    ordinary: number; // 共同生活戶_戶數
    ordinary_m: number;
    ordinary_f: number;
    single: number; // 單獨生活戶_戶數
    single_m: number;
    single_f: number;
  };
}

export interface UsePeopleState {
  peopleData: PeopleData | null;
  handleGetPeopleData: (data: PeopleAttr) => void;
}

export interface CountryList {
  code: string;
  name: string;
}

export interface UseCountryState {
  countyList: CountryList[] | null;
  handleGeCountryList: () => void;
}

export interface TownList {
  code: string;
  name: string;
}

export interface UseTownState {
  townList: TownList[] | null;
  handleGetTownList: (code: string) => void;
}

export interface UseOpenState {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}
