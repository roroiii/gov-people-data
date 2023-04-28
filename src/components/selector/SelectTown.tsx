import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { TownList } from '@/hooks/types';
import { Autocomplete, TextField } from '@mui/material';
import theme from '@/utils/theme';

interface SelectTownProps {
  value: string;
  handleChange: (event: React.SyntheticEvent<Element, Event>, newInputValue: string) => void;
  selectList: TownList[] | null;
  disabled: boolean;
}

export default function SelectTown({ value, handleChange, selectList, disabled }: SelectTownProps) {
  let options;
  if (selectList) {
    options = selectList.map((item) => item.name);
    options.unshift('');
  }
  return (
    <FormControl
      fullWidth
      sx={{
        m: '6px',
        minWidth: { xs: '100%', md: 165 },
        maxWidth: { xs: '100%', md: 165 },
        background: '#ffffff',
        maxHeight: 40,
        '&:focus-within label': {
          color: theme.palette.primary.main,
        },
      }}
    >
      <InputLabel
        htmlFor="town-label"
        sx={{
          position: 'absolute',
          top: '-25px',
          left: '0',
          bgcolor: 'white',
          padding: '0 5px',
          fontSize: 12,
        }}
      >
        區
      </InputLabel>
      <Autocomplete
        disabled={disabled}
        id="town-label"
        value={value}
        inputValue={value}
        onInputChange={handleChange}
        options={options || [value]}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="請先選擇 縣/市"
            variant="outlined"
            sx={{
              maxHeight: '40px',
              '& #town-label': { p: 0 },
            }}
          />
        )}
      />
    </FormControl>
  );
}
