import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTransactionID } from "../../redux/reducers/proof/proofAction";

const uploadProofHandler = (navigate, dispatch, transaction) => {
	dispatch(setTransactionID(transaction.id));
	navigate("/order/upload");
};

const ActionButtons = ({ transaction }) => {
	const navigate = useNavigate();
	const dispactch = useDispatch();
	return (
		<div className="py-6">
			<div className="mx-10">
				<div className="mb-4 font-semibold text-left">Action</div>
				<div className="flex flex-row justify-start">
					{transaction.status_id === 1 ? (
						<>
							<button
								className="bg-green-400 text-green-100 px-4 py-2 rounded-lg mr-4"
								onClick={() => uploadProofHandler(navigate, dispactch, transaction)}
							>
								Upload Payment Proof
							</button>
							<button className="bg-red text-green-100 px-4 py-2 rounded-lg mr-4" onClick={() => {}}>
								Cancel Order
							</button>
						</>
					) : transaction.status_id === 2 ? (
						<button className="bg-red text-green-100 px-4 py-2 rounded-lg mr-4" onClick={() => {}}>
							Cancel Order
						</button>
					) : transaction.status_id === 4 ? (
						<button className="bg-green-400 text-green-100 px-4 py-2 rounded-lg mr-4" onClick={() => {}}>
							Confirm the delivery of my order
						</button>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ActionButtons;
