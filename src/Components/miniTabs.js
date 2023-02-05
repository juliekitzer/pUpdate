import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function MiniTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  let activitiescards
  activities.forEach(dog => {
      if (dog.length > 0) {
          if (dog[0].Dog.id == activeTab) {
              activitiescards = dog.map((activity, index) => {
                  // console.log('loop', index)
                  return (
                      <div>

                          <Activitycard key={activity.id} activity={activity} handleTabChange={handleTabChange} activeTab={activeTab} tabId={activity.dogid} handleGetActivities={handleGetActivities} handleSetActivities={handleSetActivities}

                          />

                      </div>

                  )
              })
          }
      }
  })















  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

export default  MiniTabs;