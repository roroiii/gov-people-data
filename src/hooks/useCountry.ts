import { useState } from 'react';
import { getCounty } from '@/pages/api/govAPI';
import { CountyItems, CountyItem, UseCountryState } from './types';
import { getJSONbyXML } from '@/utils/xmlToJson';

export default function useCountry(): UseCountryState {
  const [countryList, setCountryList] = useState<UseCountryState['countryList']>(null);

  const handleGeCountryList = async () => {
    const res = await getCounty();
    if (res && res.status === 200) {
      const json = getJSONbyXML(res.data) as CountyItems | null;
      if (!json) return;
      const countyItems = json?.countyItems.countyItem.map((item: CountyItem) => ({
        code: item.countycode[0],
        name: item.countyname[0],
      }));

      console.log({ json, countyItems });

      setCountryList(countyItems);
    }
  };

  return {
    countryList,
    handleGeCountryList,
  };
}
