import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import SwipeIcon from '@mui/icons-material/Swipe';
import { WidthFull } from '@mui/icons-material';

interface NavBarProps {
  setPage: Function;
  width: string | number;
}

export default function LabelBottomNavigation(props: NavBarProps) {
  const [value, setValue] = React.useState('swipe');
  const { width } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setPage(newValue);
  };

  const {setPage} = props;

  return (
    <BottomNavigation 
      sx={{ 
        width: width,
        position: 'fixed',
        bottom: '0',
        height: '15%',
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