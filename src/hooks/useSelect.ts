import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useSelectProps, useSelectState } from './types';

export default function useSelect(props?: useSelectProps): useSelectState {
  const [year, setYear] = useState<string>(props?.defaultYear || '110');
  const [county, setCounty] = useState<string>(props?.defaultCounty || '');
  const [town, setTown] = useState<string>(props?.defaultTown || '');

  const handleChangeYearSelect = (event: SelectChangeEvent<typeof year>) => {
    setYear(event.target.value);
  };

  const handleChangeCountySelect = (event: any, newInputValue: string) => {
    setTown('');
    setCounty(newInputValue);
  };

  const handleChangeTownSelect = (event: any, newInputValue: string) => {
    setTown(newInputValue);
  };

  return {
    year,
    handleChangeYearSelect,

    county,
    handleChangeCountySelect,

    town,
    handleChangeTownSelect,
  };
}
