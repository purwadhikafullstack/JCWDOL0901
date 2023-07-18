import React from "react";
import { useNavigate } from "react-router-dom";
import { getBorderColor } from "../handlers/manageOrderHandler";
import { saveAs } from "file-saver";
import { cancelUserOrder, confirmUserOrder, rejectUserOrder, sendUserOrder } from "../handlers/buttonHandler";
import { toCurrency } from "../../../helper/currency";

const BranchName = ({ item }) => {
	return (
		<div className="col-span-2 my-auto whitespace-nowrap overflow-hidden truncate font-medium">
			{item.Branch.name}
		</div>
	);
};

const CreatedAt = ({ item }) => {
	return (
		<div className="col-span-2 my-auto flex flex-col">
			<span>{item.created_at.split("T")[0]}</span>
			<span>{item.created_at.split("T")[1].slice(0, 8)}</span>
		</div>
	);
};

const Proof = ({ item }) => {
	return item.Proof ? (
		<div className="col-span-1 my-auto underline font-semibold cursor-pointer">
			<span
				onClick={(event) => {
					event.stopPropagation();
					saveAs(process.env.REACT_APP_IMAGE_BASE_URL + item.Proof.image, `proof_transaction_${item.id}.jpg`);
				}}
			>
				Download Proof
			</span>
		</div>
	) : (
		<div className="col-span-1 my-auto font-bold text-red cursor-">Awaiting...</div>
	);
};

const Amount = ({ item }) => {
	return <div className="col-span-2 my-auto font-semibold">{toCurrency(item.amount)}</div>;
};

const Status = ({ item }) => {
	const borderColor = getBorderColor(item.Status.id);

	return (
		<div className={"col-span-2 my-auto py-1 border-l-8 border-2 rounded " + borderColor}>
			<span className="">{item.Status.name}</span>
		</div>
	);
};

const Voucher = ({ item }) => {
	return (
		<div className="col-span-1 my-auto">
			{item.voucher_id ? (
				<span className="material-symbols-rounded bg-green-500 rounded-full text-green-100 font-medium">
					check_small
				</span>
			) : (
				<span className="material-symbols-rounded bg-red rounded-full text-green-100 font-medium">
					horizontal_rule{" "}
				</span>
			)}
		</div>
	);
};

const Action = ({ item, setIsUpdated }) => {
	if (item.status_id === 1) {
		return (
			<div className="col-span-3 my-auto">
				<button
					className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2 w-20"
					onClick={(event) => {
						event.stopPropagation();
						cancelUserOrder(item.id, setIsUpdated);
					}}
				>
					Cancel
				</button>
			</div>
		);
	} else if (item.status_id === 2) {
		return (
			<div className="col-span-3 my-auto">
				<button
					className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2 w-20"
					onClick={(event) => {
						event.stopPropagation();
						confirmUserOrder(item.id, setIsUpdated);
					}}
				>
					Confirm
				</button>
				<button
					className="bg-orange text-green-100 px-2 py-1 rounded-lg mr-2 w-20"
					onClick={(event) => {
						event.stopPropagation();
						rejectUserOrder(item.id, setIsUpdated);
					}}
				>
					Reject
				</button>
				<button
					className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2 w-20"
					onClick={(event) => {
						event.stopPropagation();
						cancelUserOrder(item.id, setIsUpdated);
					}}
				>
					Cancel
				</button>
			</div>
		);
	} else if (item.status_id === 3) {
		return (
			<div className="col-span-3 my-auto">
				<button
					className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2 w-20"
					onClick={(event) => {
						event.stopPropagation();
						sendUserOrder(item.id, setIsUpdated);
					}}
				>
					Send
				</button>
				<button
					className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2 w-20"
					onClick={(event) => {
						event.stopPropagation();
						cancelUserOrder(item.id, setIsUpdated);
					}}
				>
					Cancel
				</button>
			</div>
		);
	}
	return <></>;
};

const OrderBodyContent = ({ superAdmin, data, setIsUpdated }) => {
	const navigate = useNavigate();
	return data.map((item, index) => {
		return (
			<div
				className="rounded-lg border-green-300 border-2 mt-4 cursor-pointer hover:bg-green-100/50"
				onClick={() => navigate(`/admin/order/detail/${item.id}`)}
			>
				<div className="text-sm px-8 grid grid-cols-12 w-full h-16 py-2">
					<div className="col-span-1 text-[#f47229] font-bold my-auto">{item.id}</div>
					{superAdmin && <BranchName item={item} />}
					<CreatedAt item={item} />
					<Proof item={item} />
					<Amount item={item} />
					<Status item={item} />
					<Voucher item={item} />
					{!superAdmin && <Action item={item} setIsUpdated={setIsUpdated} />}
				</div>
			</div>
		);
	});
};

export default OrderBodyContent;
