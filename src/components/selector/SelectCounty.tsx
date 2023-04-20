import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { CountyList } from '@/hooks/types';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import theme from '@/utils/theme';

interface SelectCountyProps {
  value: string;
  handleChange: (event: any, newValue: string) => void;
  selectList: CountyList[];
}

export default function SelectCounty({ value, handleChange, selectList }: SelectCountyProps) {
  const options = selectList.map((item) => item.name);
  options.unshift('');

  return (
    <>
      <FormControl
        fullWidth
        sx={{
          m: '6px',
          minWidth: { xs: '100%', md: 165 },
          maxWidth: { xs: '100%', md: 165 },
          maxHeight: 40,
          '&:focus-within label': {
            color: theme.palette.primary.main,
          },
        }}
      >
        <InputLabel
          htmlFor="county-label"
          sx={{
            position: 'absolute',
            top: '-25px',
            left: '0',
            bgcolor: 'white',
            padding: '0 5px',
            fontSize: 12,
          }}
        >
          縣/市
        </InputLabel>
        <Autocomplete
          id="county-label"
          value={value}
          inputValue={value}
          onInputChange={handleChange}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="請選擇 縣/市"
              variant="outlined"
              sx={{
                maxHeight: '40px',
                '& #county-label': { p: 0 },
              }}
            />
          )}
        />
      </FormControl>
    </>
  );
}
