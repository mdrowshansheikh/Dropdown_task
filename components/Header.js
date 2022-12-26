import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const handleChange = (event, val) => {
    setValue(val);
    if (val == 0) {
      router.push('/');
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#c83576' }}>
      <Toolbar>
        <MenuBookIcon
          onClick={handleChange}
          sx={{ fontSize: '26px', cursor: 'pointer' }}
        />
        <Box display="flex" margin={'auto'}>
          <Tabs textColor="inherit" onChange={handleChange} value={value}>
            <Tab label="Home" />
            <Tab label="All books" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
