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
  type: 'email',
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
};

const ExpertRegisterFields = [
  {
    ...userfield,
  },
  {
    ...emailField,
  },
  {
    ...passwordField,
  },
  {
    ...mobileField,
  },
  {
    iconname: 'graduation-cap',
    label: 'Year of Experience',
    placeholder: 'Enter Yoar of Experience...',
    type: 'text',
    name: 'experience',
    required: true,
  },
  {
    iconname: 'trophy',
    label: 'Area of Expertise',
    placeholder: 'Enter Area of Expertise...',
    type: 'text',
    name: 'expertise',
    required: true,
  },
];

const ExpertFormData = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  experience: '',
  expertise: '',
};

const ClientFormData = {
  first_name: '',
  last_name: '',
  comapny_name: '',
  business_number: '',
  business_email: '',
  location: '',
  message: '',
};

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
  ExpertFormData,
  ClientRegisterFields,
  ClientFormData,
};
