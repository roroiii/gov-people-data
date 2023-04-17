import { PeopleAttr } from '@/pages/api/types';

export interface UseYearsState {
  yearsData: number[] | null;
  handleGetYears: () => void;
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
  ordinary: string; // 共同生活戶_戶數
  single: string; // 單獨生活戶_戶數
}

export interface UsePeopleState {
  peopleData: PeopleData[] | null;
  handleGetPeopleData: (data: PeopleAttr) => void;
}

export interface CountryList {
  countycode: string;
  countyname: string;
}

export interface UseCountryState {
  countryList: CountryList[] | null;
  handleGeCountryList: () => void;
}
