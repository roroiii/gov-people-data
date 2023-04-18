import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useOpen from '@/hooks/useOpen';
import { CountryList } from '@/hooks/types';

interface SelectCountryProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  selectList: CountryList[];
}

export default function SelectCountry({ value, handleChange, selectList }: SelectCountryProps) {
  const { open, handleOpen, handleClose } = useOpen();

  return (
    <>
      <FormControl sx={{ m: '6px', minWidth: 165 }}>
        <InputLabel id="country-open-select-label">縣/市</InputLabel>
        <Select
          labelId="country-open-select-label"
          id="country-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          label={value}
          onChange={handleChange}
          sx={{
            maxHeight: '40px',
            '& legend': { pr: 3 },
          }}
        >
          <MenuItem disabled value="0">
            請選擇 縣/市
          </MenuItem>
          {selectList.map((item: CountryList) => (
            <MenuItem key={item.name} value={`${item.code}${item.name}`}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
