import { useCallback, useState } from 'react';
import { UseYearsState } from './types';
import { getYearsList } from '@/api/getListData';

export default function useYears(): UseYearsState {
  const [yearsList, setYearsList] = useState<UseYearsState['yearsList']>(null);

  const handleGetYearsList = useCallback(async () => {
    const years = await getYearsList();
    if (years) setYearsList(years);
  }, []);

  return {
    yearsList,
    handleGetYearsList,
  };
}
