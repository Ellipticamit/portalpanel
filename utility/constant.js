import {industriesOptions} from './IndustriesOptions';
import {positionOptions} from './PositionOptions';

const nameField = (label, name, required) => {
  return {
    iconname: 'user',
    type: 'text',
    required: required,
    label: label,
    name: name,
    placeholder: `Enter ${label}...`,
  };
};

const userfield = {
  iconname: 'user',
  label: 'Full Name',
  placeholder: 'Enter Full Name...',
  type: 'text',
  required: true,
  name: 'name',
};

const emailField = {
  iconname: 'envelope',
  label: 'Email',
  placeholder: 'Enter Email...',
  type: 'text',
  required: true,
  name: 'email',
};

const mobileField = {
  iconname: 'mobile',
  label: 'Mobile Number',
  placeholder: 'Enter Mobile...',
  type: 'text',
  required: true,
  name: 'mobile',
};

const passwordField = {
  iconname: 'lock',
  label: 'Password',
  placeholder: 'Enter Password...',
  type: 'password',
  name: 'password',
  required: true,
};
const firstName = nameField('First Name', 'first_name', true);
const middleName = nameField('Middle Name', 'middle_name', false);
const surName = nameField('Surnane Name', 'surname', false);
const ExpertRegisterFields = [
  {
    ...firstName,
  },
  {
    ...middleName,
  },
  {
    ...surName,
  },
  {
    ...mobileField,
    label: 'Contact Number',
    placeholder: 'Enter Contact Number...',
  },
  {
    ...emailField,
  },
  {
    ...passwordField,
  },
];

const UserProfileFields = [
  {
    iconname: 'graduation-cap',
    label: 'Year of Experience',
    placeholder: 'Enter Yoar of Experience...',
    type: 'number',
    name: 'experience',
    required: true,
  },
];

const experienceOptions = [
  {value: '4', label: 'Less than 5'},
  {value: '10', label: '5-10'},
  {value: '15', label: '10-15'},
  {value: '20', label: '15-20'},
  {value: '25', label: '20-25'},
  {value: '26', label: 'More than 25'},
];

const assignmentOptions = [
  {value: 'hourly', label: 'Hourly based advisory/mentoring'},
  {value: 'parttime', label: 'Part time assignment'},
  {value: 'fulltime', label: 'Full time assignment'},
];

const workOptions = [
  {value: 'video', label: 'Only on call/video'},
  {
    value: 'in person',
    label: 'In person',
  },
];

const UserMultiSelectFields = [
  {
    label: 'No. of Years of Experience',
    name: 'experience',
    ismulti: false,
    required: 'Years of Experience is required',
    options: experienceOptions,
  },
  {
    label: 'Industries',
    name: 'industries',
    ismulti: true,
    required: 'Industires is required',
    options: industriesOptions(),
  },
  {
    label: 'What was the last position you held',
    name: 'position',
    ismulti: false,
    required: 'This field is required',
    options: positionOptions(),
  },
  {
    label: 'What kind of assignment you are looking for',
    name: 'assignment',
    ismulti: true,
    required: 'This field is required',
    options: assignmentOptions,
  },
  {
    label: 'How you would like to work',
    name: 'work',
    ismulti: true,
    required: 'This field is required',
    options: workOptions,
  },
];

const ClientRegisterFields = [
  {
    ...userfield,
    label: 'First Name',
    name: 'first_name',
    placeholder: 'Enter First Name...',
  },
  {
    ...userfield,
    label: 'Last Name',
    name: 'last_name',
    placeholder: 'Enter Last Name...',
  },
  {
    iconname: 'city',
    label: 'Company Name',
    type: 'text',
    name: 'company',
    required: true,
  },
  {
    ...mobileField,
    label: 'Business Number',
    placeholder: 'Enter Business Number...',
  },
  {
    ...emailField,
    label: 'Business Email',
    placeholder: 'Enter Business Email...',
  },
  {
    iconname: 'map-marker',
    label: 'Location',
    type: 'text',
    name: 'location',
  },
];

export {
  ExpertRegisterFields,
  UserProfileFields,
  ClientRegisterFields,
  UserMultiSelectFields,
};
