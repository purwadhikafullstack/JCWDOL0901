import axios from "axios";

const validateUserLoginInput = (input) => {
  const { email, password } = input;

  return { email, password };
};

const userLoginErrorHandler = async (error) => {
  if (error?.code === "ERR_NETWORK") {
    return "Server unreachable, try again later!";
  } else if (error?.code === "CONFIRM_PASS_ERR") {
    return "Confirm password not equal!";
  } else if (error?.response?.status === 400) {
    return error?.response?.data;
  }

  return "Something went wrong!";
};

export const userLoginButtonHandler = async (input, setError, setBusy, navigate) => {
  try {
    const validatedInput = await validateUserLoginInput(input);
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/login`, validatedInput);
    navigate("/", {
      state: { fromAdminLogin: true, email: validatedInput.email },
    });
  } catch (error) {
    console.log(error);
    await setBusy(false);
    await setError(await userLoginErrorHandler(error));
  }
};
