import React, { useState } from "react";
import CategoryCarousel from "../../components/CategoryCarousel";
import ProductsHeader from "../../components/Products/ProductsHeader";
import ProductCards from "../../components/Products/ProductCards";
import Pagination from "../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../../redux/reducers/user/userAction";
import { promptUserPermissionForLocation } from "../../utils/geolocation";
import { getNearestBranch } from "../../components/BranchMenu/handlers/branchMenuHandler";
import { setUserNearestBranch } from "../../redux/reducers/user/userAction";
import MobileNavBar from "../../components/MobileNavBar";

const LocationMessage = ({ user }) => {
	return (
		<div className="ml-6 text-green-400 flex flex-row items-center justify-items-start pt-1">
			{user.location.pending && (
				<div className="text-green-400 flex flex-row items-center pt-1.5">
					<span className="material-symbols-rounded mr-1">move</span>
					<div className="text-green-400 font-medium z-20">Location pending...</div>
				</div>
			)}
			{!user.location.granted && !user.location.pending && (
				<div className="font-semibold text-red mt-1.5">Location Access Denied</div>
			)}
		</div>
	);
};

const ProductPage = () => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const [order, setOrder] = useState("");
	const itemPerPage = window.innerWidth > 640 ? 12 : 4;

	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	React.useEffect(() => {
		if (!user.branch.name) {
			promptUserPermissionForLocation()
				.then((result) => {
					const { latitude, longitude } = result.coords;
					dispatch(setUserLocation({ latitude, longitude, granted: true, pending: false }));
					getNearestBranch(user.location.latitude, user.location.longitude)
						.then((result) => {
							dispatch(setUserNearestBranch({ name: result.data.name, id: result.data.id }));
						})
						.catch((error) => {
							dispatch(setUserNearestBranch({ name: "Server Error!", id: null }));
						});
				})
				.catch((error) => dispatch(setUserLocation({ granted: false, pending: false })));
		}
	}, []);

	return (
		<div className="max-w-[640px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col overflow-y-hidden sm:max-w-full">
			<ProductsHeader setFilter={setFilter} order={order} setOrder={setOrder} sort={sort} setSort={setSort} />
			<LocationMessage user={user} />
			<div className="flex flex-col sm:px-8 pb-6">
				<CategoryCarousel setPage={setPage} />
				<ProductCards page={page} setMaxPage={setMaxPage} itemPerPage={itemPerPage} sort={sort} order={order} />
				<div className="flex justify-center mb-20 sm:mb-10">
					{maxPage ? (
						<Pagination page={page} setPage={setPage} maxPage={maxPage} />
					) : (
						<div className="border rounded-lg p-6 border-green-400 shadow-md">
							<div className="font-semibold text-green-400">Data not available</div>
						</div>
					)}
				</div>
			</div>
			<MobileNavBar />
		</div>
	);
};

export default ProductPage;
