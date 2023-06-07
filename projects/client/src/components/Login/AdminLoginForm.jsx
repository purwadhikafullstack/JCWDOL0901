import React from "react";
import ErrorWarning from "../ErrorWarning";
import AdminLoginFormWithValidator from "./AdminLoginFormWithValidator";

function AdminLoginForm() {
  const [error, setError] = React.useState("");

  return (
    <div className="mt-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-6">
      <ErrorWarning error={error} />
      <AdminLoginFormWithValidator setError={setError} />
    </div>
  );
}

export default AdminLoginForm;
