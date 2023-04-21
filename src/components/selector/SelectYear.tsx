import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectYearProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  selectList: string[];
}

export default function SelectYear({ value, handleChange, selectList }: SelectYearProps) {
  return (
    <>
      <FormControl sx={{ m: '6px', minWidth: 73, height: 40, background: '#ffffff' }}>
        <InputLabel id={`year-open-select-label`}>年份</InputLabel>
        <Select
          labelId={`year-open-select-label`}
          id={`year-controlled-open-select`}
          value={value}
          label={value}
          onChange={handleChange}
          sx={{
            maxHeight: '40px',
            '& legend': { pr: 1 },
          }}
        >
          {selectList.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
