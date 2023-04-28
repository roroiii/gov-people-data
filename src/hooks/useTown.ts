import { useCallback, useState } from 'react';
import { getTown } from '@/api/govAPI';
import { TownItem, UseTownState } from './types';

export default function useTown(): UseTownState {
  const [townList, setTownList] = useState<UseTownState['townList']>(null);

  const handleGetTownList: UseTownState['handleGetTownList'] = useCallback(async (code) => {
    const res = await getTown(code);
    if (res instanceof Error) return;
    if (res && res.status === 200) {
      const townItems = res.data.map((item: TownItem) => ({
        code: item.towncode,
        name: item.townname,
      }));
      setTownList(townItems);
    }
  }, []);

  return {
    townList,
    handleGetTownList,
  };
}
