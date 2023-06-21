import React, { useEffect, useState } from "react";
import ErrorWarning from "../ErrorWarning";
import axios from "axios";
import { useFormik } from "formik";
import { getAvatar } from "./handlers/updateAvatarHandler";
import { formikUpdateAvatarConfiguration } from "./config/formikUpdateAvatarConfiguration";
import { useNavigate } from "react-router-dom";
import AvatarImagePreview from "./AvatarImagePreview";
import AvatarInputField from "./AvatarInputField";
import Button from "../Button";

function UpdateAvatarForm({ item }) {
	const [file, setFile] = useState();
	const [error, setError] = React.useState("");
	const formik = useFormik(formikUpdateAvatarConfiguration());
	console.log(formik);

	useEffect(() => {
		getAvatar()
			.then((result) => {
				console.log(result);
				setFile(result.data.avatar);
			})
			.catch((error) => {
				alert("Server Unavailable");
				console.log(error);
			});
	}, []);
	console.log("item of avatar useLocation: ", item)
	return (
		<div className="my-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-8">
			<ErrorWarning error={error} />
			<form onSubmit={formik.handleSubmit} encType="multipart/form-data" noValidate>
				<AvatarImagePreview file={file} />
				<AvatarInputField formik={formik} setFile={setFile} />
				<Button type="submit" name="Update" disabled={formik.isSubmitting} />
			</form>
		</div>
	);
}

// function UpdateAvatarForm() {
// 	// const navigate = useNavigate();
// 	// const [file, setFile] = useState(process.env.REACT_APP_IMAGE_BASE_URL + item.image);
// 	// const formik = useFormik(formikUpdateCategoryConfiguration(navigate, item));

//     // const navigate = useNavigate();
// 	// const [error, setError] = React.useState("");

// 	// const [file, setFile] = useState();

// 	// const formik = useFormik(formikUpdateAvatarConfiguration(setError, navigate, file));

// 	// useEffect(() => {
// 	// 	getAvatar
// 	// 		.then((result) => {
// 	// 			setFile(result.data);
// 	// 		})
// 	// 		.catch((error) => alert("Server Unavailable"));
// 	// }, []);

// 	return (
// 		<div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
// 			{/* <ErrorWarning error={error} /> */}
// 			<h3 className="border-b px-5 pb-1 mx-auto text-lg font-medium leading-6 text-gray-900">Profile Picture</h3>
// 			<hr className="h-5" />
// 			{/* {file && <UserAccountSettingFormWithValidator setError={setError} file={file} />} */}
// 		</div>
// 	);
// }

export default UpdateAvatarForm;
