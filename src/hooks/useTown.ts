import { useState } from 'react';
import { getTown } from '@/pages/api/govAPI';
import { TownItem, UseTownState } from './types';

export default function useTown(): UseTownState {
  const [townList, setTownList] = useState<UseTownState['townList']>(null);

  const handleGetTownList: UseTownState['handleGetTownList'] = async (code) => {
    const res = await getTown(code);
    if (res && res.status === 200) {
      const townItems = res.data.map((item: TownItem) => ({
        code: item.towncode,
        name: item.townname,
      }));
      setTownList(townItems);
    }
  };

  return {
    townList,
    handleGetTownList,
  };
}