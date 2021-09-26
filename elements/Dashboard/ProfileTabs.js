import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import AccountDetails from 'elements/Dashboard/AccountDetails';
import ProfileDeatails from 'elements/Dashboard/ProfileDetails';
import UpdateResume from 'elements/Dashboard/UpdateResume';

function ProfileTabs({profiledata}) {
  // console.log('prfi abs  = ', profiledata);

  // const checkProfileData =
  Object.keys(profiledata).length === 0 && profiledata.constructor === Object;
  return (
    <Tabs>
      <TabList>
        <Tab>Account Details</Tab>
        <Tab>Profile Details</Tab>
        <Tab>Update Resume</Tab>
      </TabList>

      <TabPanel>
        <AccountDetails />
      </TabPanel>
      <TabPanel>
        <ProfileDeatails profiledata={profiledata} />
      </TabPanel>
      <TabPanel>
        <UpdateResume />
      </TabPanel>
    </Tabs>
  );
}

export default ProfileTabs;
