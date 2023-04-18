import { useState } from 'react';
import { UseOpenState } from './types';

export default function useOpen(): UseOpenState {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { open, handleOpen, handleClose };
}
