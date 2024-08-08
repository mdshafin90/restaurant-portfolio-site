// import { Button } from '@mui/material';
// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';

// const Menu = () => {
//     return (
//         <div className='mt-28'>
//             <Helmet>
//                <title>Tasteful Table | Menu</title>
//             </Helmet>
//             <div className='flex justify-center items-center gap-8'>
//               <Link to='/starters'><p>Starters</p></Link>
//               <Link to='/salads'><p>Salads</p></Link>
//               <Link to='/mainCourse'><p>Main Courses</p></Link>
//               <Link to='/desserts'><p>Desserts</p></Link>
//               <Link to='/beverages'><p>Beverages</p></Link>
//             </div>
//             <Button variant="contained">Hello world</Button>
//         </div>
//     );
// };

// export default Menu;

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import * as React from 'react';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Menu() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//     </Box>
//   );
// }

// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import * as React from 'react';
// import Beverages from './MenuDetails/Beverages';
// import Desserts from './MenuDetails/Desserts';
// import MainCourse from './MenuDetails/MainCourse';
// import Salads from './MenuDetails/Salads';
// import Starters from './MenuDetails/Starters';

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   '& .MuiTabs-indicator': {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//   },
//   '& .MuiTabs-indicatorSpan': {
//     maxWidth: 30,
//     width: '100%',
//     backgroundColor: '#8367c7',
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: 'none',
//     fontWeight: theme.typography.fontWeightSemibold,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: 'black',
//     '&.Mui-selected': {
//       color: '#001f54',
//     },
//     '&.Mui-focusVisible': {
//       backgroundColor: 'rgba(100, 95, 228, 0.32)',
//     },
//   }),
// );

// export default function Menu() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className='mt-24'>
//       <Box sx={{ width: '90%', margin: 'auto' }}>
//         <Box sx={{ bgcolor: '#fff' }}>
//           <Box sx={{ p: 3 }} />
//         </Box>
//         <Box sx={{ bgcolor: 'white' }}>
//           <StyledTabs
//             value={value}
//             onChange={handleChange}
//             aria-label="styled tabs example"
//           >
//             <StyledTab label="Starters" />
//             <StyledTab label="Salads" />
//             <StyledTab label="Main Courses" />
//             <StyledTab label="Desserts" />
//             <StyledTab label="Beverages" />
//           </StyledTabs>
//           <Box sx={{ p: 3 }}>
//             {value === 0 && <Starters />}
//             {value === 1 && <Salads />}
//             {value === 2 && <MainCourse />}
//             {value === 3 && <Desserts />}
//             {value === 4 && <Beverages />}
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// }

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
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