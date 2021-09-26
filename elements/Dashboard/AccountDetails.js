import React from 'react';
import RegisterForm from 'components/RegisterForm';
import {ExpertAccountDetailsFields} from 'utility/constant';
import {userService} from 'services/user.services';

function AccountDetails(props) {
  const {
    id,
    first_name,
    middle_name,
    surname,
    email,
    mobile,
  } = userService.userValue;

  const values = {
    first_name,
    middle_name,
    surname,
    email,
    mobile,
  };
  return (
    <div className='account_details'>
      {/*
       <div className='row'>
        <div className='account_details-item'>
          <div className='label'>First Name: </div>
          <div className='value'>{first_name}</div>
        </div>
        <div className='col-md-6'>{first_name}</div>
      </div>
       */}

      <RegisterForm
        fields={ExpertAccountDetailsFields}
        colstyle='col-md-6'
        values={values}
        registerbutton='Update'
        submit_type='update'
        uid={id}
      />
    </div>
  );
}

export default AccountDetails;
