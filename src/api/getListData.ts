import { getCounty, getDocument, getPeopleData, getTown } from '@/api/govAPI';
import { CountyItem, CountyItems, TownItem } from '@/hooks/types';
import { getPeopleFormat } from '@/utils/format';
import { getJSONbyXML } from '@/utils/xmlToJson';
import { PeopleAttr } from './types';

export const getYearsList = async () => {
  const res = await getDocument();

  if (res instanceof Error) return;
  if (res && res.status === 200) {
    const years = res.data.paths['/ODRP019/{yyy}'].get.parameters[0].enum.map(String);
    return years;
  }
};

export const getCountyList = async () => {
  const res = await getCounty();
  if (res instanceof Error) return;
  if (res && res.status === 200) {
    const json = getJSONbyXML(res.data) as CountyItems | null;
    if (json) {
      const countyItems = json.countyItems.countyItem.map((item: CountyItem) => ({
        code: item.countycode[0],
        name: item.countyname[0],
      }));

      return countyItems;
    }
  }
};

export const getTownList = async (code: string) => {
  const res = await getTown(code);

  if (res instanceof Error) return;
  if (res && res.status === 200) {
    const townItems = res.data.map((item: TownItem) => ({
      code: item.towncode,
      name: item.townname,
    }));
    return townItems;
  }
};

export const getPeopleDataList = async (data: PeopleAttr) => {
  const res = await getPeopleData(data);

  if (res instanceof Error) return;

  if (res && res.status === 200) {
    if (res.data.responseCode === 'OD-0101-S') {
      const items = res.data.responseData;
      const result = getPeopleFormat(items);
      return result;
    }
  }
};
