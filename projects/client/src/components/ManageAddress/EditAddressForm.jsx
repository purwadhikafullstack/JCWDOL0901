import React, { useEffect, useRef, useState } from "react";
import CreateNewAddressInputField from "./CreateNewAddressInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikEditAddressConfiguration } from "./config/formikEditAddressConfiguration";
import DeleteAlert from "./DeleteAlert";
import { setAsDefaultHandler } from "./handlers/setAsDefaultHandler";
import { useDispatch } from "react-redux";

const OtherButtons = ({ address }) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<div className="flex mt-6 w-full">
			{alert ? <DeleteAlert open={open} setOpen={setOpen} address={address} /> : null}
			<div className="text-green-400 font-medium mt-4 text self-end text-sm">
				<button className="underline" onClick={() => setAsDefaultHandler(navigate, address, dispatch)}>
					Set as default
				</button>
			</div>
			<div className="text-red font-medium mt-4 text self-end text-sm ml-auto">
				<button className="underline" onClick={() => setOpen(true)}>
					Delete address
				</button>
			</div>
		</div>
	);
};

const EditAddressForm = ({ address }) => {
	const navigate = useNavigate();
	const formik = useFormik(formikEditAddressConfiguration(navigate, address));

	const useDidMountEffect = (func, deps) => {
		const didMount = useRef(false);

		useEffect(() => {
			if (didMount.current) func();
			else didMount.current = true;
		}, deps);
	};

	useDidMountEffect(() => {
		formik.setFieldValue("city_id", 0);
	}, [formik.values.province_id]);

	return (
		<div className="h-full items-center min-w-fit shrink-0 flex flex-col pb-10 px-6">
			<form onSubmit={formik.handleSubmit} noValidate className="h-full">
				<div className="flex flex-col h-full">
					<div className="mb-auto mt-6 w-72">
						<CreateNewAddressInputField formik={formik} address={address} />
					</div>
					<Button type="submit" name="Save Address" disabled={formik.isSubmitting} />
				</div>
			</form>
			<OtherButtons address={address} />
		</div>
	);
};

export default EditAddressForm;
