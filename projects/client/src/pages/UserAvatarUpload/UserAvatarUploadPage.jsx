import React, { useEffect } from "react";
import BackButton from "../../components/BackButton";
import UpdateAvatarForm from "../../components/UserAvatarUpload/UpdateAvatarForm";
import CategoryIllustration from "../../components/Category/CategoryIllustration";
import CompanyLogo from "../../components/CompanyLogo";
// import ProfileForm from "../../components/UserAvatarUpload/ProfileForm";
import { useLocation } from "react-router-dom";

const Illustration = () => {
	return (
		<div className="my-auto mx-12 flex flex-row sm:flex-col items-center">
			<div className="mb-10 text-green-100 text-2xl sm:text-3xl font-medium text-left sm:text-center pr-4">
				Update Profile Picture
			</div>
			<div className="w-[160px] sm:w-[350px] pb-12 mx-auto"></div>
		</div>
	);
};

// const Illustration = () => {
// 	return (
// 		<>
// 			<div className="bg-green-200 block text-white flex flex-row justify-center items-center z-10 sm:hidden">
// 				<div className="my-3 mr-auto ml-6 text-3xl font-semibold">Avatar Profile</div>
// 			</div>

// 			<div className="hidden my-8 mx-20 shrink-0 sm:flex sm:flex-col sm:justify-center">
// 				<div className="mb-4 text-green-100 text-3xl font-light">Avatar Profile</div>
// 			</div>
// 		</>
// 	);
// };

// function UserAvatarUploadPage() {
// 	return (
// 		<div className="flex flex-col mx-auto flex-1 min-w-[480px] w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:py-20 sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
// 			<div className="z-10 relative sm:flex sm:flex-col sm:bg-green-400 sm:h-inherit sm:rounded-xl sm:p-6">
// 				<BackButton url="/" color="text-green-100" />
// 				<Illustration />
// 			</div>
// 			{/* <ProfileForm /> */}
// 			<UpdateAvatarForm />
// 		</div>
// 	);
// }
function UserAvatarUploadPage() {
	const item = useLocation().state;
	// console.log("useLocation item in avatar page: ", item);
	// useEffect(() => {
	// 	console.log(item);
	// }, []);
	return (
		<div className="bg-green-100 flex items-center justify-center h-screen">
			<div className="flex flex-col sm:flex-row bg-white rounded-lg h-screen sm:h-auto justify-between">
				<div className="sm:bg-green-200 z-10 rounded-t-lg sm:rounded-tr-none rounded-tr-lg sm:rounded-l-lg bg-green-200">
					<BackButton url="/user/profile" color="text-green-100" />
					<Illustration />
				</div>
				<div className="bg-white rounded-r-lg pb-4">
					{/* <UpdateAvatarForm /> */}
					<UpdateAvatarForm item={item} />
				</div>
			</div>
		</div>
	);
}

export default UserAvatarUploadPage;
