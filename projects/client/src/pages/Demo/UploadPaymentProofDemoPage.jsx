import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTransactionID } from "../../redux/reducers/proof/proofAction";
import CompanyLogo from "../../components/CompanyLogo";
import PageTitle from "../../components/PageTitle";

const UploadPaymentProofPage = () => {
	// const transaction_id = useSelector((state) => state.proof.transaction_id);
	const transaction_id = 6;
	const dispatch = useDispatch();

	React.useEffect(() => {
		return () => dispatch(clearTransactionID());
	}, []);

	return (
		<div className="flex flex-col items-center bg-white">
			<CompanyLogo color={true} className="w-[150px] mt-4" />
			<span className="text-xl font-medium">Upload Payment Proof</span>
		</div>
	);
};

export default UploadPaymentProofPage;
