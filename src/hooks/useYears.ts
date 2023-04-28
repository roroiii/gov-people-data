import { useState } from 'react';
import { getDocument } from '@/api/govAPI';
import { UseYearsState } from './types';

export default function useYears(): UseYearsState {
  const [yearsList, setYearsList] = useState<UseYearsState['yearsList']>(null);

  const handleGetYearsList = async () => {
    const res = await getDocument();

    if (res instanceof Error) return;
    if (res && res.status === 200) {
      const years = res.data.paths['/ODRP019/{yyy}'].get.parameters[0].enum.map(String);
      setYearsList(years);
    }
  };

  return {
    yearsList,
    handleGetYearsList,
  };
}
