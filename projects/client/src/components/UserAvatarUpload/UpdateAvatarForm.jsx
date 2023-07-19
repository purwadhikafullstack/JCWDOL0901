import React, { useEffect, useState } from "react";
import ErrorWarning from "../ErrorWarning";
import { useFormik } from "formik";
import { getAvatar } from "./handlers/updateAvatarHandler";
import { formikUpdateAvatarConfiguration } from "./config/formikUpdateAvatarConfiguration";
import AvatarImagePreview from "./AvatarImagePreview";
import AvatarInputField from "./AvatarInputField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function UpdateAvatarForm({ item }) {
	const [file, setFile] = useState();
	const [error, setError] = React.useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const formik = useFormik(formikUpdateAvatarConfiguration(navigate, dispatch));
	console.log(file);

	useEffect(() => {
		getAvatar()
			.then((result) => {
				setFile(process.env.REACT_APP_IMAGE_BASE_URL + result.data.avatar);
			})
			.catch((error) => {
				alert("Server Unavailable");
			});
	}, []);

	return (
		<div className="my-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-8">
			<ErrorWarning error={error} />
			<form onSubmit={formik.handleSubmit} encType="multipart/form-data" noValidate>
				<AvatarImagePreview file={file} />
				<AvatarInputField formik={formik} setFile={setFile} />
				<Button type="submit" name="Update" disabled={formik.isSubmitting} pending={formik.isSubmitting} />
			</form>
		</div>
	);
}

export default UpdateAvatarForm;
