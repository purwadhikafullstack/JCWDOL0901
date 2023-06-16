import axios from "axios";
import Swal from "sweetalert2";

const userAccountSettingErrorHandler = async (error) => {
  if (error?.code === "ERR_NETWORK") {
    return "Server unreachable, try again later!";
  } else if (error?.code === "CONFIRM_PASS_ERR") {
    return "Confirm password not equal!";
  } else if (error?.response?.status === 400) {
    return error?.response?.data;
  }

  return "Something went wrong!";
};

export const userAccountSettingHandler = async (data, setError) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.patch(
      `${process.env.REACT_APP_API_BASE_URL}/profile/update`,
      data,{
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    Swal.fire({
			icon: "success",
			title: "Updates Saved",
			showConfirmButton: false,
			timer: 2000,
		});
    return response.data;
  } catch (error) {
    Swal.fire({
			icon: "error",
			title: await setError(await userAccountSettingErrorHandler(error)),
			showConfirmButton: false,
			timer: 2000,
		});
    
  }
};
