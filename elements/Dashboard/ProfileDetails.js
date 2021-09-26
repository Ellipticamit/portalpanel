import React from 'react';
import ProfileCompleteForm from 'elements/ProfileCompleteForm';
import {
  assignmentOptions,
  experienceOptions,
  workOptions,
} from 'utility/constant';
import {industriesOptions} from 'utility/IndustriesOptions';
import {positionOptions} from 'utility/PositionOptions';
import {
  getDefaultValue,
  getMultiDefaultValue,
  getMultiValue,
} from 'utility/helper';
import {userService} from 'services/user.services';

const IndustriesOptions = industriesOptions();
const PositionOptions = positionOptions();

function ProfileDetails({profiledata}) {
  const {
    assignment,
    experience,
    industries,
    position,
    work,
    professionalprofile,
  } = profiledata;

  const {id} = userService.userValue;

  const experience_default_value = getDefaultValue(
    experience,
    experienceOptions
  );

  const position_default_value = getDefaultValue(position, PositionOptions);

  const industries_default_values = getMultiDefaultValue(
    industries,
    IndustriesOptions
  );

  const industries_values = getMultiValue(industries, IndustriesOptions);

  const work_default_values = getMultiDefaultValue(work, workOptions);
  const work_values = getMultiValue(work, workOptions);

  const assignment_default_values = getMultiDefaultValue(
    assignment,
    assignmentOptions
  );

  const assignment_values = getMultiValue(assignment, assignmentOptions);

  const values = {
    experience: experience_default_value,
    industries: {
      defaultValue: industries_default_values,
      val: industries_values,
    },
    position: position_default_value,
    work: {
      defaultValue: work_default_values,
      val: work_values,
    },
    assignment: {
      defaultValue: assignment_default_values,
      val: assignment_values,
    },
    professionalprofile,
  };

  return (
    <div className='profile__details'>
      <ProfileCompleteForm
        uid={id}
        resumeupload={false}
        colstyle='col-md-12'
        values={values}
        profilebutton='Update'
        submittype='update'
      />
    </div>
  );
}

export default ProfileDetails;
