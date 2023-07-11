import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTransactionID } from "../../redux/reducers/proof/proofAction";
import CompanyLogo from "../../components/CompanyLogo";
import PageTitle from "../../components/PageTitle";
import BackButton from "../../components/BackButton";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";
import PaymentInformation from "../../components/UploadProof/PaymentInformation";
import UploadPanel from "../../components/UploadProof/UploadPanel";
import Footer from "../../components/Footer";
import MobileNavBar from "../../components/MobileNavBar";

const Header = () => {
	return (
		<>
			<div className="flex flex-row mr-auto z-50 -mb-8 ">
				<BackButton
					url={-1}
					color="text-green-100 sm:text-3xl sm:text-gray-400 sm:hover:text-green-300 hover:text-gray-200"
				/>
			</div>
			<div className="block sm:hidden z-40">
				<CompanyLogo color={false} className="w-[50px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};

const UploadPaymentProofPage = () => {
	const transaction_id = useSelector((state) => state.proof.transaction_id);
	const dispatch = useDispatch();

	React.useEffect(() => {
		return () => dispatch(clearTransactionID());
	}, []);

	return (
		<div className="flex flex-col justify-between bg-white">
			<div className="flex flex-col max-w-[640px] min-h-screen overflow-x-hidden sm:max-w-full">
				<CircularBackgroundDecoration />
				<Header />
				<PageTitle title="Upload Payment Proof" color={"text-green-100 sm:text-green-400 z-10"} />
				<div className="flex flex-col w-fit self-center border bg-white mt-12 mx-4 rounded-lg shadow z-50 sm:my-auto sm:flex-row">
					<PaymentInformation transaction_id={transaction_id} />
					<UploadPanel transaction_id={transaction_id} />
				</div>
				<Footer />
			</div>
			<MobileNavBar />
		</div>
	);
};

export default UploadPaymentProofPage;
