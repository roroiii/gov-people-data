import { CountyItem, PeopleResData } from '@/hooks/types';

export function getPeopleFormat(items: PeopleResData[]) {
  const array = items.map((item: PeopleResData) => ({
    year: item.statistic_yyy,
    county: item.site_id.slice(0, 3),
    town: item.site_id.slice(3),
    ordinary: item.household_ordinary_total,
    single: item.household_single_total,
  }));

  return array;
}

export function getCountyFormat(items: CountyItem[]) {
  const array = items.map((item: CountyItem) => ({
    countycode: item.countycode,
    countyname: item.countyname,
  }));

  return array;
}
