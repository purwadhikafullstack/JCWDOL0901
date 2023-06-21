import React from 'react'
import FileUploadInputGroup from '../FileUploadInputGroup'

function AvatarInputField({ formik, setFile }) {
  return (
    <div className="flex flex-col items-center w-full">
			<FileUploadInputGroup
				name="Upload Image"
				type="file"
				inputKey="avatar"
				formik={formik}
				setFile={setFile}
			/>
		</div>
  )
}

export default AvatarInputField