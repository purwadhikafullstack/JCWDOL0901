import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserLogin } from "../redux/reducers/user/userAction";

const isUserLogged = async (navigate, dispatch) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const userData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/user/logged`, config);
		if (!userData) {
			navigate(`/`);
		}
		dispatch(setUserLogin({ hasLogged: true }));
		return;
	} catch (error) {
		dispatch(setUserLogin({ hasLogged: false }));
		navigate(`/`);
	}
};

const UserAuthGuard = ({ component }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	useEffect(() => {
		isUserLogged(navigate, dispatch);
	}, []);

	return user.hasLogged ? <React.Fragment>{component}</React.Fragment> : <React.Fragment></React.Fragment>;
};

export default UserAuthGuard;
