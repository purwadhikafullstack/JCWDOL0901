import React from "react";
import ErrorWarning from "../ErrorWarning";
import AdminLoginFormWithValidator from "./AdminLoginFormWithValidator";
import CompanyLogo from "../CompanyLogo";

function AdminLoginForm() {
  const [error, setError] = React.useState("");

  return (
    <div className="flex flex-col items-center min-w-fit shrink-0 px-6 pt-20 bg-white sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
      <CompanyLogo color={true} className="w-[100px] hidden sm:block sm:mb-4" />
      <ErrorWarning error={error} />
      <AdminLoginFormWithValidator setError={setError} />
    </div>
  );
}

export default AdminLoginForm;
