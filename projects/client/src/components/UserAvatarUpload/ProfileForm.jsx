import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

const ProfileForm = () => {
	const [avatar, setAvatar] = useState(null);

	useEffect(() => {
		// Fetch avatar from database and update the state
		fetchAvatar();
	}, []);

	const fetchAvatar = async () => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/profile/avatar`);
			// const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/profile/avatar`, {
			// 	headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			// });
			const { avatar } = response.data;
			setAvatar(avatar);
		} catch (error) {
			console.error(error);
		}
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setAvatar(file);
	};

	const handleSubmit = async (values) => {
		const formData = new FormData();
		formData.append("avatar", avatar);

		try {
			await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/profile/avatar/update`, formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			// await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/avatar/update`, formData, {
			// 	headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			// });
			alert("Avatar updated successfully");
		} catch (error) {
			console.error(error);
			alert("Failed to update avatar");
		}
	};

	const formik = useFormik({
		initialValues: {},
		onSubmit: handleSubmit,
	});

	return (
		<div className="flex flex-col flex-1 px-4 sm:px-8">
			<h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
			<form onSubmit={formik.handleSubmit}>
				<div className="mb-4">
					<label htmlFor="avatar" className="block mb-2 font-medium">
						Avatar:
					</label>
					<input
						id="avatar"
						name="avatar"
						type="file"
						onChange={handleFileChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
				</div>
				<button type="submit" className="bg-green-500 text-white rounded px-4 py-2">
					Update Avatar
				</button>
			</form>
		</div>
	);
};

export default ProfileForm;
