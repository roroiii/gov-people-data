import { PeopleAttr } from '@/api/types';
import { SelectChangeEvent } from '@mui/material';

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
  [key: string]: string;
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

export interface CountyList {
  code: string;
  name: string;
}

export interface UseCountyState {
  countyList: CountyList[] | null;
  handleGeCountyList: () => void;
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

export interface useSelectState {
  year: string;
  handleChangeYearSelect: (event: SelectChangeEvent) => void;
  county: string;
  handleChangeCountySelect: (event: React.SyntheticEvent<Element, Event>, newInputValue: string) => void;
  town: string;
  handleChangeTownSelect: (event: React.SyntheticEvent<Element, Event>, newInputValue: string) => void;
}

export interface useSelectProps {
  defaultYear?: string;
  defaultCounty?: string;
  defaultTown?: string;
}
