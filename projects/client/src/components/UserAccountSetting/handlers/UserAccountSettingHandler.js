import axios from "axios";

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
    const response = await axios.patch(
      `${process.env.REACT_APP_API_BASE_URL}/profile/update`,
      data
    );
    return response.data;
  } catch (error) {
    await setError(await userAccountSettingErrorHandler(error));
  }
};
