import React from "react";
import UserLoginIllustration from "../../components/UserLogin/UserLoginIllustration";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";
import BackButton from "../../components/BackButton";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";

const Illustration = () => {
  return (
    <>
      <div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
        <div className="mt-28 mr-auto ml-6 text-3xl font-semibold">User Login</div>
        <UserLoginIllustration className="w-[100px] mr-auto ml-auto pr-4" />
      </div>

      <div className="hidden h-full mx-12 shrink-0 sm:flex sm:flex-col sm:justify-center">
        <div className="mb-4 text-green-100 text-3xl font-light">User Login</div>
        <UserLoginIllustration className="min-w-[100px] w-[100px]" />
      </div>
    </>
  );
};

function UserLoginPage() {
  return (
    <div className="flex flex-col mx-auto flex-1 min-w-[480px] w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:py-20 sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
      <CircularBackgroundDecoration />
      <div className="z-10 relative sm:flex sm:flex-col sm:bg-green-400 sm:h-inherit sm:rounded-xl sm:p-6">
        <BackButton url="/" color="text-green-100" />
        <Illustration />
      </div>
      <UserLoginForm />
    </div>
  );
}

export default UserLoginPage;
