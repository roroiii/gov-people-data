import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CountyList } from '@/hooks/types';

interface SelectCountyProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  selectList: CountyList[];
}

export default function SelectCounty({ value, handleChange, selectList }: SelectCountyProps) {
  return (
    <>
      <FormControl fullWidth sx={{ m: '6px', minWidth: { xs: '100%', md: 165 }, maxWidth: { xs: '100%', md: 165 } }}>
        <InputLabel id="county-open-select-label">縣/市</InputLabel>
        <Select
          labelId="county-open-select-label"
          id="county-controlled-open-select"
          value={value}
          label={value}
          onChange={handleChange}
          sx={{
            maxHeight: '40px',
            '& legend': { pr: 3, maxWidth: 40 },
          }}
        >
          <MenuItem disabled value="0">
            請選擇 縣/市
          </MenuItem>
          {selectList.map((item: CountyList) => (
            <MenuItem key={item.name} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
