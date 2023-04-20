import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useSelectProps } from './types';

export default function useSelect(props?: useSelectProps) {
  console.log(props);
  const [year, setYear] = useState<string>(props?.defaultYear ? props?.defaultYear : '110');
  const [county, setCounty] = useState<string>(props?.defaultCounty ? props?.defaultCounty : '0');
  const [town, setTown] = useState<string>(props?.defaultTown ? props?.defaultTown : '0');

  const handleChangeYearSelect = (event: SelectChangeEvent<typeof year>) => {
    setYear(event.target.value);
  };

  const handleChangeCountySelect = (event: SelectChangeEvent<typeof county>) => {
    setTown('0');
    setCounty(event.target.value);
  };

  const handleChangeTownSelect = (event: SelectChangeEvent<typeof town>) => {
    setTown(event.target.value);
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
