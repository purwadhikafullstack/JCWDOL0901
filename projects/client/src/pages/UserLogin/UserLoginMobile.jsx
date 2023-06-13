import React from "react";
import UserLoginIllustration from "../../components/UserLogin/UserLoginIllustration";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";
import BackButton from "../../components/BackButton";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";

const Illustration = () => {
  return (
    <div className="text-white flex flex-row justify-center items-center z-10">
      <div className="mt-28 mr-auto ml-6 text-3xl font-semibold">User Login</div>
      <UserLoginIllustration className="w-[100px] mr-auto ml-auto pr-4" />
    </div>
  );
};

function UserLoginMobile() {
  return (
    <div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
      <CircularBackgroundDecoration />
      <BackButton url="/" color="text-white" />
      <Illustration />
      <UserLoginForm />
    </div>
  );
}

export default UserLoginMobile;
