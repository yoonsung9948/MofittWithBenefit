import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import SwipeIcon from '@mui/icons-material/Swipe';

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
        label=""
        value="swipe"
        icon={<SwipeIcon aria-label='' sx={{transform: 'scale(1.65)'}} />}
      />
      <BottomNavigationAction
        label=""
        value="profile"
        icon={<AccountCircleIcon sx={{transform: 'scale(1.65)'}}/>}
      />
      <BottomNavigationAction
        label=""
        value="matched"
        icon={<PeopleIcon sx={{transform: 'scale(1.65)'}}/>}
      />
    </BottomNavigation>
  );
}