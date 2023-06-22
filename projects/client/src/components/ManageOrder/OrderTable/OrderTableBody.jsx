import React from "react";
import { generateUrlQuery } from "../handlers/manageOrderHandler";

const OrderTableBody = ({ superAdmin, name, startDate, endDate, filterBy, filter, sort, order, page, setMaxPage }) => {
	React.useEffect(() => {
		// fetch data
		const params = generateUrlQuery(name, startDate, endDate, filterBy, filter, sort, order, page);
	}, [name, startDate, endDate, filter, order, page]);

	return (
		<>
			<div className="rounded-lg border border-green-300 border-2 mt-4">
				<div className="text-sm px-8 grid grid-cols-12 w-full h-16 py-2">
					<div className="col-span-1 text-[#f47229] font-bold my-auto">1</div>
					{superAdmin && (
						<div className="col-span-2 my-auto whitespace-nowrap overflow-hidden truncate font-medium">
							Groseria Store Semarang
						</div>
					)}

					<div className="col-span-2 my-auto flex flex-col">
						<span>24 Juli 2023</span>
						<span>12:30:00</span>
					</div>
					<div className="col-span-2 my-auto">Shania</div>
					<div className="col-span-2 my-auto font-semibold">Rp 23.450</div>
					<div className="col-span-2 my-auto py-1 border-l-8 border-2 border-gray-300 rounded">
						<span className="">Menunggu Pembayaran</span>
					</div>
					<div className="col-span-1 my-auto">
						<span className="material-symbols-rounded bg-green-500 rounded-full text-green-100 font-medium">
							check_small
						</span>
					</div>
					{!superAdmin && (
						<div className="col-span-2 my-auto">
							<button className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2">Update</button>
							<button className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2">Decline</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default OrderTableBody;

{
	/* <div className="rounded-lg border border-green-300 border-2 mt-4">
				<div className="text-sm px-8 grid grid-cols-12 w-full h-16 py-2">
					<div className="col-span-1 text-[#f47229] font-bold my-auto">1</div>
					{superAdmin && (
						<div className="col-span-2 my-auto whitespace-nowrap overflow-hidden truncate font-medium">
							Groseria Store Semarang
						</div>
					)}

					<div className="col-span-2 my-auto flex flex-col">
						<span>24 Juli 2023</span>
						<span>12:30:00</span>
					</div>
					<div className="col-span-2 my-auto">Shania</div>
					<div className="col-span-2 my-auto font-semibold">Rp 23.450</div>
					<div className="col-span-2 my-auto py-1 border-l-8 border-2 border-gray-300 rounded">
						<span className="">Menunggu Pembayaran</span>
					</div>
					<div className="col-span-1 my-auto">
						<span className="material-symbols-rounded bg-green-500 rounded-full text-green-100 font-medium">
							check_small
						</span>
					</div>
					{!superAdmin && (
						<div className="col-span-2 my-auto">
							<button className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2">Update</button>
							<button className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2">Decline</button>
						</div>
					)}
				</div>
			</div>
			<div className="rounded-lg border border-green-300 border-2 mt-4">
				<div className="text-sm px-8 grid grid-cols-12 w-full h-16 py-2">
					<div className="col-span-1 text-[#f47229] font-bold my-auto">2</div>
					{superAdmin && (
						<div className="col-span-2 my-auto whitespace-nowrap overflow-hidden truncate font-medium">
							Groseria Store Semarang
						</div>
					)}

					<div className="col-span-2 my-auto flex flex-col">
						<span>24 Juli 2023</span>
						<span>12:30:00</span>
					</div>
					<div className="col-span-2 my-auto">Shania</div>
					<div className="col-span-2 my-auto font-semibold">Rp 23.450</div>
					<div className="col-span-2 my-auto py-1 border-l-8 border-2 border-yellow rounded">
						<span className="">Menunggu Konfirmasi</span>
					</div>
					<div className="col-span-1 my-auto">
						<span className="material-symbols-rounded bg-green-500 rounded-full text-green-100 font-medium">
							check_small
						</span>
					</div>
					{!superAdmin && (
						<div className="col-span-2 my-auto">
							<button className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2">Update</button>
							<button className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2">Decline</button>
						</div>
					)}
				</div>
			</div>
			<div className="rounded-lg border border-green-300  border-2  mt-3">
				<div className="text-sm px-8 grid grid-cols-12 w-full h-16 py-2">
					<div className="col-span-1 text-[#f47229] font-bold my-auto">3</div>
					{superAdmin && (
						<div className="col-span-2 my-auto whitespace-nowrap overflow-hidden truncate font-medium">
							Groseria Store Semarang
						</div>
					)}
					<div className="col-span-2 my-auto flex flex-col">
						<span>24 Juli 2023</span>
						<span>12:30:00</span>
					</div>
					<div className="col-span-2 my-auto">Customer</div>
					<div className="col-span-2 my-auto font-semibold">Rp 23.450</div>
					<div className="col-span-2 my-auto py-1 border-l-8 border-2 border-purple rounded">
						<span className="">Pesanan Diproses</span>
					</div>
					<div className="col-span-1 my-auto">
						<span className="material-symbols-rounded bg-red rounded-full text-green-100 font-medium">
							horizontal_rule{" "}
						</span>
					</div>
					{!superAdmin && (
						<div className="col-span-2 my-auto">
							<button className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2">Update</button>
							<button className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2">Decline</button>
						</div>
					)}
				</div>
			</div>
			<div className="rounded-lg border border-green-300  border-2  mt-3">
				<div className="text-sm px-8 grid grid-cols-12 w-full h-16 py-2">
					<div className="col-span-1 text-[#f47229] font-bold my-auto">4</div>
					{superAdmin && (
						<div className="col-span-2 my-auto whitespace-nowrap overflow-hidden truncate font-medium">
							Groseria Store Semarang
						</div>
					)}

					<div className="col-span-2 my-auto flex flex-col">
						<span>24 Juli 2023</span>
						<span>12:30:00</span>
					</div>
					<div className="col-span-2 my-auto">Customer</div>
					<div className="col-span-2 my-auto font-semibold">Rp 23.450</div>
					<div className="col-span-2 my-auto py-1 border-l-8 border-2 border-cyan rounded">
						<span className="">Pesanan Dikirim</span>
					</div>
					<div className="col-span-1 my-auto">
						<span className="material-symbols-rounded bg-red rounded-full text-green-100 font-medium">
							horizontal_rule{" "}
						</span>
					</div>
					{!superAdmin && (
						<div className="col-span-2 my-auto">
							<button className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2">Update</button>
							<button className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2">Decline</button>
						</div>
					)}
				</div>
			</div>
			<div className="rounded-lg border border-green-300  border-2  mt-3">
				<div className="text-sm px-8 grid grid-cols-12 w-full h-16 py-2">
					<div className="col-span-1 text-[#f47229] font-bold my-auto">5</div>
					{superAdmin && (
						<div className="col-span-2 my-auto whitespace-nowrap overflow-hidden truncate font-medium">
							Groseria Store Semarang
						</div>
					)}

					<div className="col-span-2 my-auto flex flex-col">
						<span>24 Juli 2023</span>
						<span>12:30:00</span>
					</div>
					<div className="col-span-2 my-auto">Customer</div>
					<div className="col-span-2 my-auto font-semibold">Rp 23.450</div>
					<div className="col-span-2 my-auto py-1 border-l-8 border-2 border-green-200 rounded">
						<span className="">Pesanan Diterima</span>
					</div>
					<div className="col-span-1 my-auto">
						<span className="material-symbols-rounded bg-red rounded-full text-green-100 font-medium">
							horizontal_rule{" "}
						</span>
					</div>
					{!superAdmin && (
						<div className="col-span-2 my-auto">
							<button className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2">Update</button>
							<button className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2">Decline</button>
						</div>
					)}
				</div>
			</div>
			<div className="rounded-lg border border-green-300  border-2  mt-3">
				<div className="text-sm px-8 grid grid-cols-12 w-full h-16 py-2">
					<div className="col-span-1 text-[#f47229] font-bold my-auto">6</div>
					{superAdmin && (
						<div className="col-span-2 my-auto whitespace-nowrap overflow-hidden truncate font-medium">
							Groseria Store Semarang
						</div>
					)}

					<div className="col-span-2 my-auto flex flex-col">
						<span>24 Juli 2023</span>
						<span>12:30:00</span>
					</div>
					<div className="col-span-2 my-auto">Customer</div>
					<div className="col-span-2 my-auto font-semibold">Rp 23.450</div>
					<div className="col-span-2 my-auto py-1 border-l-8 border-2 border-red rounded">
						<span className="">Pesanan Dibatalkan</span>
					</div>
					<div className="col-span-1 my-auto">
						<span className="material-symbols-rounded bg-red rounded-full text-green-100 font-medium">
							horizontal_rule{" "}
						</span>
					</div>
					{!superAdmin && (
						<div className="col-span-2 my-auto">
							<button className="bg-green-300 text-green-100 px-2 py-1 rounded-lg mr-2">Update</button>
							<button className="bg-red text-green-100 px-2 py-1 rounded-lg mr-2">Decline</button>
						</div>
					)}
				</div>
			</div> */
}