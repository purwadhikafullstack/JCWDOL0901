import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAdminLogin } from "../redux/reducers/admin/adminAction";

const isSuperAdmin = async (navigate, dispatch) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const adminData = await axios.get(
			`${process.env.REACT_APP_API_BASE_URL}/auth/admin/super`,
			config
		);
		if (!adminData) {
			navigate(`/admin/login`);
		}
		dispatch(setAdminLogin({ hasLogged: true, superAdmin: adminData.data.super }));
		return;
	} catch (error) {
		dispatch(setAdminLogin({ hasLogged: false, superAdmin: false }));
		navigate(`/admin/login`);
	}
};

const AdminAuthGuard = ({ component }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const admin = useSelector(state => state.admin);

	useEffect(() => {
		isSuperAdmin(navigate, dispatch);
	}, []);

	return admin.hasLogged ? (
		<React.Fragment>{component}</React.Fragment>
	) : (
		<React.Fragment></React.Fragment>
	);
};

export default AdminAuthGuard;
