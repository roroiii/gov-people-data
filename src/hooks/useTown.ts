import { useCallback, useState } from 'react';
import { UseTownState } from './types';
import { getTownList } from '@/api/getListData';

export default function useTown(): UseTownState {
  const [townList, setTownList] = useState<UseTownState['townList']>(null);

  const handleGetTownList: UseTownState['handleGetTownList'] = useCallback(async (code) => {
    const townItems = await getTownList(code);
    if (townItems) setTownList(townItems);
  }, []);

  return {
    townList,
    handleGetTownList,
  };
}
