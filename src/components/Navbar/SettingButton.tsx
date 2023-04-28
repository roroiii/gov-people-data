import Button from '@mui/material/Button';
import Image from 'next/image';

export default function SettingButton() {
  return (
    <Button variant="outlined" color="secondary" sx={{ width: 30, height: 30, minWidth: 0, p: 0 }}>
      <Image width="16" height="16" src="/settings.svg" alt="settings" />
    </Button>
  );
}
