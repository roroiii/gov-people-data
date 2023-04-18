import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useOpen from '@/hooks/useOpen';
import { TownList } from '@/hooks/types';

interface SelectTownProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  selectList: TownList[];
  disabled: boolean;
}

export default function SelectTown({ value, handleChange, selectList, disabled }: SelectTownProps) {
  const { open, handleOpen, handleClose } = useOpen();

  return (
    <>
      <FormControl sx={{ m: '6px', minWidth: 165 }} disabled={disabled}>
        <InputLabel id="town-open-select-label">區</InputLabel>
        <Select
          labelId="town-open-select-label"
          id="town-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          label={value}
          onChange={handleChange}
          sx={{
            maxHeight: '40px',
            '& legend': { pr: 1 },
          }}
        >
          <MenuItem disabled value="0">
            <em>請先選擇 縣/市</em>
          </MenuItem>
          {selectList.map((item: TownList) => (
            <MenuItem key={item.name} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
