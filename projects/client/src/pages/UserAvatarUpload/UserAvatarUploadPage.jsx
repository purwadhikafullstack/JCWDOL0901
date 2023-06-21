import React, { useEffect } from "react";
import BackButton from "../../components/BackButton";
import UpdateAvatarForm from "../../components/UserAvatarUpload/UpdateAvatarForm";
import CategoryIllustration from "../../components/Category/CategoryIllustration";
import CompanyLogo from "../../components/CompanyLogo";
import AvatarIllustration from "../../components/UserAvatarUpload/AvatarIllustration";

const Illustration = () => {
	return (
		<div className="my-auto mx-12 flex flex-row sm:flex-col items-center">
			<div className="mb-10 text-green-100 text-2xl sm:text-3xl font-medium text-left sm:text-center pr-4">
				Update Profile Picture
			</div>
			<AvatarIllustration className="w-[160px] sm:w-[350px] pb-12 mx-auto"/>
		</div>
	);
};

function UserAvatarUploadPage() {
	return (
		<div className="bg-green-100 flex items-center justify-center h-screen">
			<div className="flex flex-col sm:flex-row bg-white rounded-lg h-screen sm:h-auto justify-between">
				<div className="sm:bg-green-200 z-10 rounded-t-lg sm:rounded-tr-none rounded-tr-lg sm:rounded-l-lg bg-green-200">
					<BackButton url="/user/profile" color="text-green-100" />
					<Illustration />
				</div>
				<div className="bg-white rounded-r-lg pb-4">
					<UpdateAvatarForm />
				</div>
			</div>
		</div>
	);
}

export default UserAvatarUploadPage;
