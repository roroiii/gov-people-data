import { CountyItem, PeopleData, PeopleResData } from '@/hooks/types';

const calcPeople = (array: PeopleResData[]) => {
  const values: PeopleData['values'] = {
    ordinary: 0,
    ordinary_f: 0,
    ordinary_m: 0,
    single: 0,
    single_f: 0,
    single_m: 0,
  };

  array.forEach((data: PeopleResData) => {
    values.ordinary += Number(data.household_ordinary_total);
    values.ordinary_f += Number(data.household_ordinary_f);
    values.ordinary_m += Number(data.household_ordinary_m);
    values.single += Number(data.household_single_total);
    values.single_f += Number(data.household_single_f);
    values.single_m += Number(data.household_single_m);
  });
  return values;
};

export function getPeopleFormat(items: PeopleResData[]) {
  const values = calcPeople(items);
  const data = {
    year: items[0].statistic_yyy,
    county: items[0].site_id.slice(0, 3),
    town: items[0].site_id.slice(3),
    values: values,
  };

  return data;
}

export function getCountyFormat(items: CountyItem[]) {
  const array = items.map((item: CountyItem) => ({
    countycode: item.countycode,
    countyname: item.countyname,
  }));

  return array;
}
