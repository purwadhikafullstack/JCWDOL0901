import React from "react";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";
import BackButton from "../../components/BackButton";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserLoginIllustration from "../../components/UserLogin/UserLoginIllustration";
import UserAccountSettingForm from "../../components/UserAccountSetting/UserAccountSettingForm";

const Illustration = () => {
  return (
    <>
      <div className="bg-green-200 block text-white flex flex-row justify-center items-center z-10 sm:hidden">
        <div className="my-3 mr-auto ml-6 text-3xl font-semibold">Profile</div>
      </div>

      <div className="hidden my-8 mx-20 shrink-0 sm:flex sm:flex-col sm:justify-center">
        <div className="mb-4 text-green-100 text-3xl font-light">Profile</div>
      </div>
    </>
  );
};

function UserAccountSettingPage() {
  return (
    // <>
    //   <div className="hidden sm:block" aria-hidden="true">
    //     <div className="py-5">
    //       <div className="border-t border-gray-200" />
    //     </div>
    //   </div>

    //   <div className="mt-10 sm:mt-0">
    //     <div className="border md:grid md:grid-cols-3 md:gap-6">
    //       <div className="p-7 md:col-span-1">
    //         <div className="border px-4 sm:px-0">
    //           <h3 className="border text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
    //           <p className="mt-1 text-sm text-gray-600">
    //             Use a permanent address where you can receive mail.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="mt-5 md:col-span-2 md:mt-0">
    //         <form action="#" method="POST">
    //           <div className="overflow-hidden shadow sm:rounded-md">
    //             <div className="bg-white px-4 py-5 sm:p-6">
    //               <div className="grid grid-cols-6 gap-6">
    //                 <div className="col-span-6 sm:col-span-3">
    //                   <label
    //                     htmlFor="first-name"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="first-name"
    //                     id="first-name"
    //                     autoComplete="given-name"
    //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    //                   />
    //                 </div>

    //                 <div className="col-span-6 sm:col-span-3">
    //                   <label htmlFor="country" className="block text-sm font-medium text-gray-700">
    //                     Gender
    //                   </label>
    //                   <select
    //                     id="country"
    //                     name="country"
    //                     autoComplete="country-name"
    //                     className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    //                   >
    //                     <option>United States</option>
    //                     <option>Canada</option>
    //                     <option>Mexico</option>
    //                   </select>
    //                 </div>

    //                 <div className="col-span-6 sm:col-span-4">
    //                   <label
    //                     htmlFor="email-address"
    //                     className="block text-sm font-medium text-gray-700"
    //                   >
    //                     Email address
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="email-address"
    //                     id="email-address"
    //                     autoComplete="email"
    //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    //                   />
    //                 </div>

    //                 <div className="w-full sm:w-1/2">
    //                   <label className="block mb-2 font-bold" htmlFor="birthdate">
    //                     Birthdate:
    //                   </label>
    //                   <input
    //                     className="w-full px-4 py-2 border rounded"
    //                     type="date"
    //                     id="birthdate"
    //                     // value={birthdate}
    //                     // onChange={handleBirthdateChange}
    //                   />
    //                 </div>

    //                 <div className="col-span-6 sm:col-span-6 lg:col-span-2">
    //                   <label htmlFor="city" className="block text-sm font-medium text-gray-700">
    //                     City
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="city"
    //                     id="city"
    //                     autoComplete="address-level2"
    //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
    //               <button
    //                 type="submit"
    //                 className="inline-flex justify-center rounded-md border border-transparent bg-green-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-200 focus:outline-none active:bg-green-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //               >
    //                 Save
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="hidden sm:block" aria-hidden="true">
    //     <div className="py-5">
    //       <div className="border-t border-gray-200" />
    //     </div>
    //   </div>
    // </>

    // ------------------------------

    <div className="flex flex-col mx-auto flex-1 min-w-[480px] w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:py-20 sm:max-w-full min-h-screen sm:drop-shadow-2xl overflow-hidden">
      <div className="z-10 relative sm:flex sm:flex-col sm:bg-green-400 sm:h-inherit sm:rounded-xl sm:p-6">
        <BackButton url="/" color="text-green-100" />
        <Illustration />
      </div>
      <UserAccountSettingForm />
    </div>
  );
}

export default UserAccountSettingPage;
