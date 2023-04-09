import StyleIcon from '@mui/icons-material/Style';
import BadgeIcon from '@mui/icons-material/Badge';
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

interface NavBarProps {
  setPage: Function;
}

export default function LabelBottomNavigation(props: NavBarProps) {
  const [value, setValue] = React.useState('swipe');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setPage(newValue);
  };

  const {setPage} = props;

  return (
    <BottomNavigation 
      sx={{ 
        width: '100%',
        position: 'fixed',
        bottom: '0',
        height: '15vh',
      }} 
      value={value} 
      onChange={handleChange}>
      <BottomNavigationAction
        sx={{ rotate: '180deg' }}
        label=""
        value="swipe"
        icon={<StyleIcon aria-label='' sx={{transform: 'scale(2)'}} />}
      />
      <BottomNavigationAction
        label=""
        value="profile"
        icon={<BadgeIcon sx={{transform: 'scale(2)'}}/>}
      />
    </BottomNavigation>
  );
}