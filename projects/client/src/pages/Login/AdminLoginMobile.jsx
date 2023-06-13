import React from "react";
import BackButton from "../../components/BackButton.jsx";
import AdminLoginIllustration from "../../components/Login/AdminLoginIllustration";
import AdminLoginForm from "../../components/Login/AdminLoginForm";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import CompanyLogo from "../../components/CompanyLogo";
// mb-4 text-green-100 text-3xl font-light

const Illustration = () => {
  return (
    <>
      <div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
        <div className="mt-24 mr-auto ml-6 text-3xl font-semibold">Admin Login</div>
        <AdminLoginIllustration className="w-[250px] mr-auto ml-auto pr-4" />
      </div>

      <div className="hidden my-auto mx-12 mt-2 shrink sm:block">
        <div className="mb-4 text-green-100 text-3xl font-light">Admin Login</div>
        <AdminLoginIllustration className="w-[400px] pb-12" />
      </div>
    </>
  );
};

// ===========================
// const Illustration = () => {
//     return (
//         <>
//             <div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
//                 <div className="mt-28 mr-auto ml-6 text-3xl font-semibold">Register</div>
//                 <RegisterIllustration className="w-[250px] mr-auto ml-auto pr-4" />
//             </div>
//             <div className="hidden flex flex-col my-auto h-full mx-12 mt-2 shrink sm:block">
//                 <div className="mb-4 text-green-100 text-3xl font-light">Create an account.</div>
//                 <RegisterIllustration className="w-[400px]" />
//             </div>
//         </>
//     );
// };

// ... main code:
// <div className="z-10 relative sm:flex sm:flex-col sm:bg-green-400 overflow-x-hidden sm:rounded-xl">
//     <BackButton url="/" />
//     <Illustration />
// </div>
// ===========================

// function AdminLoginDesktop() {
// 	return (
// 	  <div className="flex flex-col mx-auto my-auto min-w-[480px] min-h-screen bg-black[.05]">

// 		<div className="flex flex-row min-w-fit justify-around mx-auto my-auto rounded-xl shadow-xl bg-white">

// 		  <div className="flex flex-col shrink content-center pt-8 bg-green-300 rounded-l-xl">
// 			<BackButton url="/" color="text-green-100" />
// 			<CompanyLogo color={false} className="mb-2 w-1/6 cursor-pointer mx-auto shrink" />
// 			<DesktopIllustration />
// 		  </div>

// 		  <div className="flex flex-col items-center shrink-0 mx-12">
// 			<AdminLoginForm />
// 		  </div>

// 		</div>

// 	  </div>
// 	);
//   }

function AdminLoginMobile() {
  return (
    <>
      <div className="block flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white sm:hidden">
        <CircularBackgroundDecoration />
        <BackButton url="/" color="text-white" />
        <Illustration />

        <AdminLoginForm />
      </div>

      <div className="hidden flex flex-col mx-auto my-auto min-w-[480px] min-h-screen bg-black[.05] sm:block">
        <div className="flex flex-row min-w-fit justify-around mx-auto my-auto rounded-xl shadow-xl bg-white">
          <div className="flex flex-col shrink content-center pt-8 bg-green-300 rounded-l-xl">
            <BackButton url="/" color="text-green-100" />
            <CompanyLogo color={false} className="mb-2 w-1/6 cursor-pointer mx-auto shrink" />
            <Illustration />
          </div>

          <div className="flex flex-col items-center shrink-0 mx-12">
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLoginMobile;
