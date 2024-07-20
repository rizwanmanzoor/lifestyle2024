import { Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItemProps {
  path: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <Button
      onClick={() => navigate(path)}
      sx={{
        borderBottom: isActive ? '6px solid rgb(0 0 0 / 0.7)' : '6px solid transparent',
        borderRadius: 2,
        paddingTop: '10px',
        paddingBottom: isActive ? '10px' : '0px',
        minWidth: 130,
        minHeight: 60,
      }}
    >
      <Typography variant="h5" color="rgb(0 0 0 / 0.7)" textAlign="center">
        {label}
      </Typography>
    </Button>
  );
};

export default MenuItem;