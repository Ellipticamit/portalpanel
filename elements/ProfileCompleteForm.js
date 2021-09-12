import {useState} from 'react';
import axios from 'axios';
import {useForm, Controller} from 'react-hook-form';
import {useRouter} from 'next/router';
import {UserMultiSelectFields} from 'utility/constant';
import TextArea from 'components/TextArea';
import Select from 'react-select';
import {userService} from 'services/user.services';
import {getFileExtension} from 'utility/helper';

function ProfileCompleteForm({uid}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm();

  const [fileName, setFileName] = useState(null);
  const [fileExtError, setFileExtError] = useState(null);

  const uploadToClient = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFileName(i.name);
      setFileExtError('');
      const fileExt = getFileExtension(i.name);

      if (fileExt === 'pdf' || fileExt === 'docx' || fileExt === 'doc') {
        const config = {
          headers: {'content-type': 'multipart/form-data'},
          onUploadProgress: (event) => {
            console.log(
              `Current progress:`,
              Math.round((event.loaded * 100) / event.total)
            );
          },
        };
        const formData = new FormData();
        formData.append('resume', i);
        const response = await axios.post(
          '/api/users/fileupload',
          formData,
          config
        );

        return;
      }

      setFileExtError('Invalid file format. (Only pdf and doc file allowed)');
      return;
    }
  };

  const [errMsg, setErrMsg] = useState(null);

  const onSubmit = async (formData) => {
    setErrMsg('');
    formData['uid'] = uid;
    formData['resume'] = fileName;

    userService
      .completeProfile(formData)
      .then((response) => {
        const {data} = response;
        const {message} = data;

        if (message === 'success') {
          const returnUrl = `/login`;
          router.push(returnUrl);
        }
      })
      .catch((error) => setErrMsg(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        {errMsg && (
          <div className='col-md-12'>
            <div className='alert alert-danger' role='alert'>
              {errMsg}
            </div>
          </div>
        )}

        {UserMultiSelectFields.map((item) => {
          return (
            <div className='col-md-6' key={item.label}>
              <div className='form__group m-b20'>
                <label>
                  {item.label} {true && <span className='required'>*</span>}
                </label>
                {item.ismulti ? (
                  <Controller
                    control={control}
                    name={item.name}
                    render={({field: {onChange, ref}}) => (
                      <Select
                        inputRef={ref}
                        options={item.options}
                        onChange={(val) => onChange(val.map((c) => c.value))}
                        isMulti
                      />
                    )}
                    rules={{required: item.required}}
                  />
                ) : (
                  <Controller
                    control={control}
                    name={item.name}
                    render={({field: {onChange, ref}}) => (
                      <Select
                        inputRef={ref}
                        options={item.options}
                        onChange={(val) => onChange(val.value)}
                        isMulti={item.ismulti}
                      />
                    )}
                    rules={{required: item.required}}
                  />
                )}

                {errors[item.name] && (
                  <div className='validation_msg m-t5 m-b0'>
                    {errors[item.name].message}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <div className='col-sm-6'>
          <div className='mb-3'>
            <label htmlFor='formFile' className='form-label'>
              Upload Resume (if availabel)
            </label>
            <div className='input-group'>
              <input
                className='form-control file__input'
                type='file'
                id='formFile'
                name='resume'
                onChange={uploadToClient}
                accept='.pdf,.doc,.docx'
              />
            </div>
            {fileExtError && (
              <div className='validation_msg m-t5'>{fileExtError}</div>
            )}
          </div>
        </div>

        <div className='col-sm-12'>
          <TextArea
            label='Brief professional profile'
            name='professionalprofile'
            register={register}
            iconname='address-card'
            placeholder='Enter brief professional profile...'
            showicon={false}
          />
        </div>

        <div className='col-sm-12 mt-4'>
          <button
            name='submit'
            type='submit'
            propvalue='Submit'
            className='btn2 btn2-link d-inline-flex align-items-center'
          >
            <i className='fa fa-angle-right m-r10'></i>Submit
          </button>
        </div>
      </div>

      <div className='m-t20 danger__text'>
        <span className='required'>*</span> Fields are mandatory.
      </div>
    </form>
  );
}

export default ProfileCompleteForm;
