import { useCallback, useState } from 'react';
import { UseCountyState } from './types';
import { getCountyList } from '@/api/getListData';

export default function useCounty(): UseCountyState {
  const [countyList, setCountyList] = useState<UseCountyState['countyList']>(null);

  const handleGetCountyList = useCallback(async () => {
    const countyItems = await getCountyList();
    if (countyItems) setCountyList(countyItems);
  }, []);

  return {
    countyList,
    handleGetCountyList,
  };
}
