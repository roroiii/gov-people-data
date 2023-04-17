import { useState } from 'react';
import { getDocument } from '@/pages/api/govAPI';
import { UseYearsState } from './types';

function useYears(): UseYearsState {
  const [yearsData, setYearsData] = useState<UseYearsState['yearsData']>(null);

  const handleGetYears = async () => {
    const res = await getDocument();
    // console.log(res);
    if (res && res.status === 200) setYearsData(res.data.paths['/ODRP019/{yyy}'].get.parameters[0].enum);
  };

  return {
    yearsData,
    handleGetYears,
  };
}

export default useYears;
