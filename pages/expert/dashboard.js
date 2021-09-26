import {useState, useEffect} from 'react';
import PageBanner from 'components/PageBanner';
import CheckProfile from 'elements/Dashboard/CheckProfile';
import {userService} from 'services/user.services';
import SideBar from 'elements/Dashboard/SideBar';
import ProfileTabs from 'elements/Dashboard/ProfileTabs';

function dashboard(props) {
  const [profileData, setProfileData] = useState({});
  const [showCheckProfile, setShowCheckProfile] = useState(false);

  const {id, first_name, middle_name, last_name} = userService.userValue;

  let name = first_name;
  if (middle_name) name += ' ' + middle_name;
  if (last_name) name += ' ' + last_name;

  useEffect(async () => {
    await userService
      .getUserProfile(id)
      .then((response) => {
        const {data} = response;
        if (data.length === 0) {
          showCheckProfile(true);
          setProfileData({});
        } else {
          setProfileData(data);
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <section className='dashboard'>
      <PageBanner img_name='bnr1.jpg' heading='Dashboard' sub_heading='' />
      <div className='container'>
        <div className='newrow dashboard__content'>
          <div className='col-new-4 bgl-white sidebar'>
            <div className='user__img'>
              <div className='user__img_container'>
                <img src='/images/userimg.png' alt='' />
              </div>
              <div className=''>{name}</div>
            </div>
            <div className='sidebar__item'>
              <div className='text'>Project Completed</div>
              <div className='value'>24</div>
            </div>
            <div className='sidebar__item'>
              <div className='text'>Money Earned</div>
              <div className='value'>Rs. 2,400</div>
            </div>
          </div>
          <div className='col-new-8 bgl-white dashboard_main_content'>
            <ProfileTabs profiledata={profileData} />
          </div>
        </div>
      </div>
      {showCheckProfile && <CheckProfile uid={id} />}
    </section>
  );
}

export default dashboard;
