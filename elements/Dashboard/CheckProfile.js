function CheckProfile({uid}) {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-xl-12'>
          <div className='alert alert-danger' role='alert'>
            Please complete your profile first.
            <a href={`/expert/register/${uid}/complete-profile`}>
              &nbsp;Complete Profile Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckProfile;
