import React from 'react'
import ErrorWarning from "../ErrorWarning";
import UserAccountSettingFormWithValidator from './UserAccountSettingFormWithValidator';

function UserAccountSettingForm() {
    const [error, setError] = React.useState("");

  return (
     <div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
      <ErrorWarning error={error} />
      <UserAccountSettingFormWithValidator setError={setError} />
    </div>
  )
}


export default UserAccountSettingForm;
