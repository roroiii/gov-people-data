import Button from '@mui/material/Button';

export default function SettingButton() {
  return (
    <Button variant="outlined" color="secondary" sx={{ width: 30, height: 30, minWidth: 0, p: 0 }}>
      <img src="/settings.svg" alt="settings" />
    </Button>
  );
}
