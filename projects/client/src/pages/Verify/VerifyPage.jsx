import React from "react";
import CompanyLogo from "../../components/CompanyLogo";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import SuccessBox from "../../components/SuccessBox";
import AlertBox from "../../components/AlertBox";

const VerificationMessage = ({ isValid }) => {
	const navigate = useNavigate();
	return isValid ? (
		<SuccessBox>
			<p className="font-bold text-xl">Congratulations!</p>
			<p className="mx-8">Email verified successfully!</p>
			<Button name={"Login"} onClickHandler={() => navigate("/login")} />
		</SuccessBox>
	) : (
		<AlertBox>
			<span class="material-icons">error</span>
			<p className="font-bold text-xl mb-2">Error!</p>

			<p className="mx-8 font-medium">Invalid token or is expired!</p>
		</AlertBox>
	);
};

const VerifyPageLayout = ({ isValid }) => {
	return (
		<div className="flex flex-col bg-white mx-auto w-[480px] h-screen sm:w-full">
			<div className="my-auto mx-auto flex flex-col items-center pb-8">
				<CompanyLogo color={true} className="w-[175px] mb-8" />
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
			.then(result => setIsValid(true))
			.catch(error => setIsValid(false))
			.finally(() => setIsBusy(false));
	}, []);

	return !isBusy && <VerifyPageLayout isValid={isValid} />;
};

export default VerifyPage;
