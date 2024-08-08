import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { MdRestaurantMenu } from 'react-icons/md';
import Beverages from './MenuDetails/Beverages';
import Desserts from './MenuDetails/Desserts';
import MainCourse from './MenuDetails/MainCourse';
import Salads from './MenuDetails/Salads';
import Starters from './MenuDetails/Starters';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    variant="scrollable"
    scrollButtons="auto"
    allowScrollButtonsMobile
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 30,
    width: '100%',
    backgroundColor: '#8367c7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightSemibold,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'black',
    '&.Mui-selected': {
      color: '#001f54',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

export default function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='mt-24'>
      <h1 className='text-3xl flex items-center justify-center font-bold text-indigo-800'><MdRestaurantMenu className='mr-5' /> All Menu <MdRestaurantMenu className='ml-5' /></h1>
      <Box sx={{ width: '100%', margin: 'auto', maxWidth: '1400px' }}>
        <Box sx={{ bgcolor: 'white' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <StyledTab label="Starters" />
            <StyledTab label="Salads" />
            <StyledTab label="Main Courses" />
            <StyledTab label="Desserts" />
            <StyledTab label="Beverages" />
          </StyledTabs>
          <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
            {value === 0 && <Starters />}
            {value === 1 && <Salads />}
            {value === 2 && <MainCourse />}
            {value === 3 && <Desserts />}
            {value === 4 && <Beverages />}
          </Box>
        </Box>
      </Box>
    </div>
  );
}