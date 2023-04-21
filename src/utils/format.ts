import { CountyItem, PeopleData, PeopleResData } from '@/hooks/types';

function calcPeople(items: PeopleResData[]) {
  const values: PeopleData['values'] = {
    ordinary: 0,
    ordinary_f: 0,
    ordinary_m: 0,
    single: 0,
    single_f: 0,
    single_m: 0,
  };

  items.forEach((item: PeopleResData) => {
    values.ordinary += Number(item.household_ordinary_total);
    values.ordinary_f += Number(item.household_ordinary_f);
    values.ordinary_m += Number(item.household_ordinary_m);
    values.single += Number(item.household_single_total);
    values.single_f += Number(item.household_single_f);
    values.single_m += Number(item.household_single_m);
  });
  return values;
}

function getDataFormat(items: PeopleResData[]) {
  return items.map((item: any) => {
    let statistic_yyy = item['﻿statistic_yyy'];
    if (statistic_yyy) {
      statistic_yyy = statistic_yyy.replace(/[^\w]/g, '');
    }
    const rest = Object.fromEntries(Object.entries(item).filter(([key, value]) => key !== '﻿statistic_yyy'));
    return { statistic_yyy, ...rest };
  });
}

export function getPeopleFormat(items: PeopleResData[]) {
  const values = calcPeople(items);
  const newData = getDataFormat(items); // 處理 106 - 108 年 statistic_yyy key 中有神奇的符號
  const data = {
    year: newData[0].statistic_yyy,
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
