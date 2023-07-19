import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { addProducts, determinePrice } from "./handlers/productsHandler";
import { useDispatch, useSelector } from "react-redux";
import { toCurrency } from "../../helper/currency";

const ProductCard = ({ product }) => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [price, setPrice] = useState({ original: 0, final: 0, promo: false });

	const dispatch = useDispatch();

	useEffect(() => {
		determinePrice(product, setPrice);
	}, [product]);

	return (
		<div key={product.id} className="flex flex-col border rounded-lg pb-4 shadow-xl min-h-[340px]">
			<button
				key={product.id}
				onClick={() => {
					navigate("/product/detail/" + product?.Inventories[0]?.id);
				}}
				className="group"
			>
				{product?.Inventories[0]?.promo?.isActive ? (
					<div className="flex relative items-center my-auto ml-2">
						<span className="z-50 absolute top-2 text-sm text-left text-green-100 px-2 py-0.5 rounded ml-2 bg-rose-500 w-fit">
							{price?.promo?.value}
						</span>
					</div>
				) : null}
				<div className="w-full bg-gray-200 rounded-lg overflow-hidden aspect-square">
					<img
						src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
						alt={product.name}
						className="w-full h-full object-center object-cover group-hover:opacity-75 bg-white"
					/>
				</div>

				<h3 className="mt-4 text-sm font-semibold text-left px-4 truncate" aria-labelledby={product.name}>
					{product.name}
				</h3>
				{product?.Inventories[0]?.promo?.isActive ? (
					<>
						<p className="mt-1 text-sm font-bold text-green-400 text-left px-4">
							{toCurrency(price?.final)}
							<span className="text-xs font-light text-gray-300">{` / ${product.unit}`}</span>
						</p>
						{price?.original ? (
							<p className="mt-1 text-sm font-medium text-gray-200 text-left px-4 line-through">
								{toCurrency(price?.original)}
							</p>
						) : null}
					</>
				) : (
					<>
						<p className="mt-1 text-sm font-bold text-green-400 text-left px-4">
							{toCurrency(price?.final)}
							<span className="text-xs font-light text-gray-300">{` / ${product.unit}`}</span>
						</p>
					</>
				)}
			</button>
			<button
				className="self-end mt-auto px-2 py-2 text-base font-medium rounded-md group"
				onClick={() => {
					addProducts(product.Inventories[0].id, 1, dispatch);
				}}
				disabled={!user?.hasLogged}
			>
				<PlusIcon
					className="text-green-200 mr-4 flex-shrink-0 h-6 w-6 border-2 border-green-200 rounded-lg group-hover:border-green-400 group-hover:text-green-400 group-disabled:text-gray-200 group-disabled:border-gray-200"
					aria-hidden="true"
				/>
			</button>
		</div>
	);
};

export default ProductCard;
