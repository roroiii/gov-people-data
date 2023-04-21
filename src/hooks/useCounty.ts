import { useState } from 'react';
import { getCounty } from '@/pages/api/govAPI';
import { CountyItems, CountyItem, UseCountyState } from './types';
import { getJSONbyXML } from '@/utils/xmlToJson';

export default function useCounty(): UseCountyState {
  const [countyList, setCountyList] = useState<UseCountyState['countyList']>(null);

  const handleGeCountyList = async () => {
    const res = await getCounty();
    if (res instanceof Error) return;
    if (res && res.status === 200) {
      const json = getJSONbyXML(res.data) as CountyItems | null;
      if (json) {
        const countyItems = json.countyItems.countyItem.map((item: CountyItem) => ({
          code: item.countycode[0],
          name: item.countyname[0],
        }));

        setCountyList(countyItems);
      }
    }
  };

  return {
    countyList,
    handleGeCountyList,
  };
}
