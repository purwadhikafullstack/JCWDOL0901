import React from 'react'
import BackButton from "../../components/BackButton";
import RegisterForm from "../../components/Register/RegisterForm";
import CompanyLogo from "../../components/CompanyLogo";
import RegisterIllustration from "../../components/Register/RegisterIllustration";

const DesktopIllustration = () => {
	return (
		<div className="my-auto mx-12 mt-2 shrink">
			<div className="mb-4 text-green-100 text-3xl font-light">
				Admin login page.
			</div>
			<RegisterIllustration className="w-[400px] pb-12" />
		</div>
	);
};

function AdminLoginDesktop() {
  return (
    <div className="flex flex-col mx-auto my-auto min-w-[480px] min-h-screen bg-black[.05]">
    <div className="flex flex-row min-w-fit justify-around mx-auto my-auto rounded-xl shadow-xl bg-white">
        <div className="flex flex-col shrink content-center pt-8 bg-green-300 rounded-l-xl">
            <BackButton url="/" color="text-green-100" />
            <CompanyLogo color={false} className="mb-2 w-1/6 cursor-pointer mx-auto shrink"/>
            <DesktopIllustration />
        </div>
        <div className="flex flex-col items-center shrink-0 mx-12">
            <RegisterForm />
        </div>
    </div>
</div>
  )
}

export default AdminLoginDesktop