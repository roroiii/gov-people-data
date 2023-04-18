import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

export default function useSelect() {
  const [year, setYear] = useState<string>('110');
  const [country, setCountry] = useState<string>('0');
  const [town, setTown] = useState<string>('0');

  const handleChangeYearSelect = (event: SelectChangeEvent<typeof year>) => {
    setYear(event.target.value);
  };

  const handleChangeCountrySelect = (event: SelectChangeEvent<typeof country>) => {
    setTown('0');
    setCountry(event.target.value);
  };

  const handleChangeTownSelect = (event: SelectChangeEvent<typeof town>) => {
    setTown(event.target.value);
  };

  return {
    year,
    handleChangeYearSelect,

    country,
    handleChangeCountrySelect,

    town,
    handleChangeTownSelect,
  };
}
