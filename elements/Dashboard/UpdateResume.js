import React, {useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';

function UpdateResume(props) {
  const [loading, setLoading] = useState(false);
  return (
    <div className='row'>
      <div className='col-sm-8'>
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
              accept='.pdf,.doc,.docx'
            />
          </div>
        </div>
      </div>
      <div className='col-sm-12 mt-2'>
        {loading ? (
          <Spinner animation='border' variant='primary' role='status'></Spinner>
        ) : (
          <button
            name='submit'
            type='submit'
            propvalue='Submit'
            className='btn2 btn2-link d-inline-flex align-items-center'
          >
            <i className='fa fa-angle-right m-r10'></i>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default UpdateResume;
