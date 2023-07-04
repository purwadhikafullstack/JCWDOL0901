import React from "react";
import CompanyLogo from "../../components/CompanyLogo";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import SuccessBox from "../../components/SuccessBox";
import AlertBox from "../../components/AlertBox";
import BackButton from "../../components/BackButton";

const VerificationMessage = ({ isValid }) => {
	const navigate = useNavigate();
	return isValid ? (
		<SuccessBox>
			<p className="font-bold text-xl">Congratulations!</p>
			<p className="mx-8">Email verified successfully!</p>
			<Button name={"Login"} onClickHandler={() => navigate("/login")} />
		</SuccessBox>
	) : (
		<>
			<span className="text-red flex flex-row items-center py-2">
				<span className="material-symbols-rounded h-fit mr-2">error</span>
				<span className="font-bold text-xl my-2">Failed!</span>
			</span>
			<AlertBox>
				<p className="mx-8 font-medium">Invalid token or is expired!</p>
			</AlertBox>
		</>
	);
};

const VerifyPageLayout = ({ isValid }) => {
	return (
		<div className="flex flex-col mx-auto h-screen ">
			<div className="my-auto mx-auto flex flex-col items-center rounded-xl shadow-xl p-10 bg-white w-fit ">
				<CompanyLogo color={true} className="w-[150px] ml-3 mb-4" />
				<VerificationMessage isValid={isValid} />
			</div>
		</div>
	);
};

const VerifyPage = () => {
	const [isValid, setIsValid] = React.useState(null);
	const [isBusy, setIsBusy] = React.useState(true);
	const token = useParams().token;

	React.useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_BASE_URL}/auth/user/verify/${token}`)
			.then((result) => setIsValid(true))
			.catch((error) => setIsValid(false))
			.finally(() => setIsBusy(false));
	}, []);

	return !isBusy && <VerifyPageLayout isValid={isValid} />;
};

export default VerifyPage;
